export const dishCategories = [
  { slug: "primeros", label: "Primeros" },
  { slug: "segundos", label: "Segundos" },
  { slug: "postres", label: "Postres" },
  { slug: "mayores", label: "Menús para mayores" },
  { slug: "infantiles", label: "Menús infantiles" },
  { slug: "caza", label: "Menús de caza y campo" },
  { slug: "especiales", label: "Dietas especiales" },
] as const;

export type DishCategory = (typeof dishCategories)[number]["slug"];

export type Dish = {
  slug: string;
  name: string;
  description: string;
  categories: DishCategory[];
  allergens: string[];
  image: string;
  /** Mientras sea true, la ficha se muestra como ejemplo y no se emite schema MenuItem. */
  example: boolean;
};

export const dishes: Dish[] = [
  {
    slug: "migas-del-pastor",
    name: "Migas del pastor",
    description:
      "Pan desmigado y frito en aceite de oliva con ajo, el plato que los pastores se llevaban al campo. Suele acompañarse de uva, chorizo o panceta. Ejemplo de plato de la tierra.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Gluten. En la receta tradicional a veces hay chorizo, panceta o huevo."],
    image: "/images/platos/migas-del-pastor-barqueta.jpg",
    example: true,
  },
  {
    slug: "alcachofas-con-lascas-de-jamon",
    name: "Alcachofas con lascas de jamón",
    description:
      "Corazones y cuartos de alcachofa salteados, cubiertos con lascas finas de jamón. El jamón curado da el punto salado. Ejemplo de primero de temporada.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Lleva jamón."],
    image: "/images/platos/alcachofas-con-jamon-barqueta.jpg",
    example: true,
  },
  {
    slug: "sopa-castellana",
    name: "Sopa castellana",
    description:
      "Sopa de ajo con huevo y pan, receta de cuchara de toda la vida. Ejemplo de primero con sabor de casa.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Gluten y huevo en la receta tradicional."],
    image: "/images/platos/sopa-castellana.jpg",
    example: true,
  },
  {
    slug: "arroz-con-verduras",
    name: "Arroz con verduras de la huerta",
    description:
      "Arroz caldoso con verdura de temporada. Ejemplo de primero versátil para casa, colegio o menú basal.",
    categories: ["primeros", "infantiles", "especiales"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/arroz-con-verduras.jpg",
    example: true,
  },
  {
    slug: "potaje-de-garbanzos",
    name: "Potaje de garbanzos",
    description:
      "Garbanzos guisados con verdura, plato de cuchara para días de menú completo. Ejemplo de primero de cocina casera española.",
    categories: ["primeros", "mayores"],
    allergens: ["TODO: confirmar. Puede llevar apio."],
    image: "/images/platos/potaje-de-garbanzos.jpg",
    example: true,
  },
  {
    slug: "merluza-al-horno",
    name: "Merluza al horno con verduras",
    description:
      "Merluza al horno con patata y pimiento. Ejemplo de segundo de pescado, frecuente en menús equilibrados y en propuestas para mayores.",
    categories: ["segundos", "mayores", "especiales"],
    allergens: ["TODO: confirmar. Pescado."],
    image: "/images/platos/merluza-al-horno.jpg",
    example: true,
  },
  {
    slug: "pollo-al-ajillo",
    name: "Pollo al ajillo con patatas",
    description:
      "Pollo asado al ajillo con patata panadera. Ejemplo de segundo que funciona en casa, en un menú infantil y en una comida de grupo.",
    categories: ["segundos", "infantiles"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/pollo-al-ajillo.jpg",
    example: true,
  },
  {
    slug: "estofado-de-ternera",
    name: "Estofado de ternera con zanahoria",
    description:
      "Ternera estofada con zanahoria y patata, salsa corta y cocción larga. Ejemplo de segundo de carne para menú de diario o de celebración sencilla.",
    categories: ["segundos"],
    allergens: ["TODO: confirmar. Puede llevar apio o gluten si la salsa se liga."],
    image: "/images/platos/estofado-de-ternera.jpg",
    example: true,
  },
  {
    slug: "albondigas-en-salsa",
    name: "Albóndigas en salsa de tomate",
    description:
      "Albóndigas caseras en salsa de tomate. Ejemplo de segundo conocido, útil en menús familiares y escolares cuando el centro lo acepta.",
    categories: ["segundos", "infantiles"],
    allergens: ["TODO: confirmar. Gluten, huevo y, si lleva leche, lácteos."],
    image: "/images/platos/albondigas-en-salsa.jpg",
    example: true,
  },
  {
    slug: "bacalao-con-tomate",
    name: "Bacalao con tomate",
    description:
      "Bacalao guisado con tomate y pimiento. Ejemplo de segundo de pescado con sabor casero, también encajable en menú de mayores si la textura se adapta.",
    categories: ["segundos", "mayores"],
    allergens: ["TODO: confirmar. Pescado."],
    image: "/images/platos/bacalao-con-tomate.jpg",
    example: true,
  },
  {
    slug: "ensalada-de-la-huerta",
    name: "Ensalada de la huerta",
    description:
      "Ensalada de hoja, tomate y otras verduras de temporada. Ejemplo de plato fresco para acompañar o para un menú más ligero.",
    categories: ["primeros", "especiales"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/ensalada-de-la-huerta.jpg",
    example: true,
  },
  {
    slug: "compota-de-manzana",
    name: "Compota de manzana",
    description:
      "Manzana cocida, textura blanda y sabor suave. Ejemplo de postre para menús infantiles, de mayores y de dietas que piden elaboraciones sencillas.",
    categories: ["postres", "mayores", "infantiles", "especiales"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/compota-de-manzana.jpg",
    example: true,
  },
  {
    slug: "flan-de-huevo",
    name: "Flan de huevo casero",
    description:
      "Flan de huevo cuajado al estilo de casa. Ejemplo de postre tradicional para cerrar un menú.",
    categories: ["postres"],
    allergens: ["TODO: confirmar. Huevo y lácteos."],
    image: "/images/platos/flan-de-huevo.jpg",
    example: true,
  },
  {
    slug: "arroz-con-leche",
    name: "Arroz con leche",
    description:
      "Arroz con leche cremoso, postre de cuchara. Ejemplo para menús de casa y celebraciones sencillas.",
    categories: ["postres"],
    allergens: ["TODO: confirmar. Lácteos."],
    image: "/images/platos/arroz-con-leche.jpg",
    example: true,
  },
  {
    slug: "menu-textura-suave",
    name: "Menestra suave y pescado desmigado",
    description:
      "Ejemplo de menú de textura adaptada: verdura en puré y pescado blanco desmigado. Pensado como muestra de lo que se puede proponer en residencias, siempre según indique el centro.",
    categories: ["mayores", "especiales", "segundos"],
    allergens: ["TODO: confirmar. Pescado."],
    image: "/images/platos/menu-textura-suave.jpg",
    example: true,
  },
  {
    slug: "migas-del-campo",
    name: "Migas ruleras",
    description:
      "Migas de campo, ejemplo de plato para desayuno campero o comida de montería. No es todavía la ficha real del catering de caza: hay que sustituirla por lo que se sirva de verdad.",
    categories: ["caza", "primeros"],
    allergens: ["TODO: confirmar. Gluten. A veces huevo o derivados de cerdo."],
    image: "/images/platos/migas-del-campo.jpg",
    example: true,
  },
];

export function getDish(slug: string) {
  return dishes.find((dish) => dish.slug === slug);
}

export function categoryLabel(slug: DishCategory) {
  return dishCategories.find((category) => category.slug === slug)?.label ?? slug;
}
