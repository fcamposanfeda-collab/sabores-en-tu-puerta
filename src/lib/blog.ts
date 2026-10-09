import fs from "fs";
import path from "path";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  content: string;
};

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(directory, fileName), "utf8");
  const { data, content } = matter(raw);
  const date = String(data.date);
  return {
    slug,
    title: String(data.title),
    seoTitle: String(data.seoTitle ?? data.title),
    description: String(data.description),
    date,
    updated: String(data.updated ?? date),
    category: String(data.category ?? "Guías"),
    content,
  };
}

export function getPosts() {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const file = path.join(directory, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return readPost(`${slug}.mdx`);
}
