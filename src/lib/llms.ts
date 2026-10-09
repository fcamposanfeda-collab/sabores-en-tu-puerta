import { site } from "@/data/site";
import { services } from "@/data/services";
import { enabledLocalities, localities, nearestHub, nearestKm } from "@/data/localities";
import { faqs } from "@/data/faqs";
import { dishCategories } from "@/data/dishes";
import { getPosts } from "@/lib/blog";

function origin() {
  return site.url.replace(/\/$/, "");
}

export function buildLlms() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.name} elabora comida casera y la reparte a domicilio en ${site.areaSummary} También sirve colectividades (colegios, guarderías, residencias y centros de mayores), catering personalizado, eventos y catering para monterías (desayuno campero, almuerzo y comida). No publica precios: el siguiente paso es pedir presupuesto.`,
    "",
    "## Datos de contacto",
    "",
    `- Nombre: ${site.name}`,
    `- Teléfono: ${site.phoneDisplay}`,
    `- WhatsApp: https://wa.me/${site.whatsappNumber}`,
    `- Email: ${site.email}`,
    `- Instagram: ${site.instagram}`,
    `- Zona: ${site.areaSummary}`,
    `- Dirección postal: ${site.address.streetAddress}`,
    `- Horario: ${site.openingHours}`,
    "",
    "## Páginas clave",
    "",
    `- [Inicio](${origin()}/): propuesta y contacto`,
    `- [Servicios](${origin()}/servicios)`,
    `- [Platos](${origin()}/platos): carta de ejemplo, sin precios`,
    `- [Zonas de reparto](${origin()}/zonas-de-reparto)`,
    `- [Preguntas frecuentes](${origin()}/preguntas-frecuentes)`,
    `- [Datos clave](${origin()}/datos-clave)`,
    `- [Contacto](${origin()}/contacto)`,
    `- [Sobre nosotros](${origin()}/sobre-nosotros)`,
    "",
    "## Servicios",
    "",
    ...services.map(
      (service) =>
        `- [${service.name}](${origin()}/servicios/${service.slug}): ${service.card}`,
    ),
    "",
    "## Zonas dentro del radio",
    "",
    ...enabledLocalities.map(
      (locality) =>
        `- [${locality.name}](${origin()}/zonas-de-reparto/${locality.slug}): ${nearestKm(locality)} km de ${nearestHub(locality)}`,
    ),
    "",
    "## Fuera de radio (no se reparte)",
    "",
    ...localities
      .filter((locality) => !locality.enabled)
      .map((locality) => `- ${locality.name}: ${locality.exclusionReason}`),
    "",
    "## Carta",
    "",
    "Los platos publicados son ejemplos de cocina casera española, marcados para sustituir por la carta real. No deben citarse como menú confirmado.",
    ...dishCategories.map((category) => `- ${category.label}`),
    "",
  ];
  return lines.join("\n");
}

export function buildLlmsFull() {
  const posts = getPosts();
  const extra = [
    buildLlms(),
    "## Preguntas frecuentes",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
    "## Artículos",
    "",
    ...posts.map(
      (post) => `- [${post.title}](${origin()}/blog/${post.slug}): ${post.description}`,
    ),
    "",
    "## Qué no afirmar",
    "",
    "- No hay precios públicos.",
    "- No hay certificaciones, premios, reseñas ni años de experiencia publicados en la web.",
    "- La razón social, el CIF y el domicilio están pendientes de confirmar.",
    "- Los platos de la carta son ejemplos.",
    "",
  ];
  return extra.join("\n");
}
