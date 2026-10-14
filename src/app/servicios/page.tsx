import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Servicios de comida casera y catering",
  description:
    "Colectividades, comida a domicilio, catering de empresa, eventos y monterías en Ciudad Real y Puertollano.",
  path: "/servicios",
});

export default function ServiciosPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          ...services.map((service) =>
            serviceSchema({
              name: service.name,
              description: service.card,
              path: `/servicios/${service.slug}`,
            }),
          ),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Servicios"
        title="Comida casera, colectividades y catering en Ciudad Real"
        lead="Seis servicios, una misma cocina. Todos se piden por presupuesto, cubren Ciudad Real, Puertollano y hasta 60 km, y ninguno tiene un precio publicado."
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-3xl border border-line bg-paper p-6">
            <h2 className="font-serif text-3xl text-green-deep">
              <Link href={`/servicios/${service.slug}`} className="hover:underline">
                {service.name}
              </Link>
            </h2>
            <p className="mt-3 text-ink-soft leading-relaxed">{service.lead}</p>
            <Link href={`/servicios/${service.slug}`} className="mt-4 inline-block text-sm font-semibold text-green-dark underline">
              Ver {service.nav.toLowerCase()}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
