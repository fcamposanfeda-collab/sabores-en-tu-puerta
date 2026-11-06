import Image from "next/image";
import Link from "next/link";
import { sampleWeek, type MenuItem } from "@/data/sample-week";

function Item({ label, item }: { label: string; item: MenuItem }) {
  return (
    <div>
      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-leaf">{label}</dt>
      <dd className="mt-0.5 text-sm leading-snug text-ink">
        {item.dish ? (
          <Link href={`/platos/${item.dish}`} className="hover:underline">
            {item.name}
          </Link>
        ) : (
          item.name
        )}
      </dd>
    </div>
  );
}

export function WeekMenu() {
  return (
    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {sampleWeek.map((day) => (
        <li key={day.day} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-paper">
          <div className="relative aspect-[4/3]">
            <Image
              src={day.image}
              alt={day.imageAlt}
              fill
              sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
            <p className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 font-serif text-lg text-green-deep">
              {day.day}
            </p>
          </div>
          <dl className="grid flex-1 gap-3 p-4">
            <Item label="Primero" item={day.first} />
            <Item label="Segundo" item={day.second} />
            <Item label="Postre" item={day.dessert} />
            <Item label="Y además" item={{ name: "Pan" }} />
          </dl>
        </li>
      ))}
    </ol>
  );
}
