import { CtaPair } from "@/components/Buttons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, organizationSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Sobre Sabores en tu Puerta",
  description:
    "Comida casera con reparto en Ciudad Real y Puertollano. Menús equilibrados, ingredientes de primeras marcas y dietas adaptadas.",
  path: "/sobre-nosotros",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Sobre nosotros", path: "/sobre-nosotros" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), organizationSchema())} />
      <PageHero
        crumbs={crumbs}
        eyebrow="La casa"
        title="Comida casera, con el cuidado de quien cocina para otros"
        lead="Sabores en tu Puerta elabora comida casera y la reparte a domicilio en Ciudad Real, Puertollano y hasta 60 km. El trabajo se centra en menús equilibrados, dietas adaptadas y el sabor de casa."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-lg leading-relaxed text-ink-soft">
        <p className="rounded-2xl border border-line bg-paper p-4 text-sm">
          TODO: contrastar este texto con las diapositivas de Sobre nosotros, Compromisos y Catering de caza. En esta entrega no se recibieron esas capturas, así que la página usa solo los datos confirmados en el encargo.
        </p>
        <h2 className="font-serif text-4xl text-green-deep">Qué hacemos</h2>
        <p>
          Cocinamos para casas, para colectividades y para celebraciones. En colectividades entran colegios, guarderías, residencias y centros de mayores. En el campo, el catering de monterías contempla desayuno campero, almuerzo y comida. En casa, es comida a domicilio sin suscripción y sin precios colgados.
        </p>
        <h2 className="font-serif text-4xl text-green-deep">Cómo trabajamos</h2>
        <p>
          Primero escuchamos el encargo: quién come, dónde, cuántos y si hay alguna adaptación. Después proponemos menú y presupuesto. La elaboración usa ingredientes de primeras marcas y tratamientos de conservación pensados para mantener los nutrientes desde la cocina hasta el consumo. El formato concreto de esa conservación se explica en cada propuesta.
        </p>
        <h2 className="font-serif text-4xl text-green-deep">Mayores y dietas adaptadas</h2>
        <p>
          En residencias y centros de mayores el menú no es una carta fija de restaurante. Se adapta a lo que el centro indica: texturas, dietas y particularidades. Hay respaldo de una nutricionista en la forma de plantear los menús. No prometemos resultados de salud ni publicamos un número de colegiación: TODO si quieres añadir el nombre y la acreditación, con su permiso.
        </p>
        <h2 className="font-serif text-4xl text-green-deep">Compromisos</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cocina casera, con sabor de casa.</li>
          <li>Ingredientes de primeras marcas.</li>
          <li>Conservación orientada a cuidar los nutrientes.</li>
          <li>Menús equilibrados y adaptados cuando nos lo pedís.</li>
          <li>Controles de higiene en la elaboración. TODO: publicar el registro sanitario si se quiere mostrar.</li>
          <li>Presupuesto claro antes de confirmar, sin precios genéricos en la web.</li>
          <li>Zona declarada: Ciudad Real, Puertollano y 60 km. Si no entra, se dice.</li>
        </ul>
        <p>
          TODO: años de trayectoria, equipo, obrador y fotografías propias del servicio. No se han inventado.
        </p>
        <CtaPair />
      </article>
    </>
  );
}
