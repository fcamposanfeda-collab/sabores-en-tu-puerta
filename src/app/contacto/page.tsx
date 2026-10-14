import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { site, whatsappUrl } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, localBusinessSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Contacto de comida a domicilio",
  description:
    "Contacto de comida casera, colectividades o catering en Ciudad Real y Puertollano. WhatsApp, teléfono y formulario.",
  path: "/contacto",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contacto" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), localBusinessSchema())} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Contacto"
        title="Pide información o un presupuesto"
        lead="Dinos el servicio, la localidad y un número aproximado de comensales. Respondemos a esa solicitud. No se crea ningún pedido automático."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <address className="not-italic">
          <h2 className="font-serif text-3xl text-green-deep">Hablar con nosotros</h2>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>
              Teléfono:{" "}
              <a className="text-green-dark underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a className="text-green-dark underline" href={whatsappUrl()}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="text-green-dark underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a className="text-green-dark underline" href={site.instagram}>
                {site.instagramHandle}
              </a>
            </li>
            <li>
              Zona: {site.areaSummary}
            </li>
            <li>Dirección postal: {site.address.streetAddress}</li>
            <li>Horario: {site.openingHours}</li>
          </ul>
        </address>
        <Suspense fallback={<p>Cargando el formulario…</p>}>
          <ContactForm />
        </Suspense>
      </div>
    </>
  );
}
