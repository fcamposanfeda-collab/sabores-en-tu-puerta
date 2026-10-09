import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { enabledLocalities, localities, nearestHub, nearestKm } from "@/data/localities";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, localBusinessSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Zonas de reparto en Ciudad Real",
  description:
    "Reparto de comida casera en Ciudad Real, Puertollano y hasta 60 km. Consulta si tu localidad entra y pide presupuesto.",
  path: "/zonas-de-reparto",
});

export default function ZonasPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Zonas de reparto", path: "/zonas-de-reparto" },
  ];
  const excluded = localities.filter((locality) => !locality.enabled);

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), localBusinessSchema())} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Zona"
        title="Dónde llega la comida casera a domicilio"
        lead={`${site.areaSummary} La distancia es en línea recta desde el núcleo de Ciudad Real o de Puertollano. En el límite, y en fincas, se confirma al pedir presupuesto.`}
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="sr-only">Localidades dentro del radio de reparto</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th className="py-3 pr-4 font-semibold">Localidad</th>
                <th className="py-3 pr-4 font-semibold">Desde Ciudad Real</th>
                <th className="py-3 pr-4 font-semibold">Desde Puertollano</th>
                <th className="py-3 font-semibold">Centro más cercano</th>
              </tr>
            </thead>
            <tbody>
              {enabledLocalities.map((locality) => (
                <tr key={locality.slug} className="border-b border-line">
                  <td className="py-3 pr-4">
                    <Link href={`/zonas-de-reparto/${locality.slug}`} className="font-medium text-green-dark underline-offset-2 hover:underline">
                      {locality.name}
                    </Link>
                    {locality.edge ? <span className="ml-2 text-xs text-ink-soft">límite</span> : null}
                  </td>
                  <td className="py-3 pr-4">{locality.kmFromCiudadReal} km</td>
                  <td className="py-3 pr-4">{locality.kmFromPuertollano} km</td>
                  <td className="py-3">{nearestHub(locality)} ({nearestKm(locality)} km)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-12 font-serif text-3xl text-green-deep">Revisadas y fuera del radio</h2>
        <p className="mt-3 max-w-3xl text-ink-soft">
          Estas localidades se miraron y quedan a más de 60 km de los dos centros. No tienen página propia porque no forman parte del servicio. Si quieres ampliar la zona, cambia `enabled` en el archivo de localidades.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-ink-soft">
          {excluded.map((locality) => (
            <li key={locality.slug}>
              <strong className="font-medium text-ink">{locality.name}.</strong> {locality.exclusionReason}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
