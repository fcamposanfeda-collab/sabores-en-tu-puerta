import { site } from "@/data/site";
import { enabledLocalities } from "@/data/localities";
import type { Dish } from "@/data/dishes";
import type { Faq } from "@/data/faqs";

function origin() {
  return site.url.replace(/\/$/, "");
}

export function organizationId() {
  return `${origin()}/#organization`;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: site.name,
    url: origin(),
    email: site.email,
    telephone: site.phoneTel,
    logo: `${origin()}/logo-oscuro.png`,
    image: `${origin()}/logo-oscuro.png`,
    sameAs: [site.instagram, site.googleBusinessUrl],
    areaServed: enabledLocalities.map((locality) => ({
      "@type": "City",
      name: locality.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Ciudad Real",
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${origin()}/#website`,
    url: origin(),
    name: site.name,
    inLanguage: "es-ES",
    publisher: { "@id": organizationId() },
  };
}

export function localBusinessSchema(areaName?: string) {
  const areas = areaName
    ? [{ "@type": "City", name: areaName }]
    : enabledLocalities.map((locality) => ({
        "@type": "City",
        name: locality.name,
      }));

  return {
    "@type": ["FoodEstablishment", "CateringService"],
    "@id": `${origin()}/#localbusiness`,
    name: site.name,
    url: origin(),
    telephone: site.phoneTel,
    email: site.email,
    image: `${origin()}/logo-oscuro.png`,
    logo: `${origin()}/logo-oscuro.png`,
    servesCuisine: "Cocina casera española",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    areaServed: areas,
    sameAs: [site.instagram, site.googleBusinessUrl],
    parentOrganization: { "@id": organizationId() },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin()}${item.path}`,
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${origin()}${opts.path}`,
    provider: { "@id": organizationId() },
    areaServed: enabledLocalities.map((locality) => ({
      "@type": "City",
      name: locality.name,
    })),
    serviceType: opts.name,
  };
}

export function dishSchema(dish: Dish) {
  if (dish.example) return null;
  return {
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    url: `${origin()}/platos/${dish.slug}`,
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated: string;
}) {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.updated,
    inLanguage: "es-ES",
    mainEntityOfPage: `${origin()}${opts.path}`,
    author: { "@id": organizationId() },
    publisher: { "@id": organizationId() },
    image: `${origin()}/logo-oscuro.png`,
  };
}

export function graph(...nodes: (object | null | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
