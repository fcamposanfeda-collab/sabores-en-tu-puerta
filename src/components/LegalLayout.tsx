import { Breadcrumbs } from "@/components/Breadcrumbs";

export function LegalLayout({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs
        items={[
          { name: "Inicio", path: "/" },
          { name: title, path },
        ]}
      />
      <h1 className="mt-6 font-serif text-5xl text-green-deep">{title}</h1>
      <div className="article mt-6">{children}</div>
    </article>
  );
}
