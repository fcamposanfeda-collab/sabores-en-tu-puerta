import Link from "next/link";
import { CallButton, WhatsappButton } from "@/components/Buttons";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { enabledLocalities } from "@/data/localities";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, localBusinessSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Zonas de reparto en Ciudad Real",
  description:
    "Reparto de comida casera en Ciudad Real, Puertollano y pueblos de alrededor. Consulta si tu localidad entra.",
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
        lead={`Repartimos en ${site.areaSummary} Si la entrega es en una finca o fuera del casco, se confirma al pedir presupuesto.`}
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-serif text-3xl text-green-deep">Localidades donde repartimos</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {enabledLocalities.map((locality) => (
            <li key={locality.slug}>
              <Link
                href={`/zonas-de-reparto/${locality.slug}`}
                className="flex min-h-12 items-center justify-between rounded-2xl border border-line bg-paper px-4 py-3 font-medium text-green-dark hover:border-green"
              >
                {locality.name}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
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
