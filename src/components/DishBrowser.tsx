"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categoryLabel, dishCategories, type DishCategory } from "@/data/dishes";

export type DishCard = {
  slug: string;
  name: string;
  description: string;
  categories: DishCategory[];
  allergens: string[];
  image: string | null;
};

export function DishBrowser({ dishes }: { dishes: DishCard[] }) {
  const categories = dishCategories.filter((category) =>
    dishes.some((dish) => dish.categories.includes(category.slug)),
  );
  const [active, setActive] = useState<DishCategory | "todos">("todos");
  const visible = useMemo(
    () =>
      active === "todos"
        ? dishes
        : dishes.filter((dish) => dish.categories.includes(active)),
    [active, dishes],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filtrar platos">
        <FilterButton current={active} value="todos" onSelect={setActive}>
          Todos
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category.slug}
            current={active}
            value={category.slug}
            onSelect={setActive}
          >
            {category.label}
          </FilterButton>
        ))}
      </div>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((dish) => (
          <li key={dish.slug}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
              <div className="relative flex h-44 items-end bg-cream-deep p-4">
                {dish.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={dish.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <p className="relative text-xs uppercase tracking-[0.14em] text-ink-soft">
                    TODO: foto de {dish.name}
                  </p>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-serif text-2xl text-green-deep">
                  <Link href={`/platos/${dish.slug}`} className="hover:underline">
                    {dish.name}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                <p className="mt-3 text-xs text-ink-soft">
                  {dish.categories.map((category) => categoryLabel(category)).join(" · ")}
                </p>
                <Link
                  href={`/platos/${dish.slug}`}
                  className="mt-4 text-sm font-semibold text-green-dark underline-offset-2 hover:underline"
                >
                  Ver ficha
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {visible.length === 0 ? (
        <p className="mt-6 text-ink-soft">No hay ejemplos en esta categoría.</p>
      ) : null}
    </div>
  );
}

function FilterButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: DishCategory | "todos";
  value: DishCategory | "todos";
  onSelect: (value: DishCategory | "todos") => void;
  children: React.ReactNode;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(value)}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm ${
        selected
          ? "border-green-dark bg-green-dark text-white"
          : "border-line bg-paper text-ink"
      }`}
    >
      {children}
    </button>
  );
}
