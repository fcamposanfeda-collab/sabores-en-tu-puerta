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
      "Menús para colegios, guarderías, residencias y centros de mayores en Ciudad Real y Puertollano. Dietas adaptadas. Pide presupuesto.",
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
      "Comida casera a domicilio en Ciudad Real y Puertollano, hasta 60 km. Menús equilibrados sin precio en web. Pide presupuesto por WhatsApp.",
    h1: "Comida casera a domicilio en Ciudad Real y Puertollano",
    lead: "Llevamos comida casera a tu puerta en Ciudad Real, Puertollano y localidades hasta 60 km de cualquiera de las dos. Tú eliges el tipo de menú, nosotros preparamos el presupuesto y repartimos. No hay carta con precios ni suscripción.",
    paragraphs: [
      "Este servicio es para casas particulares: una persona, una pareja o quien ese día come en casa y quiere sabor de casa sin organizarlo todo. El tono es cercano. Si lo que necesitas es un colegio, una residencia o una montería, hay servicios específicos; si dudas, cuéntanoslo y te orientamos.",
      "Los menús son equilibrados y pueden adaptarse. Hay ejemplos de primeros, segundos y postres en la carta, marcados como pendientes de sustituir por los platos reales. La comida se elabora con ingredientes de primeras marcas y con tratamientos de conservación pensados para cuidar los nutrientes hasta el momento de consumirla.",
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
        text: "Te proponemos el menú y el importe. Sin precios genéricos colgados en la web.",
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
        question: "¿Por qué no hay precios en la web?",
        answer:
          "Porque el encargo cambia según el menú, las personas y la localidad. Publicar un precio único no describiría el servicio. Pides presupuesto y te respondemos con una propuesta concreta, sin suscripción.",
      },
      {
        question: "¿Puedo pedir solo para mí?",
        answer:
          "Puedes consultar un encargo particular, sea para una persona o para varias. Indica el número aproximado de comensales en el formulario o por WhatsApp y te decimos si encaja en la ruta de tu localidad.",
      },
    ],
    related: ["colectividades", "catering-personalizado", "eventos"],
    posts: ["menus-colegios-guarderias"],
  },
  {
    slug: "catering-personalizado",
    name: "Catering personalizado",
    nav: "Catering personalizado",
    card: "Un menú hecho para tu celebración, comida de empresa o reunión.",
    title: "Catering personalizado en Ciudad Real",
    description:
      "Catering personalizado en Ciudad Real y Puertollano. Menús a medida para celebraciones y reuniones. Presupuesto sin precios publicados.",
    h1: "Catering personalizado en Ciudad Real y Puertollano",
    lead: "El catering personalizado es un menú a medida para una celebración, una comida de trabajo o una reunión en casa o en un espacio que tú eliges, dentro de Ciudad Real, Puertollano y 60 km. Se pide por presupuesto, no por catálogo de precios.",
    paragraphs: [
      "Aquí el punto de partida eres tú: cuántas personas, qué ocasión, si hay alguna dieta o alérgeno y qué tipo de comida te imaginas. A partir de eso proponemos un menú casero, no una plantilla idéntica para todo el mundo.",
      "Puede ser una comida familiar, un bautizo, una junta o un detalle para un equipo. Si la ocasión es una montería o un evento de caza, conviene el servicio específico de campo. Si es un evento con otro formato, míralo en la página de eventos o cuéntanoslo y lo encajamos.",
      "Seguimos con ingredientes de primeras marcas y con la misma lógica de conservación. El presupuesto incluye lo que acordemos por escrito: menú, localidad y fecha. Lo que no esté escrito, no lo damos por hecho.",
    ],
    includes: [
      "Menú propuesto según la ocasión y los comensales",
      "Adaptación si nos indicas dietas o alérgenos",
      "Servicio en la zona de Ciudad Real y Puertollano",
      "Presupuesto previo y sin permanencia",
      "Contacto directo para ajustar la propuesta",
    ],
    steps: [
      {
        title: "La ocasión",
        text: "Fecha orientativa, lugar, número de personas y si hay algo que no pueda faltar o que haya que evitar.",
      },
      {
        title: "La propuesta",
        text: "Te enviamos un menú y un presupuesto. Se puede ajustar antes de confirmar.",
      },
      {
        title: "El día",
        text: "Elaboramos y llevamos la comida al punto acordado dentro de la zona de reparto.",
      },
    ],
    faqs: [
      {
        question: "¿El catering personalizado sirve para una comida en casa?",
        answer:
          "Sí, si la casa está en Ciudad Real, Puertollano o a menos de 60 km de una de las dos. Cuéntanos la fecha, las personas y el tipo de menú. Te respondemos con una propuesta y un presupuesto, sin precios fijos en la web.",
      },
      {
        question: "¿Podéis adaptar el menú si hay alérgenos?",
        answer:
          "Sí, si nos los indicas al pedir la información. La adaptación se hace sobre lo que conocemos del encargo. En la carta de ejemplo los alérgenos están marcados como pendientes de confirmar en los platos reales.",
      },
      {
        question: "¿En qué se diferencia del catering de eventos?",
        answer:
          "El personalizado se centra en el menú y en las personas de ese encargo. El de eventos cubre celebraciones y formatos con más logística. Si no tienes claro cuál encaja, escríbenos y te decimos por dónde seguir. Los dos se presupuestan igual.",
      },
    ],
    related: ["eventos", "comida-a-domicilio", "catering-monterias-eventos-caza"],
    posts: ["catering-monteria"],
  },
  {
    slug: "eventos",
    name: "Eventos exclusivos",
    nav: "Eventos",
    card: "Catering para celebraciones y eventos en la provincia.",
    title: "Catering para eventos en Ciudad Real",
    description:
      "Catering para eventos en Ciudad Real y Puertollano. Celebraciones con comida casera y presupuesto a medida. Cuéntanos fecha y comensales.",
    h1: "Catering para eventos en Ciudad Real y Puertollano",
    lead: "Organizamos el catering de celebraciones y eventos en Ciudad Real, Puertollano y hasta 60 km, con comida casera y un presupuesto hecho para esa fecha. Nos dices el tipo de evento, el lugar y los comensales.",
    paragraphs: [
      "Un evento pide más coordinación que un pedido de casa: hora de servicio, acceso al espacio, número de personas y un menú que se entienda de un vistazo. Por eso pedimos esos datos al principio, antes de hablar de importe.",
      "Cubrimos celebraciones familiares y encuentros que necesitan un menú cuidado, con la misma base de cocina casera, ingredientes de primeras marcas y dietas adaptadas cuando nos las señaláis. Las monterías y los eventos de caza tienen su propia página, porque el ritmo del campo no es el de un salón.",
      "No hay paquetes con precio publicado. Cada evento se presupuesta. Si la fecha todavía es orientativa, puedes enviar el formulario igual: con la localidad y un número aproximado de comensales basta para empezar.",
    ],
    includes: [
      "Menú de celebración o encuentro, propuesto para esa fecha",
      "Reparto en la zona de servicio",
      "Posibilidad de dietas adaptadas si se indican al reservar la propuesta",
      "Presupuesto por escrito antes de confirmar",
      "Vía directa por teléfono y WhatsApp el día que haya que afinar detalles",
    ],
    steps: [
      {
        title: "Fecha, lugar y aforo",
        text: "Aunque la fecha sea aproximada, necesitamos saber dónde es y para cuántas personas.",
      },
      {
        title: "Menú y presupuesto",
        text: "Te proponemos la comida y el importe. Lo revisamos juntos si hay que cambiar un plato.",
      },
      {
        title: "Servicio",
        text: "Elaboramos y llevamos el catering al espacio, dentro del radio de 60 km.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis catering para eventos en Puertollano?",
        answer:
          "Sí. Puertollano entra en la zona de servicio, igual que Ciudad Real y las localidades del radio. Para un evento pedimos lugar, fecha orientativa y número de comensales, y devolvemos un presupuesto. No hay tarifa colgada en la web.",
      },
      {
        question: "¿Con cuánta antelación hay que pedir un evento?",
        answer:
          "No publicamos un plazo fijo. Cuanto antes nos cuentes la fecha, más fácil es encajarla en el reparto. Si el evento es pronto, llama o escribe por WhatsApp y te decimos si llegamos.",
      },
      {
        question: "¿El catering de una montería se pide aquí?",
        answer:
          "Las monterías, los desayunos camperos y las comidas de campo están en el servicio de catering para eventos de caza. Si tu evento es de ese tipo, entra por esa página para que la propuesta encaje con el ritmo del día.",
      },
    ],
    related: ["catering-personalizado", "catering-monterias-eventos-caza"],
    posts: ["catering-monteria"],
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
      "La propuesta se habla con quien organiza: número aproximado de cazadores y acompañantes, finca o punto de encuentro, y si hace falta alguna adaptación. No inventamos un menú único de caza en esta web. En la carta hay ejemplos de cocina de campo, marcados para sustituir por los platos que realmente elaboréis con nosotros.",
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
    related: ["eventos", "catering-personalizado"],
    posts: ["catering-monteria"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
