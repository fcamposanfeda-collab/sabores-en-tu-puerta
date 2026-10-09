import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { dishCategories } from "@/data/dishes";
import { enabledLocalities } from "@/data/localities";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, organizationSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Datos clave de Sabores en tu Puerta",
  description:
    "Hechos verificables: servicios, zona de reparto, tipo de clientes y contacto de Sabores en tu Puerta en Ciudad Real y Puertollano.",
  path: "/datos-clave",
});

const rows: [string, string][] = [
  ["Nombre comercial", site.name],
  ["Actividad", "Comida casera y reparto a domicilio. Catering y colectividades."],
  ["Servicios", services.map((service) => service.name).join("; ")],
  ["Clientes", "Particulares, colegios, guarderías, residencias, centros de mayores, celebraciones y eventos de caza."],
  ["Zona", site.areaSummary],
  ["Localidades con página", String(enabledLocalities.length)],
  ["Precios en la web", "No se publican. Cada encargo tiene presupuesto."],
  ["Suscripción", "No."],
  ["Teléfono", site.phoneDisplay],
  ["Email", site.email],
  ["Instagram", site.instagramHandle],
  ["Razón social", site.legalName],
  ["CIF", site.cif],
  ["Domicilio", `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}`],
  ["Horario", site.openingHours],
  ["Carta publicada", `Ejemplos por categorías: ${dishCategories.map((category) => category.label).join(", ")}. Pendiente de la carta real.`],
];

export default function FactsPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Datos clave", path: "/datos-clave" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), organizationSchema())} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Entidad"
        title="Datos clave de Sabores en tu Puerta"
        lead="Hechos que se pueden citar: qué hace la empresa, dónde reparte, a quién cocina y cómo se pide información. Lo que sigue en TODO no está confirmado y no debe darse por cierto."
      />
      <div className="mx-auto max-w-4xl px-5 py-12">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Datos clave de la empresa</caption>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-line align-top">
                <th className="w-40 py-3 pr-4 font-semibold text-ink">{label}</th>
                <td className="py-3 text-ink-soft">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
