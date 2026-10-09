import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow?: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-green-deep md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">{lead}</p>
      </div>
    </header>
  );
}
