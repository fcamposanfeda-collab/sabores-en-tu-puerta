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
    image: "/images/platos/real-migas-trozos.jpg",
    example: true,
  },
  {
    slug: "alcachofas-con-lascas-de-jamon",
    name: "Alcachofas con lascas de jamón",
    description:
      "Corazones y cuartos de alcachofa salteados, cubiertos con lascas finas de jamón. El jamón curado da el punto salado. Ejemplo de primero de temporada.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Lleva jamón."],
    image: "/images/platos/real-alcachofas-jamon-pequeno.jpg",
    example: true,
  },
  {
    slug: "sopa-castellana",
    name: "Sopa castellana",
    description:
      "Sopa de ajo con huevo y pan, receta de cuchara de toda la vida. Ejemplo de primero con sabor de casa.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Gluten y huevo en la receta tradicional."],
    image: "/images/platos/real-sopa.jpg",
    example: true,
  },
  {
    slug: "arroz-con-verduras",
    name: "Arroz con verduras de la huerta",
    description:
      "Arroz caldoso con verdura de temporada. Ejemplo de primero versátil para casa, colegio o menú basal.",
    categories: ["primeros", "infantiles", "especiales"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/real-arroz-verduras.jpg",
    example: true,
  },
  {
    slug: "lentejas-con-chorizo",
    name: "Lentejas con chorizo",
    description:
      "Lentejas guisadas con chorizo, plato de cuchara de toda la vida. Ejemplo de primero de cocina casera.",
    categories: ["primeros", "mayores"],
    allergens: ["TODO: confirmar. Lleva cerdo. El chorizo a veces lleva gluten."],
    image: "/images/platos/real-lentejas.jpg",
    example: true,
  },
  {
    slug: "merluza-en-salsa-verde",
    name: "Merluza en salsa verde",
    description:
      "Merluza en salsa verde con perejil y ajo. Ejemplo de segundo de pescado, frecuente en menús equilibrados y en propuestas para mayores.",
    categories: ["segundos", "mayores", "especiales"],
    allergens: ["TODO: confirmar. Pescado."],
    image: "/images/platos/real-merluza-sin-tapa.jpg",
    example: true,
  },
  {
    slug: "solomillo-a-la-pimienta",
    name: "Solomillo a la pimienta",
    description:
      "Solomillo en salsa de pimienta. Ejemplo de segundo de carne para casa o para una comida de grupo.",
    categories: ["segundos"],
    allergens: ["TODO: confirmar. Puede llevar lácteos o gluten si la salsa se liga."],
    image: "/images/platos/real-solomillo-casero.jpg",
    example: true,
  },
  {
    slug: "cocido-completo",
    name: "Cocido completo",
    description:
      "Cocido con su caldo, garbanzos, verdura y carne. Ejemplo de plato de cuchara para un menú completo.",
    categories: ["primeros"],
    allergens: ["TODO: confirmar. Lleva cerdo. Puede llevar gluten y apio."],
    image: "/images/platos/real-cocido.jpg",
    example: true,
  },
  {
    slug: "ensalada-de-la-huerta",
    name: "Ensalada de la huerta",
    description:
      "Ensalada de hoja, tomate y otras verduras de temporada. Ejemplo de plato fresco para acompañar o para un menú más ligero.",
    categories: ["primeros", "especiales"],
    allergens: ["TODO: confirmar."],
    image: "/images/platos/real-ensalada.jpg",
    example: true,
  },
];

export function getDish(slug: string) {
  return dishes.find((dish) => dish.slug === slug);
}

export function categoryLabel(slug: DishCategory) {
  return dishCategories.find((category) => category.slug === slug)?.label ?? slug;
}
