import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getPost, getPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/schema";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle,
    description: post.description.slice(0, 155),
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const others = getPosts().filter((item) => item.slug !== post.slug);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            date: post.date,
            updated: post.updated,
          }),
        )}
      />
      <PageHero crumbs={crumbs} eyebrow={post.category} title={post.title} lead={post.description} />
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-sm text-ink-soft">
          Publicado el <time dateTime={post.date}>{post.date}</time>
          {post.updated !== post.date ? (
            <>
              {" "}
              · Actualizado el <time dateTime={post.updated}>{post.updated}</time>
            </>
          ) : null}
        </p>
        <div className="article mt-6">
          <MDXRemote source={post.content} />
        </div>
        <aside className="mt-12 border-t border-line pt-6">
          <h2 className="font-serif text-2xl text-green-deep">Sigue por aquí</h2>
          <ul className="mt-3 space-y-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="text-green-dark underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </>
  );
}
