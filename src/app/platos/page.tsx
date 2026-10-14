import { DishBrowser } from "@/components/DishBrowser";
import { MealComposition } from "@/components/MealComposition";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { dishes } from "@/data/dishes";
import { publicImage } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, dishSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Platos y menús caseros sin precios",
  description:
    "Carta de ejemplo de comida casera: primeros, segundos y menús adaptados. Sin precios, en Ciudad Real.",
  path: "/platos",
});

export default function PlatosPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Nuestros platos", path: "/platos" },
  ];
  const cards = dishes.map((dish) => ({
    slug: dish.slug,
    name: dish.name,
    description: dish.description,
    categories: dish.categories,
    allergens: dish.allergens,
    image: publicImage(dish.image),
  }));

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          ...dishes.map((dish) => dishSchema(dish)),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Carta"
        title="Platos caseros para casa, centros y celebraciones"
        lead="Aquí puedes ver el tipo de cocina: primeros, segundos, menús de mayores, infantiles y dietas especiales. Son ejemplos. No hay precios."
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <MealComposition />
        <div className="mt-14">
          <DishBrowser dishes={cards} />
        </div>
      </div>
    </>
  );
}
