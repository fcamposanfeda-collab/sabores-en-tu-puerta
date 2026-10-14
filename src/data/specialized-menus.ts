export type SpecializedMenu = {
  slug: string;
  nav: string;
  card: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  paragraphs: string[];
  includes: string[];
};

export const specializedHub = {
  path: "/menus-especializados",
  nav: "Menús especializados",
  title: "Menús especializados a domicilio en Ciudad Real",
  description:
    "Menú basal de nuestra nutricionista según tu caso: gimnasio, infancia, intolerancias, mayores o un diagnóstico. Ciudad Real y Puertollano.",
  h1: "Menús especializados, sin que tengas que organizarlos",
  lead: "El menú basal lo plantea nuestra nutricionista a partir de lo que necesitas. Tú no montas la semana ni decides plato a plato: adaptamos la comida y te la llevamos.",
  paragraphs: [
    "Quien nos escribe suele buscar eso: una comida casera ya pensada. Partimos de un menú basal equilibrado y lo ajustamos al caso. Puede ser para quien entrena, para un niño, para una intolerancia, para una persona mayor o para una pauta ligada a un diagnóstico.",
    "Nos cuentas la necesidad, para cuántas personas es y en qué localidad. La nutricionista prepara la propuesta. El reparto es en Ciudad Real, Puertollano y hasta 60 km. No hay precios publicados: cada encargo se concreta al pedir la información.",
    "No diagnosticamos, no sustituimos a tu médico y no prometemos un efecto sobre la salud. Si ya existe una pauta, el menú se cocina según lo que nos indiquéis.",
  ],
  faqs: [
    {
      question: "¿Tengo que decir yo qué se come cada día?",
      answer:
        "No. Cuentas la necesidad y la nutricionista propone el menú basal ya adaptado. Tú confirmas si encaja y nosotros lo elaboramos y lo repartimos.",
    },
    {
      question: "¿El menú sirve si hay un diagnóstico?",
      answer:
        "Sí, cuando nos indicas la pauta que ya tienes. Preparamos el menú para que encaje con eso. No diagnosticamos ni prometemos un resultado de salud.",
    },
  ],
};

export const specializedMenus: SpecializedMenu[] = [
  {
    slug: "gimnasio",
    nav: "Gimnasio",
    card: "Menú basal ajustado a los días de entreno, sin que calcules los platos.",
    title: "Menú para el gimnasio a domicilio en Ciudad Real",
    description:
      "Menú basal para quien entrena en Ciudad Real y Puertollano. La nutricionista lo adapta a tu rutina. Tú no organizas la comida.",
    h1: "Menú para el gimnasio, ya pensado",
    lead: "Si entrenas, el menú basal se ajusta a lo que nos cuentes de tu rutina. No tienes que calcular raciones ni montar el tupper.",
    paragraphs: [
      "Nos dices cómo es la semana: días de entreno, si comes en casa o te lo llevas, y si hay algún alimento que no tomas. A partir de ahí la nutricionista encaja el menú basal. La cocina sigue siendo casera.",
      "No publicamos calorías ni una tabla de macros, y no prometemos un cambio de peso o de músculo. El servicio es la comida adaptada a lo que nos indiques, elaborada y repartida.",
      "El reparto cubre Ciudad Real, Puertollano y hasta 60 km. El número de comidas y el día se confirman al pedir la información.",
    ],
    includes: [
      "Menú basal adaptado a la rutina de entreno que nos cuentes",
      "Cocina casera, sin que organices los platos",
      "Ajuste si hay algún alimento que no tomas",
      "Reparto en Ciudad Real, Puertollano y el radio de 60 km",
    ],
  },
  {
    slug: "infantil",
    nav: "Infantil",
    card: "Menú basal para niños en casa. La familia no diseña la semana.",
    title: "Menú infantil a domicilio en Ciudad Real",
    description:
      "Menú basal infantil a domicilio en Ciudad Real y Puertollano. Lo plantea la nutricionista y se adapta si hay alguna pauta.",
    h1: "Menú infantil para casa, sin montarlo tú",
    lead: "Comida casera para niños, con un menú basal de la semana. Si hay una pauta, se adapta. La familia no tiene que diseñar cada comida.",
    paragraphs: [
      "Este menú es para casa. Si el encargo es el comedor de un colegio o una guardería, el camino es el servicio de colectividades: allí se habla con el centro.",
      "En casa nos contáis la edad, cuántos comen y si hay algún alimento que no toma o una intolerancia. La nutricionista propone el menú basal y lo ajusta a eso.",
      "No prometemos un efecto sobre el crecimiento ni sobre la salud. Organizamos la comida para que encaje con lo que la familia nos indica.",
    ],
    includes: [
      "Menú basal infantil para comer en casa",
      "Adaptación si hay un alimento que no toma o una intolerancia",
      "Propuesta hecha por la nutricionista",
      "Reparto en el radio de Ciudad Real y de Puertollano",
    ],
  },
  {
    slug: "intolerancias",
    nav: "Intolerancias",
    card: "El menú basal se elabora sin el ingrediente que nos indiquéis.",
    title: "Menú para intolerancias en Ciudad Real",
    description:
      "Menú basal sin el ingrediente que nos indiquéis: lactosa, gluten u otra intolerancia. A domicilio en Ciudad Real y Puertollano.",
    h1: "Menú para intolerancias, elaborado aparte",
    lead: "Si hay lactosa, gluten u otra intolerancia, el menú basal se cocina sin ese ingrediente. Nos lo indicas y no tienes que revisar cada plato.",
    paragraphs: [
      "La nutricionista parte del menú basal y lo deja sin lo que no puedes tomar. Puede ser lactosa, gluten u otra intolerancia que nos señales. El detalle se confirma en el encargo, porque depende de la elaboración de ese día.",
      "No publicamos un sello de apto para celíacos ni una lista cerrada de alérgenos. Eso se concreta contigo antes de cocinar.",
      "Si la intolerancia viene de una pauta médica, cocinamos según lo que nos indiquéis. No diagnosticamos.",
    ],
    includes: [
      "Menú basal sin el ingrediente que nos indiquéis",
      "Confirmación de esa pauta antes de elaborar",
      "Sirve para casa y, si el centro lo pide, también para un comedor",
      "Reparto en Ciudad Real, Puertollano y hasta 60 km",
    ],
  },
  {
    slug: "mayores",
    nav: "Personas mayores",
    card: "Menú basal más fácil de comer, en casa o para un centro.",
    title: "Menú para personas mayores en Ciudad Real",
    description:
      "Menú basal para personas mayores en Ciudad Real y Puertollano. Elaboraciones más suaves cuando hace falta, pensadas por la nutricionista.",
    h1: "Menú para personas mayores, fácil de comer",
    lead: "Un menú basal pensado para quien ya no quiere organizar la comida. Si hace falta una elaboración más suave, se adapta.",
    paragraphs: [
      "Sirve para una persona en casa y también cuando lo pide una residencia o un centro de mayores. En un centro, la propuesta se habla con quien lo lleva. En casa, con la familia o con la propia persona.",
      "La nutricionista ajusta textura y tipo de plato a lo que nos indiquéis. No cambiamos una elaboración por nuestra cuenta si no nos lo habéis pedido.",
      "No prometemos un efecto sobre la salud. El servicio es la comida adaptada y el reparto.",
    ],
    includes: [
      "Menú basal para el día a día",
      "Elaboraciones más suaves o de otra textura, si nos lo pedís",
      "Para casa o para un centro de mayores",
      "Reparto en el radio de 60 km",
    ],
  },
  {
    slug: "diagnostico",
    nav: "Según el diagnóstico",
    card: "Si ya tienes una pauta, el menú basal se cocina para encajar con ella.",
    title: "Menú según tu diagnóstico en Ciudad Real",
    description:
      "Menú basal adaptado a la pauta de tu diagnóstico en Ciudad Real y Puertollano. No diagnosticamos: cocinamos según lo que nos indiques.",
    h1: "Menú adaptado a tu diagnóstico",
    lead: "Si ya tienes un diagnóstico y una pauta de comida, partimos de ahí. La nutricionista prepara el menú basal para que encaje, y tú no tienes que traducirlo a platos.",
    paragraphs: [
      "Nos cuentas la pauta que ya tienes, la de tu médico o la que nos indiques. Puede ser, por ejemplo, una comida sin gluten, una pauta para diabetes o una textura concreta. El menú se elabora según eso.",
      "No diagnosticamos, no sustituimos a tu médico y no prometemos que la comida mejore un diagnóstico. Organizamos el menú para que respete la indicación que nos dais.",
      "Cuantos más datos nos dejes al pedir la información —qué se puede tomar, qué no, y para cuántas personas—, más ajustada sale la propuesta.",
    ],
    includes: [
      "Menú basal a partir de la pauta que nos indiquéis",
      "Sin que traduzcas esa pauta a un menú semanal",
      "Confirmación contigo antes de elaborar",
      "Reparto en Ciudad Real, Puertollano y hasta 60 km",
    ],
  },
];

export function getSpecializedMenu(slug: string) {
  return specializedMenus.find((menu) => menu.slug === slug);
}
