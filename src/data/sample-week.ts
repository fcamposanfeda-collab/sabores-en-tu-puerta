/**
 * Semana de ejemplo para la home. Es orientativa: el menú real lo prepara el equipo
 * según la temporada y lo que necesita cada persona o centro.
 * `dish` enlaza con la ficha de src/data/dishes.ts cuando existe.
 */

export type MenuItem = { name: string; dish?: string };

export type MenuDay = {
  day: string;
  image: string;
  imageAlt: string;
  first: MenuItem;
  second: MenuItem;
  dessert: MenuItem;
};

export const sampleWeek: MenuDay[] = [
  {
    day: "Lunes",
    image: "/images/platos/real-lentejas.jpg",
    imageAlt: "Lentejas con chorizo en su envase",
    first: { name: "Lentejas con chorizo", dish: "lentejas-con-chorizo" },
    second: { name: "Merluza en salsa verde", dish: "merluza-en-salsa-verde" },
    dessert: { name: "Flan casero" },
  },
  {
    day: "Martes",
    image: "/images/platos/real-albondigas.jpg",
    imageAlt: "Albóndigas en salsa de tomate en su envase",
    first: { name: "Arroz con verduras de la huerta", dish: "arroz-con-verduras" },
    second: { name: "Albóndigas en salsa de tomate" },
    dessert: { name: "Fruta de temporada" },
  },
  {
    day: "Miércoles",
    image: "/images/platos/real-marmitako.jpg",
    imageAlt: "Marmitako de bonito en su envase",
    first: { name: "Ensalada de la huerta", dish: "ensalada-de-la-huerta" },
    second: { name: "Marmitako de bonito", dish: "marmitako-de-bonito" },
    dessert: { name: "Compota de manzana" },
  },
  {
    day: "Jueves",
    image: "/images/platos/real-bacalao.jpg",
    imageAlt: "Bacalao con tomate en su envase",
    first: { name: "Sopa castellana", dish: "sopa-castellana" },
    second: { name: "Bacalao con tomate" },
    dessert: { name: "Arroz con leche" },
  },
  {
    day: "Viernes",
    image: "/images/platos/real-fideua-mesa.jpg",
    imageAlt: "Fideuá con gambas, calamar y mejillones en su envase",
    first: { name: "Fideuá de marisco", dish: "fideua-de-marisco" },
    second: { name: "Solomillo a la pimienta", dish: "solomillo-a-la-pimienta" },
    dessert: { name: "Fruta de temporada" },
  },
];
