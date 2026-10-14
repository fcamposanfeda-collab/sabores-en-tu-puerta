export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  nav: string;
  card: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  paragraphs: string[];
  includes: string[];
  steps: { title: string; text: string }[];
  faqs: ServiceFaq[];
  related: string[];
  posts: string[];
};

export const services: Service[] = [
  {
    slug: "colectividades",
    name: "Reparto a colectividades",
    nav: "Colectividades",
    card: "Colegios, guarderías, residencias y centros de mayores, con menús adaptados.",
    title: "Comida para colegios y residencias",
    description:
      "Menús para colegios, guarderías, residencias y centros de mayores en Ciudad Real y Puertollano. Dietas adaptadas.",
    h1: "Comida para colegios, guarderías y residencias en Ciudad Real",
    lead: "Preparamos comida casera para colectividades en Ciudad Real, Puertollano y hasta 60 km: colegios, guarderías, residencias y centros de mayores. El menú se adapta a cada centro y el presupuesto se pide sin compromiso.",
    paragraphs: [
      "Un comedor de centro no funciona como una casa. Hay volumen, horarios, alérgenos que declarar y personas con necesidades distintas en la misma mesa. Por eso el servicio de colectividades se plantea con el equipo del centro: dirección, cocina de apoyo si la hay, y las familias cuando corresponde.",
      "Trabajamos menús equilibrados y dietas adaptadas. En residencias y centros de mayores tiene especial peso la adaptación de elaboraciones y texturas. En colegios y guarderías, la variedad a lo largo de la semana y la información de alérgenos. No prometemos resultados de salud: organizamos la comida para que encaje con lo que el centro necesita.",
      "Los ingredientes son de primeras marcas y la conservación busca mantener los nutrientes desde la elaboración hasta el consumo. El detalle del formato de entrega se concreta en el presupuesto, porque no es igual un colegio que una residencia.",
      "El trato en colectividades es profesional y por escrito: propuesta de menú, localidad, número aproximado de comensales y calendario. No hay precios cerrados en esta web.",
    ],
    includes: [
      "Propuesta de menús para el centro, no una carta genérica de restaurante",
      "Dietas adaptadas y atención a alérgenos, según lo que indique el centro",
      "Elaboraciones pensadas para mayores, infancia o menú basal",
      "Reparto en Ciudad Real, Puertollano y el radio de 60 km",
      "Presupuesto a medida, sin suscripción automática",
    ],
    steps: [
      {
        title: "Nos contáis el centro",
        text: "Tipo de servicio, localidad, comensales aproximados, calendario y si hay dietas o alérgenos que debamos contemplar.",
      },
      {
        title: "Preparamos la propuesta",
        text: "Menú y presupuesto por escrito. Si hace falta, se ajusta antes de elaborar.",
      },
      {
        title: "Cocinamos y repartimos",
        text: "Comida casera con el plan de conservación acordado y entrega en el centro.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis comida para colegios y guarderías en Ciudad Real?",
        answer:
          "Sí. El servicio de colectividades incluye colegios y guarderías en Ciudad Real, Puertollano y localidades del radio de 60 km. La propuesta se arma con el centro: menús, alérgenos y calendario. El precio no está publicado; se envía un presupuesto.",
      },
      {
        question: "¿Cómo se adaptan los menús a personas mayores?",
        answer:
          "En residencias y centros de mayores partimos de un menú basal y lo adaptamos a lo que el centro nos indique: elaboraciones más suaves, dietas específicas y necesidades de cada usuario. No modificamos una receta por nuestra cuenta si el centro no lo ha pedido, ni prometemos efectos sobre la salud.",
      },
      {
        question: "¿El comedor de una residencia tiene que ser una suscripción?",
        answer:
          "No. Cada encargo se acuerda con presupuesto. No hay cobros automáticos ni permanencia publicada. La continuidad se renueva cuando el centro quiere seguir.",
      },
    ],
    related: ["comida-a-domicilio", "catering-personalizado"],
    posts: [
      "comida-residencias-centros-mayores",
      "menus-colegios-guarderias",
    ],
  },
  {
    slug: "comida-a-domicilio",
    name: "Comida a domicilio",
    nav: "Comida a domicilio",
    card: "Comida casera en casa, en Ciudad Real, Puertollano y alrededores.",
    title: "Comida casera a domicilio Ciudad Real",
    description:
      "Comida casera a domicilio en Ciudad Real y Puertollano, hasta 60 km. Menús equilibrados sin precio en web. Escríbenos por WhatsApp.",
    h1: "Comida casera a domicilio en Ciudad Real y Puertollano",
    lead: "Llevamos comida casera a tu puerta en Ciudad Real, Puertollano y localidades hasta 60 km de cualquiera de las dos. Tú eliges el tipo de menú, nosotros preparamos el presupuesto y repartimos.",
    paragraphs: [
      "Este servicio es para casas particulares: una persona, una pareja o quien ese día come en casa y quiere sabor de casa sin organizarlo todo. El tono es cercano. Si lo que necesitas es un colegio, una residencia o una montería, hay servicios específicos; si dudas, cuéntanoslo y te orientamos.",
      "Los menús son equilibrados y pueden adaptarse. Hay ejemplos de primeros y segundos en la carta. La comida se elabora con ingredientes de primeras marcas y con tratamientos de conservación pensados para cuidar los nutrientes hasta el momento de consumirla.",
      "No publicamos tiempos de entrega cerrados ni un mínimo de platos. Eso se confirma al pedir presupuesto, según la localidad y el día. Puedes escribir por WhatsApp, llamar al 675 601 543 o usar el formulario.",
    ],
    includes: [
      "Comida casera para particulares",
      "Menús equilibrados y posibilidad de adaptación",
      "Reparto en el radio de Ciudad Real y de Puertollano",
      "Presupuesto antes de confirmar",
      "Contacto directo por teléfono, WhatsApp o formulario",
    ],
    steps: [
      {
        title: "Cuéntanos qué necesitas",
        text: "Localidad, para cuántas personas, qué tipo de menú y para qué día, si ya lo sabes.",
      },
      {
        title: "Recibes el presupuesto",
        text: "Te proponemos el menú y el importe.",
      },
      {
        title: "Repartimos en tu puerta",
        text: "Elaboramos la comida y la llevamos a la dirección acordada dentro de la zona.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Puertollano?",
        answer:
          "Sí. Puertollano es uno de los dos centros de reparto, junto con Ciudad Real. Cubrimos la ciudad y las localidades que quedan hasta 60 km. El día y el menú se cierran al pedir presupuesto, por teléfono o por WhatsApp.",
      },
      {
        question: "¿Puedo pedir solo para mí?",
        answer:
          "Puedes consultar un encargo particular, sea para una persona o para varias. Indica el número aproximado de comensales en el formulario o por WhatsApp y te decimos si encaja en la ruta de tu localidad.",
      },
    ],
    related: ["colectividades", "catering-personalizado"],
    posts: ["menus-colegios-guarderias"],
  },
  {
    slug: "catering-personalizado",
    name: "Catering personalizado para eventos",
    nav: "Catering personalizado para eventos",
    card: "Menú a medida para una celebración, un evento o una comida en casa.",
    title: "Catering personalizado para eventos en Ciudad Real",
    description:
      "Catering personalizado para celebraciones y eventos en Ciudad Real y Puertollano. Menú a medida y presupuesto, sin precios en la web.",
    h1: "Catering personalizado para eventos en Ciudad Real y Puertollano",
    lead: "Preparamos un menú a medida para tu celebración o tu evento en Ciudad Real, Puertollano y hasta 60 km. Puede ser en casa o en el espacio que elijas. Nos dices la ocasión, el lugar y los comensales, y el presupuesto sale para esa fecha.",
    paragraphs: [
      "El punto de partida es el encargo: cuántas personas, qué ocasión, si hay alguna dieta o alérgeno y qué tipo de comida te imaginas. A partir de eso proponemos un menú casero, no una plantilla idéntica para todo el mundo.",
      "Un evento pide más coordinación que un pedido de casa. Hace falta la hora de servicio, el acceso al espacio, el número de personas y un menú que se entienda de un vistazo. Por eso pedimos esos datos al principio, antes de hablar de importe. Cubrimos celebraciones familiares, bautizos, comidas de grupo y encuentros que necesitan un menú cuidado.",
      "La comida sigue siendo casera, con ingredientes de primeras marcas y la misma lógica de conservación. Las monterías y los eventos de caza tienen su propia página, porque el ritmo del campo no es el de una celebración. El coffee break y las tapas de oficina están en el catering de empresa.",
      "No hay paquetes con precio publicado. Cada encargo se presupuesta. Si la fecha todavía es orientativa, puedes escribir igual: con la localidad y un número aproximado de comensales basta para empezar. Lo que no quede escrito en el presupuesto, no lo damos por hecho.",
    ],
    includes: [
      "Menú de celebración o encuentro, propuesto para esa fecha y esas personas",
      "Servicio en casa o en el espacio que indiques, dentro de la zona",
      "Dietas y alérgenos si se indican al pedir la propuesta",
      "Presupuesto por escrito antes de confirmar, sin permanencia",
      "Teléfono y WhatsApp para afinar detalles",
    ],
    steps: [
      {
        title: "Fecha, lugar y aforo",
        text: "Aunque la fecha sea aproximada, necesitamos saber dónde es, para cuántas personas y si hay algo que no pueda faltar o que haya que evitar.",
      },
      {
        title: "Menú y presupuesto",
        text: "Te proponemos la comida y el importe. Lo revisamos juntos si hay que cambiar un plato o el aforo.",
      },
      {
        title: "El día",
        text: "Elaboramos y llevamos el catering al punto acordado, dentro del radio de 60 km.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis catering para eventos en Puertollano?",
        answer:
          "Sí. Puertollano entra en la zona, igual que Ciudad Real y las localidades del radio de 60 km. Para un evento pedimos lugar, fecha orientativa y número de comensales, y devolvemos un presupuesto. No hay tarifa publicada.",
      },
      {
        question: "¿Sirve también para una comida en casa?",
        answer:
          "Sí, si la casa está en Ciudad Real, Puertollano o a menos de 60 km de una de las dos. Cuéntanos la fecha, las personas y el tipo de menú. La propuesta y el presupuesto se envían por escrito.",
      },
      {
        question: "¿Con cuánta antelación hay que pedir un evento?",
        answer:
          "No publicamos un plazo fijo. Cuanto antes nos cuentes la fecha, más fácil es encajarla en el reparto. Si el evento es pronto, llama o escribe por WhatsApp al 675 601 543 y te decimos si llegamos.",
      },
      {
        question: "¿Podéis adaptar el menú si hay alérgenos?",
        answer:
          "Sí, si nos los indicas al pedir la información. La adaptación se hace sobre lo que conocemos del encargo. En la carta de ejemplo los alérgenos están marcados como pendientes de confirmar en los platos reales.",
      },
      {
        question: "¿El catering de una montería se pide aquí?",
        answer:
          "No. Las monterías, los desayunos camperos y las comidas de campo están en el servicio de catering para eventos de caza. Si tu jornada es de ese tipo, entra por esa página para que la propuesta encaje con el ritmo del día.",
      },
    ],
    related: ["comida-a-domicilio", "catering-empresa-y-eventos", "catering-monterias-eventos-caza"],
    posts: ["catering-monteria"],
  },
  {
    slug: "catering-empresa-y-eventos",
    name: "Catering en tu empresa y eventos",
    nav: "Empresa y eventos",
    card: "Coffee break, tapas y catering pequeño para la oficina o el evento, en Ciudad Real y Puertollano.",
    title: "Catering para empresas en Ciudad Real",
    description:
      "Coffee break, tapas y catering de oficina en Ciudad Real y Puertollano. Lo llevamos a la reunión o al evento. Presupuesto por WhatsApp.",
    h1: "Catering para tu empresa y tus eventos en Ciudad Real",
    lead: "Llevamos el coffee break, las tapas o un catering pequeño a la oficina, a la sala de reuniones y al evento. Comida casera en Ciudad Real, Puertollano y hasta 60 km. Nos dices la hora y las personas, y llegamos con la bandeja.",
    paragraphs: [
      "La pausa de una reunión, la presentación de mediodía o el equipo que come junto piden algo que se ponga en la mesa y se termine. El coffee break, unas tapas o un catering corto para la oficina es lo que más se busca ahora, y aquí sale de cocina casera.",
      "En el coffee break llevamos bocados dulces y salados para la pausa. Las tapas son para compartir en la mesa del equipo, en un formato pequeño, pensado para una sala. Si el encargo es el evento de la empresa, una presentación, un aniversario o una jornada, preparamos el menú para esa hora y ese número de personas.",
      "Repartimos en despachos del centro, en naves de polígono y en salas de Ciudad Real, de Puertollano y de las localidades que quedan hasta 60 km de cualquiera de las dos. Si la dirección está en el límite, lo confirmamos al pedir la información.",
      "Para contratarlo basta un mensaje: empresa o tipo de evento, dirección, número de personas, hora y si es coffee break, tapas o comida. El presupuesto sale por escrito. En la web no hay tarifas ni un pedido que se renueve solo. WhatsApp y teléfono: 675 601 543.",
    ],
    includes: [
      "Coffee break para reuniones y jornadas",
      "Tapas para la oficina o el equipo",
      "Catering pequeño en sala, despacho o evento de empresa",
      "Reparto en Ciudad Real, Puertollano y hasta 60 km",
      "Presupuesto por escrito antes de confirmar",
    ],
    steps: [
      {
        title: "La reunión",
        text: "Día, hora, dirección de la oficina o del evento, número de personas y si es coffee break, tapas o comida.",
      },
      {
        title: "La propuesta",
        text: "Te enviamos el menú y el presupuesto. Se ajusta si cambia el aforo o la hora.",
      },
      {
        title: "La entrega",
        text: "Elaboramos y lo llevamos a la mesa acordada, dentro de la zona de reparto.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis coffee break para empresas en Ciudad Real?",
        answer:
          "Sí. Preparamos el coffee break de reuniones y jornadas en Ciudad Real, Puertollano y hasta 60 km: bocados dulces y salados para la pausa. Indica la dirección de la oficina, la hora y cuántas personas sois. El presupuesto se envía por escrito; en la web no hay tarifa.",
      },
      {
        question: "¿Lleváis tapas o un catering pequeño a la oficina?",
        answer:
          "Sí. Llevamos tapas para compartir y un catering pequeño a la mesa de la oficina, el despacho o la sala. Sirve para un equipo, una visita o una comida de trabajo en Ciudad Real, Puertollano y el radio de 60 km. WhatsApp y teléfono: 675 601 543.",
      },
      {
        question: "¿También cubrís el evento de la empresa?",
        answer:
          "Sí. Presentaciones, aniversarios de empresa y jornadas entran en este servicio. Una celebración familiar o un menú a medida se pide en catering personalizado para eventos. Una montería tiene su propia página. En todos los casos el presupuesto es previo.",
      },
    ],
    related: ["catering-personalizado", "comida-a-domicilio"],
    posts: [],
  },
  {
    slug: "catering-monterias-eventos-caza",
    name: "Catering para monterías y caza",
    nav: "Monterías y caza",
    card: "Desayuno campero, almuerzo y comida para monterías y eventos cinegéticos.",
    title: "Catering para monterías en Ciudad Real",
    description:
      "Catering para monterías y eventos de caza en Ciudad Real: desayuno campero, almuerzo y comida. Presupuesto según comensales y finca.",
    h1: "Catering para monterías y eventos de caza en Ciudad Real",
    lead: "Hacemos catering gastronómico para monterías y eventos cinegéticos en la zona de Ciudad Real y Puertollano: desayuno campero, almuerzo y comida. El presupuesto depende de la finca, la fecha y los comensales.",
    paragraphs: [
      "Una montería no se sirve como un cóctel en un salón. Hay madrugón, gente que entra y sale del campo, y una comida que tiene que estar cuando el grupo vuelve. El servicio contempla esas tres piezas: desayuno campero, almuerzo y comida.",
      "La propuesta se habla con quien organiza: número aproximado de cazadores y acompañantes, finca o punto de encuentro, y si hace falta alguna adaptación. El menú de campo no está cerrado en la carta: se propone al pedir la información.",
      "La zona es la misma del resto de servicios: Ciudad Real, Puertollano y hasta 60 km. Muchas fincas del Valle de Alcudia, del Campo de Calatrava o del entorno de Despeñaperros entran en ese radio; si la tuya está justo en el límite, lo confirmamos al presupuestar. El acceso por camino se tiene en cuenta en esa confirmación.",
    ],
    includes: [
      "Desayuno campero",
      "Almuerzo",
      "Comida de montería o evento cinegético",
      "Propuesta según aforo y finca",
      "Reparto dentro del radio de 60 km, con confirmación si el camino es de finca",
    ],
    steps: [
      {
        title: "Datos de la jornada",
        text: "Fecha, finca o paraje, localidad de referencia y número aproximado de comensales.",
      },
      {
        title: "Menú de campo",
        text: "Te proponemos desayuno, almuerzo y comida, con presupuesto. Se ajusta si el grupo cambia.",
      },
      {
        title: "Servicio en el puesto acordado",
        text: "Llevamos la comida al punto de encuentro que dejemos cerrado, dentro de la zona.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis catering para monterías?",
        answer:
          "Sí. El servicio de caza incluye desayuno campero, almuerzo y comida para monterías y otros eventos cinegéticos en Ciudad Real, Puertollano y hasta 60 km. Se pide presupuesto con la fecha, la finca y los comensales. No hay precio publicado.",
      },
      {
        question: "¿Llegáis a una finca que no está en el pueblo?",
        answer:
          "Si la finca está dentro del radio de 60 km de Ciudad Real o de Puertollano, se puede estudiar. Al pedir presupuesto indica el paraje y cómo se llega. Así confirmamos el reparto antes de cerrar el menú.",
      },
      {
        question: "¿El desayuno campero va siempre incluido?",
        answer:
          "El servicio está pensado con desayuno campero, almuerzo y comida. Si una jornada solo necesita una de las tres, dímelo al pedir información y presupuestamos esa parte. No obligamos a contratar las tres si no hacen falta.",
      },
    ],
    related: ["catering-personalizado"],
    posts: ["catering-monteria"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
