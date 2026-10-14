import Link from "next/link";
import { CtaPair } from "@/components/Buttons";
import { FaqList } from "@/components/FaqList";
import { MealComposition } from "@/components/MealComposition";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { specializedHub, specializedMenus } from "@/data/specialized-menus";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: specializedHub.title,
  description: specializedHub.description,
  path: specializedHub.path,
});

export default function SpecializedMenusPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: specializedHub.nav, path: specializedHub.path },
  ];

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), faqSchema(specializedHub.faqs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Menú basal"
        title={specializedHub.h1}
        lead={specializedHub.lead}
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
          {specializedHub.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14">
          <MealComposition />
        </div>

        <h2 className="mt-14 font-serif text-4xl text-green-deep">Según tu caso</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {specializedMenus.map((menu) => (
            <li key={menu.slug}>
              <Link
                href={`${specializedHub.path}/${menu.slug}`}
                className="block h-full rounded-3xl border border-line bg-paper p-6 hover:border-green"
              >
                <h3 className="font-serif text-2xl text-green-deep">{menu.h1}</h3>
                <p className="mt-2 text-ink-soft">{menu.card}</p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-serif text-4xl text-green-deep">Preguntas</h2>
        <div className="mt-6">
          <FaqList items={specializedHub.faqs} />
        </div>
        <div className="mt-10">
          <CtaPair />
        </div>
      </div>
    </>
  );
}
