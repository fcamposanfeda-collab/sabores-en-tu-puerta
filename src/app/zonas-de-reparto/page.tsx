import Link from "next/link";
import { CallButton, WhatsappButton } from "@/components/Buttons";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { enabledLocalities, nearestHub, nearestKm } from "@/data/localities";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, localBusinessSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Zonas de reparto en Ciudad Real",
  description:
    "Reparto de comida casera en Ciudad Real, Puertollano y hasta 60 km. Consulta si tu localidad entra.",
  path: "/zonas-de-reparto",
});

export default function ZonasPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Zonas de reparto", path: "/zonas-de-reparto" },
  ];

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
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Localidades dentro del radio de reparto</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th className="py-3 pr-4 font-semibold">Localidad</th>
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
                  <td className="py-3">{nearestHub(locality)} ({nearestKm(locality)} km)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section className="border-t border-line bg-paper" aria-labelledby="consulta-zona">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="consulta-zona" className="font-serif text-4xl text-green-deep">
            ¿No aparece tu localidad?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
            Si no la ves en la lista, consúltanos. Te decimos si entra en el reparto de Ciudad Real o de Puertollano.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsappButton message="Hola, mi localidad no sale en la lista de zonas. ¿Podéis decirme si repartís allí?">
              WhatsApp
            </WhatsappButton>
          </div>
          <Link href="/contacto" className="mt-4 inline-block text-sm font-semibold text-green-dark underline">
            O escríbenos por el formulario
          </Link>
        </div>
      </section>
    </>
  );
}
