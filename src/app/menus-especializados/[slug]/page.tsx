import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPair } from "@/components/Buttons";
import { JsonLd } from "@/components/JsonLd";
import { MealComposition } from "@/components/MealComposition";
import { PageHero } from "@/components/PageHero";
import { getSpecializedMenu, specializedHub, specializedMenus } from "@/data/specialized-menus";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return specializedMenus.map((menu) => ({ slug: menu.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const menu = getSpecializedMenu(slug);
  if (!menu) return {};
  return pageMeta({
    title: menu.title,
    description: menu.description,
    path: `${specializedHub.path}/${menu.slug}`,
  });
}

export default async function SpecializedMenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const menu = getSpecializedMenu(slug);
  if (!menu) notFound();

  const path = `${specializedHub.path}/${menu.slug}`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: specializedHub.nav, path: specializedHub.path },
    { name: menu.nav, path },
  ];
  const others = specializedMenus.filter((item) => item.slug !== menu.slug);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: menu.title,
            description: menu.lead,
            path,
          }),
        )}
      />
      <PageHero crumbs={crumbs} eyebrow="Menú basal" title={menu.h1} lead={menu.lead} />
      <article className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            {menu.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-paper p-6">
            <h2 className="font-serif text-2xl text-green-deep">Qué incluye</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
              {menu.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaPair />
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <MealComposition />
        </div>

        <h2 className="mt-14 font-serif text-3xl text-green-deep">Otros menús especializados</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`${specializedHub.path}/${item.slug}`} className="text-green-dark underline-offset-2 hover:underline">
                {item.nav}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
