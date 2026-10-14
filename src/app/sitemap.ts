import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { dishes } from "@/data/dishes";
import { enabledLocalities } from "@/data/localities";
import { services } from "@/data/services";
import { specializedHub, specializedMenus } from "@/data/specialized-menus";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = site.url.replace(/\/$/, "");
  const staticPaths = [
    "",
    "/servicios",
    "/platos",
    "/sobre-nosotros",
    "/zonas-de-reparto",
    "/preguntas-frecuentes",
    "/contacto",
    "/blog",
    "/datos-clave",
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ];
  const paths = [
    ...staticPaths,
    ...services.map((service) => `/servicios/${service.slug}`),
    specializedHub.path,
    ...specializedMenus.map((menu) => `${specializedHub.path}/${menu.slug}`),
    ...dishes.map((dish) => `/platos/${dish.slug}`),
    ...enabledLocalities.map((locality) => `/zonas-de-reparto/${locality.slug}`),
    ...getPosts().map((post) => `/blog/${post.slug}`),
  ];
  return paths.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
