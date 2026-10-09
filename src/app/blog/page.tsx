import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Blog de comida casera y colectividades",
  description:
    "Guías para elegir comida de residencias, catering de monterías y menús de colegios. Sin promesas de salud ni precios.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Blog"
        title="Ideas para elegir comida de centros, colegios y monterías"
        lead="Textos prácticos para quien tiene que decidir un servicio de comida. No sustituyen el criterio del centro ni prometen resultados de salud."
      />
      <ul className="mx-auto grid max-w-6xl gap-5 px-5 py-12">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-3xl border border-line bg-paper p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-leaf">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {" · "}
              {post.category}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-green-deep">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-ink-soft">{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function formatDate(value: string) {
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const [year, month, day] = value.split("-");
  return `${Number(day)} de ${months[Number(month) - 1]} de ${year}`;
}
