import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Preguntas frecuentes de comida a domicilio",
  description:
    "Respuestas sobre reparto en Ciudad Real y Puertollano, menús para mayores y monterías. Sin precios ocultos: no hay precios.",
  path: "/preguntas-frecuentes",
});

export default function FaqPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), faqSchema(faqs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Ayuda"
        title="Preguntas frecuentes sobre el reparto y los menús"
        lead="Respuestas cortas a lo que más se pregunta: dónde llegamos, cómo se adaptan los menús, si hay precios y cómo se pide un presupuesto."
      />
      <div className="mx-auto max-w-3xl px-5 py-12">
        <FaqList items={faqs} />
      </div>
    </>
  );
}
