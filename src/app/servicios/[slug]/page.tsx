import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPair } from "@/components/Buttons";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getPosts } from "@/lib/blog";
import { enabledLocalities } from "@/data/localities";
import { getService, services } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.title,
    description: service.description,
    path: `/servicios/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: service.nav, path: `/servicios/${service.slug}` },
  ];
  const posts = getPosts().filter((post) => service.posts.includes(post.slug));
  const zones = enabledLocalities.slice(0, 8);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          faqSchema(service.faqs),
          serviceSchema({
            name: service.name,
            description: service.lead,
            path: `/servicios/${service.slug}`,
          }),
        )}
      />
      <PageHero crumbs={crumbs} eyebrow="Servicios" title={service.h1} lead={service.lead} />
      <article className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-paper p-6">
            <h2 className="font-serif text-2xl text-green-deep">Qué incluye</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaPair />
            </div>
          </aside>
        </div>

        <h2 className="mt-14 font-serif text-4xl text-green-deep">Cómo se pide</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {service.steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-line p-5">
              <p className="text-sm text-leaf">Paso {index + 1}</p>
              <h3 className="mt-1 font-serif text-2xl text-green-deep">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-serif text-4xl text-green-deep">Preguntas sobre este servicio</h2>
        <div className="mt-4">
          <FaqList items={service.faqs} />
        </div>

        <h2 className="mt-14 font-serif text-4xl text-green-deep">También en estas zonas</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {zones.map((zone) => (
            <li key={zone.slug}>
              <Link href={`/zonas-de-reparto/${zone.slug}`} className="rounded-full border border-line px-3 py-1 text-sm hover:border-green">
                {zone.name}
              </Link>
            </li>
          ))}
        </ul>

        {posts.length > 0 ? (
          <>
            <h2 className="mt-14 font-serif text-4xl text-green-deep">Para leer con calma</h2>
            <ul className="mt-4 space-y-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="font-serif text-2xl text-green-dark hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <h2 className="mt-14 font-serif text-4xl text-green-deep">Otros servicios</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.related.map((related) => {
            const item = getService(related);
            if (!item) return null;
            return (
              <li key={item.slug}>
                <Link href={`/servicios/${item.slug}`} className="block rounded-2xl border border-line p-4 hover:border-green">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
