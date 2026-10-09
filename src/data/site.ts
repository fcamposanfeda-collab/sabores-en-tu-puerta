export const site = {
  name: "Sabores en tu Puerta",
  shortName: "Sabores",
  tagline: "Comida casera, como en casa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://saboresentupuerta.es",
  locale: "es-ES",
  ogLocale: "es_ES",
  email: "Saboresentupuerta1@gmail.com",
  phoneDisplay: "675 601 543",
  phoneTel: "+34675601543",
  whatsappNumber: "34675601543",
  instagram: "https://www.instagram.com/saboresentupuerta1/",
  instagramHandle: "@saboresentupuerta1",
  /** Enlace compartido de la ficha de Google. TODO: sustituir por la URL canónica de Google Maps cuando se confirme. */
  googleBusinessUrl: "https://share.google/vM7KDvmDlz0zzlWbQ",
  /** TODO: razón social, CIF y domicilio fiscal. No publicar datos de registros sin confirmarlos. */
  legalName: "TODO: razón social",
  cif: "TODO: CIF",
  address: {
    streetAddress: "TODO: dirección",
    postalCode: "TODO: código postal",
    addressLocality: "Ciudad Real",
    addressRegion: "Castilla-La Mancha",
    addressCountry: "ES",
  },
  /** TODO: horario de atención y coordenadas del obrador o punto de elaboración. */
  openingHours: "TODO: horario",
  geo: null as null | { latitude: number; longitude: number },
  hubs: ["Ciudad Real", "Puertollano"] as const,
  radiusKm: 60,
  areaSummary:
    "Ciudad Real, Puertollano y localidades hasta 60 km a la redonda de cualquiera de las dos.",
  defaultWhatsappMessage:
    "Hola, quiero información y un presupuesto de Sabores en tu Puerta.",
} as const;

export function whatsappUrl(message: string = site.defaultWhatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function phoneHref() {
  return `tel:${site.phoneTel}`;
}
