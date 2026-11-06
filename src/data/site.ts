export const site = {
  name: "Sabores en tu Puerta",
  shortName: "Sabores",
  tagline: "Comida casera, como en casa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://saboresentupuerta.com",
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
  legalName: "Sabores en tu Puerta, S.L.",
  cif: "B21780341",
  address: {
    streetAddress: "Ctra. de Toledo, 26, Edificio Cumbria, oficina 304",
    postalCode: "13005",
    addressLocality: "Ciudad Real",
    addressRegion: "Castilla-La Mancha",
    addressCountry: "ES",
  },
  /** Horario de atención. TODO: confirmar días (se asume de lunes a viernes) y coordenadas del obrador. */
  openingHours: "De lunes a viernes, de 9:00 a 18:00",
  openingHoursSchema: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
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
