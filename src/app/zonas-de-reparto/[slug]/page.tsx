import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPair } from "@/components/Buttons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { enabledLocalities, getLocality, nearestHub, nearestKm } from "@/data/localities";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, localBusinessSchema } from "@/lib/schema";

export function generateStaticParams() {
  return enabledLocalities.map((locality) => ({ slug: locality.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locality = getLocality(slug);
  if (!locality) return {};
  const title = `Comida a domicilio en ${locality.name}`.slice(0, 60);
  const description =
    `Comida casera a domicilio en ${locality.name}, a ${nearestKm(locality)} km de ${nearestHub(locality)}. Menús y catering. Pide presupuesto.`.slice(0, 155);
  return pageMeta({
    title,
    description,
    path: `/zonas-de-reparto/${locality.slug}`,
  });
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locality = getLocality(slug);
  if (!locality) notFound();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Zonas de reparto", path: "/zonas-de-reparto" },
    { name: locality.name, path: `/zonas-de-reparto/${locality.slug}` },
  ];
  const nearby = locality.nearby
    .map((item) => getLocality(item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          faqSchema(locality.faqs),
          localBusinessSchema(locality.name),
        )}
      />
      <PageHero crumbs={crumbs} eyebrow="Reparto" title={`Comida casera a domicilio en ${locality.name}`} lead={locality.lead} />
      <article className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm text-ink-soft">
          A {locality.kmFromCiudadReal} km de Ciudad Real y {locality.kmFromPuertollano} km de Puertollano, en línea recta. Centro de referencia: {nearestHub(locality)}.
          {locality.edge ? " Está cerca del límite de 60 km y cada encargo se confirma." : ""}
        </p>
        <h2 className="mt-8 font-serif text-3xl text-green-deep">Cómo es el servicio en {locality.name}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{locality.context}</p>
        <h2 className="mt-8 font-serif text-3xl text-green-deep">Cómo llega el reparto</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{locality.delivery}</p>

        <h2 className="mt-10 font-serif text-3xl text-green-deep">Servicios disponibles</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {locality.serviceSlugs.map((serviceSlug) => {
            const service = getService(serviceSlug);
            if (!service) return null;
            return (
              <li key={service.slug}>
                <Link href={`/servicios/${service.slug}`} className="block rounded-2xl border border-line p-4 hover:border-green">
                  <span className="font-serif text-2xl text-green-deep">{service.name}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{service.card}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <h2 className="mt-10 font-serif text-3xl text-green-deep">Preguntas sobre {locality.name}</h2>
        <div className="mt-4">
          <FaqList items={locality.faqs} />
        </div>

        {nearby.length > 0 ? (
          <>
            <h2 className="mt-10 font-serif text-3xl text-green-deep">Localidades cercanas</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link href={`/zonas-de-reparto/${item.slug}`} className="rounded-full border border-line px-3 py-1 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="mt-10">
          <CtaPair />
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          <Link href={`/contacto?localidad=${encodeURIComponent(locality.name)}`} className="underline">
            Pedir presupuesto para {locality.name}
          </Link>
        </p>
      </article>
    </>
  );
}
