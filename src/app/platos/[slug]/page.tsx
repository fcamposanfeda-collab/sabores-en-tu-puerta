import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPair } from "@/components/Buttons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { categoryLabel, dishes, getDish } from "@/data/dishes";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, dishSchema, graph } from "@/lib/schema";

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) return {};
  const title = `${dish.name}: comida casera`.slice(0, 60);
  return pageMeta({
    title,
    description: `${dish.description} Ejemplo de carta, sin precio. Pide presupuesto en Ciudad Real o Puertollano.`.slice(0, 155),
    path: `/platos/${dish.slug}`,
  });
}

export default async function DishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) notFound();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Nuestros platos", path: "/platos" },
    { name: dish.name, path: `/platos/${dish.slug}` },
  ];
  const related = dishes.filter((item) => item.slug !== dish.slug && item.categories.some((category) => dish.categories.includes(category))).slice(0, 3);

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), dishSchema(dish))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Ficha de ejemplo"
        title={dish.name}
        lead={dish.description}
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <PhotoFrame
          src={dish.image}
          alt={dish.name}
          todo={`foto real de ${dish.name}`}
          className="min-h-72 rounded-[2rem]"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
            TODO: sustituir por platos reales
          </p>
          <h2 className="mt-4 font-serif text-3xl text-green-deep">Categorías</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {dish.categories.map((category) => (
              <li key={category} className="rounded-full border border-line px-3 py-1 text-sm">
                {categoryLabel(category)}
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-serif text-3xl text-green-deep">Alérgenos</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-soft">
            {dish.allergens.map((allergen) => (
              <li key={allergen}>{allergen}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Esta ficha no es una declaración de alérgenos de un plato servido. Cuando el encargo sea real, la información se concreta en el presupuesto.
          </p>
          <div className="mt-6">
            <CtaPair />
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <div className="mx-auto max-w-6xl px-5 pb-14">
          <h2 className="font-serif text-3xl text-green-deep">Otros ejemplos</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/platos/${item.slug}`} className="block rounded-2xl border border-line p-4 hover:border-green">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
