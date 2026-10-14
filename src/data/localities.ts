/**
 * Distancias en línea recta (km) desde los núcleos urbanos aproximados.
 * Radio de servicio: 60 km desde Ciudad Real (38.9863, -3.9291)
 * o desde Puertollano (38.6871, -4.1073).
 * `enabled: false` = revisada y fuera de radio: no genera landing.
 * Edita este archivo para añadir o quitar localidades.
 */

export type Locality = {
  slug: string;
  name: string;
  enabled: boolean;
  kmFromCiudadReal: number;
  kmFromPuertollano: number;
  edge?: boolean;
  exclusionReason?: string;
  nearby: string[];
  lead: string;
  context: string;
  delivery: string;
  /** Servicios que más sentido tienen aquí, en este orden. */
  serviceSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const localities: Locality[] = [
  {
    slug: "ciudad-real",
    name: "Ciudad Real",
    enabled: true,
    kmFromCiudadReal: 0,
    kmFromPuertollano: 36.7,
    nearby: ["miguelturra", "poblete", "carrion-de-calatrava", "pozuelo-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos", "catering-personalizado"],
    lead: "En Ciudad Real repartimos comida casera a domicilio y servimos a colectividades, celebraciones y catering. Es uno de los dos centros del servicio, junto con Puertollano. El presupuesto se pide por teléfono, WhatsApp o formulario; en la web no hay precios.",
    context:
      "La capital concentra colegios, guarderías, residencias, centros de mayores y casas particulares en distintos barrios, además de la universidad y los servicios públicos. Por eso aquí tienen peso tanto el menú de casa como el de colectividades. Si el encargo es una celebración en un domicilio o en un local de la ciudad, se trata como evento o como catering personalizado, no como un pedido genérico.",
    delivery:
      "El reparto urbano se organiza por zonas de la ciudad. Al pedir presupuesto indica el barrio o la dirección aproximada, el número de comensales y el día. No publicamos una hora fija de paso: se acuerda en la propuesta. Desde Ciudad Real también salen rutas hacia pueblos del alrededor que están a menos de 60 km.",
    faqs: [
      {
        question: "¿Hacéis comida casera a domicilio en Ciudad Real?",
        answer:
          "Sí. Ciudad Real es centro de reparto. Llevamos comida casera a casas y también a colegios, guarderías, residencias y centros de mayores de la ciudad. El menú y el precio se concretan en un presupuesto, no en una tienda online.",
      },
      {
        question: "¿Cubrís toda la capital o solo el centro?",
        answer:
          "El servicio está pensado para la ciudad, no solo para el casco histórico. Indica el barrio al pedir información. Si el punto de entrega está en un polígono o en las afueras, lo confirmamos en la misma propuesta.",
      },
    ],
  },
  {
    slug: "puertollano",
    name: "Puertollano",
    enabled: true,
    kmFromCiudadReal: 36.7,
    kmFromPuertollano: 0,
    nearby: ["almodovar-del-campo", "argamasilla-de-calatrava", "cabezarados", "mestanza"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-monterias-eventos-caza", "eventos"],
    lead: "En Puertollano hay comida casera a domicilio y servicio para colectividades, eventos y monterías de la comarca. Es el segundo centro de reparto, a unos 37 km de Ciudad Real. Se pide presupuesto; no hay precios en la web.",
    context:
      "Puertollano tiene vida de barrio, centros educativos, residencias y un entorno de campo y dehesa hacia Almodóvar, el Valle de Alcudia y la sierra. Eso cambia el tipo de encargos respecto a la capital: además de la casa y el comedor, aquí pesan las comidas de finca y las monterías. El menú sigue siendo casero y, cuando hace falta, adaptado.",
    delivery:
      "El reparto dentro de Puertollano se acuerda por barrios. Para una finca o un punto de encuentro a las afueras, indica el paraje al presupuestar, sobre todo si el camino no es calle urbana. Desde aquí se llega a pueblos del sur y del oeste que quedan lejos de Ciudad Real pero dentro de 60 km de Puertollano, como Fuencaliente o Brazatortas.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Puertollano?",
        answer:
          "Sí. Puertollano es centro de reparto, no una extensión ocasional de Ciudad Real. Puedes pedir comida casera para casa, un menú de colectividad o un catering. La propuesta sale por teléfono, WhatsApp o el formulario.",
      },
      {
        question: "¿Desde Puertollano llegáis a las fincas de alrededor?",
        answer:
          "Si la finca está a 60 km o menos de Puertollano, o de Ciudad Real, se estudia el reparto. Hace falta el nombre del paraje y cómo se accede. Las monterías se presupuestan con desayuno campero, almuerzo y comida si los necesitas.",
      },
    ],
  },
  {
    slug: "miguelturra",
    name: "Miguelturra",
    enabled: true,
    kmFromCiudadReal: 4.1,
    kmFromPuertollano: 36.1,
    nearby: ["ciudad-real", "pozuelo-de-calatrava", "poblete", "carrion-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Miguelturra tiene comida casera a domicilio a unos 4 km de Ciudad Real, en la misma zona urbana. También preparamos propuestas para sus colegios, guarderías y centros de mayores. El presupuesto es a medida.",
    context:
      "Miguelturra está pegada a la capital. Muchas familias viven en un municipio y trabajan o estudian en el otro, así que el reparto no se trata como un desplazamiento largo. Encajan la comida de casa, el comedor de un centro local y un catering pequeño de celebración.",
    delivery:
      "El reparto se hace en la misma organización que el de Ciudad Real. Indica la calle o la urbanización. No hace falta un mínimo de kilómetros ni un suplemento publicado: si hay algún ajuste por la dirección, va dentro del presupuesto, no como sorpresa en la web.",
    faqs: [
      {
        question: "¿Repartís comida a domicilio en Miguelturra?",
        answer:
          "Sí. Miguelturra está a unos 4 km de Ciudad Real y entra de lleno en la zona. Puedes pedir para casa o para un centro. Escríbenos con el número de comensales y el día y te pasamos el presupuesto.",
      },
      {
        question: "¿El servicio en Miguelturra es distinto al de la capital?",
        answer:
          "La comida es la misma cocina casera. Cambia la dirección de entrega. Al estar en continuidad con Ciudad Real, se organiza junto con las rutas de la capital, no como un servicio aparte con otras reglas.",
      },
    ],
  },
  {
    slug: "poblete",
    name: "Poblete",
    enabled: true,
    kmFromCiudadReal: 7.2,
    kmFromPuertollano: 29.7,
    nearby: ["ciudad-real", "miguelturra", "corral-de-calatrava", "almagro"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "En Poblete, a unos 7 km al sur de Ciudad Real, llevamos comida casera a domicilio y catering para celebraciones en casa. Si hay un centro que necesite menú, también preparamos propuesta de colectividades.",
    context:
      "Poblete es la salida sur de la capital, con vivienda y un casco corto. Los encargos habituales son de casa y de reunión familiar. Queda también bien situado si el evento está entre la capital y el camino de Almagro o de Puertollano.",
    delivery:
      "La entrega se concreta en el pueblo. Si la dirección es una parcela o una casa a las afueras del casco, indícalo al pedir presupuesto para dejar el punto de descarga claro. El plazo no está publicado: se acuerda en la propuesta.",
    faqs: [
      {
        question: "¿Llegáis con comida a domicilio a Poblete?",
        answer:
          "Sí. Poblete está a unos 7 km de Ciudad Real, muy dentro del radio. Indica personas y día al escribirnos. No hay lista de precios en la web.",
      },
      {
        question: "¿Podéis servir una comida familiar en una casa de Poblete?",
        answer:
          "Sí, como catering personalizado o como comida a domicilio, según el tamaño de la reunión. Cuéntanos cuántos vais a ser y si hay alguna dieta. La propuesta sale por escrito antes de confirmar.",
      },
    ],
  },
  {
    slug: "carrion-de-calatrava",
    name: "Carrión de Calatrava",
    enabled: true,
    kmFromCiudadReal: 10.2,
    kmFromPuertollano: 44.5,
    nearby: ["ciudad-real", "torralba-de-calatrava", "fernán-caballero"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Carrión de Calatrava, a unos 10 km de Ciudad Real junto al Guadiana, tiene comida casera a domicilio y propuesta de menús para sus centros. El servicio se pide por presupuesto.",
    context:
      "Es un pueblo de vega, muy cerca de la capital, con vida de colectividad local más que de gran evento. Encaja la comida de diario en casa y el menú de un colegio, una guardería o un centro de mayores si el centro lo solicita.",
    delivery:
      "El reparto entra en las rutas cortas de Ciudad Real. Basta con la dirección del casco. No tratamos Carrión como un extra de larga distancia.",
    faqs: [
      {
        question: "¿Hay comida a domicilio en Carrión de Calatrava?",
        answer:
          "Sí. Está a unos 10 km de Ciudad Real. Puedes pedir comida casera para casa o consultar un menú de colectividad. El precio se da en el presupuesto.",
      },
      {
        question: "¿También llegáis a viviendas junto al río, fuera del centro?",
        answer:
          "Si la casa está en el término y dentro del radio, indícanos la dirección o el paraje. Lo confirmamos al preparar la propuesta para no dejar la entrega en un punto equivocado.",
      },
    ],
  },
  {
    slug: "pozuelo-de-calatrava",
    name: "Pozuelo de Calatrava",
    enabled: true,
    kmFromCiudadReal: 11.4,
    kmFromPuertollano: 34.2,
    nearby: ["ciudad-real", "almagro", "miguelturra", "bolanos-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos"],
    lead: "Pozuelo de Calatrava está a unos 11 km de Ciudad Real, en el camino de Almagro. Repartimos comida casera a domicilio y podemos presupuestar colectividades o una celebración en el pueblo.",
    context:
      "El pueblo queda entre la capital y Almagro, así que un mismo desplazamiento puede encajar encargos de casa y algún evento pequeño. No es un núcleo industrial: el servicio se plantea a escala de municipio, con menús caseros y adaptación si nos la pides.",
    delivery:
      "La entrega es en el casco, salvo que indiques otra dirección del término. Al estar tan cerca de Ciudad Real, se organiza con las rutas del sur de la capital.",
    faqs: [
      {
        question: "¿Repartís en Pozuelo de Calatrava?",
        answer:
          "Sí. Pozuelo está a unos 11 km de Ciudad Real y dentro de la zona. Pide información con la localidad, las personas y el tipo de servicio.",
      },
      {
        question: "¿Puedo encargar desde Pozuelo un menú para un centro del pueblo?",
        answer:
          "Sí. El servicio de colectividades cubre colegios, guarderías, residencias y centros de mayores también en municipios pequeños, si el centro quiere una propuesta. Se habla el menú y el calendario antes de dar el presupuesto.",
      },
    ],
  },
  {
    slug: "torralba-de-calatrava",
    name: "Torralba de Calatrava",
    enabled: true,
    kmFromCiudadReal: 15.7,
    kmFromPuertollano: 47.9,
    nearby: ["carrion-de-calatrava", "daimiel", "ciudad-real"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "En Torralba de Calatrava, a unos 16 km al este de Ciudad Real, hay comida casera a domicilio y menús para colectividades. Cada encargo se presupuesta; no hay tarifa en la web.",
    context:
      "Torralba está en la llanura entre la capital y Daimiel. Los encargos que más encajan son los de casa y los de un centro local. Una celebración familiar se puede ver como catering personalizado si el número de comensales lo pide.",
    delivery:
      "El reparto sale desde Ciudad Real. Indica si la entrega es en el pueblo o en una casa de labor del término, porque el acceso no es el mismo. El día se cierra en la propuesta.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Torralba de Calatrava?",
        answer:
          "Sí. Torralba está a unos 16 km de Ciudad Real, dentro de los 60 km. Escríbenos o llama y te preparamos el presupuesto según el menú y las personas.",
      },
      {
        question: "¿El menú puede adaptarse en un pueblo pequeño?",
        answer:
          "Sí. La adaptación no depende del tamaño del municipio, sino de lo que nos indiques: alérgenos, textura o tipo de menú. En colectividades lo habla el centro; en casa, quien hace el pedido.",
      },
    ],
  },
  {
    slug: "almagro",
    name: "Almagro",
    enabled: true,
    kmFromCiudadReal: 21.8,
    kmFromPuertollano: 40.9,
    nearby: ["bolanos-de-calatrava", "pozuelo-de-calatrava", "calzada-de-calatrava"],
    serviceSlugs: ["eventos", "comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "En Almagro repartimos comida casera a domicilio y catering para celebraciones, a unos 22 km de Ciudad Real. También hay propuesta para colegios, guarderías y centros de mayores. El precio se da en presupuesto.",
    context:
      "Almagro es villa de teatro, con el Corral de Comedias y una plaza mayor que atrae visitas y celebraciones. Además del día a día del pueblo, aquí tienen sentido los encargos de evento: una comida de grupo, una celebración o un menú para quien recibe en casa. El servicio sigue siendo cocina casera, no un montaje de banquete con precio cerrado.",
    delivery:
      "La entrega en el casco se acuerda al presupuestar. Si el evento está en un espacio del centro y hay horario de montaje, indícalo: no es lo mismo dejar la comida en un domicilio que coordinarla con una celebración. Almagro queda también a unos 41 km de Puertollano, así que el centro de salida habitual es Ciudad Real.",
    faqs: [
      {
        question: "¿Hay catering para eventos en Almagro?",
        answer:
          "Sí. Almagro está a unos 22 km de Ciudad Real. Podemos presupuestar un evento, un catering personalizado o comida a domicilio. Dinos fecha, lugar y comensales.",
      },
      {
        question: "¿Llegáis a alojamientos o casas del casco antiguo?",
        answer:
          "Sí, si la dirección está en Almagro. Cuéntanos si hay restricciones de acceso con vehículo, para dejar el punto de entrega resuelto en el presupuesto y no el mismo día.",
      },
    ],
  },
  {
    slug: "bolanos-de-calatrava",
    name: "Bolaños de Calatrava",
    enabled: true,
    kmFromCiudadReal: 20.4,
    kmFromPuertollano: 41.7,
    nearby: ["almagro", "pozuelo-de-calatrava", "daimiel"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos"],
    lead: "Bolaños de Calatrava, a unos 20 km de Ciudad Real y junto a Almagro, tiene comida a domicilio, menús de colectividades y catering de celebración. Se pide presupuesto sin precios publicados.",
    context:
      "Es uno de los núcleos con más población del Campo de Calatrava, al lado de Almagro pero con su propio día a día: colegios, casas y celebraciones de pueblo. El servicio no se limita al visitante de Almagro. Quien vive en Bolaños puede pedir para casa o para un centro.",
    delivery:
      "El reparto sale desde Ciudad Real, a poco más de 20 km. Indica el barrio o la calle. Si el evento es el mismo día que otro en Almagro, lo coordinamos en la propuesta; no hace falta que lo organices tú.",
    faqs: [
      {
        question: "¿Repartís comida casera en Bolaños de Calatrava?",
        answer:
          "Sí. Bolaños está a unos 20 km de Ciudad Real, dentro del radio. Puedes pedir comida a domicilio o un menú para un centro del municipio.",
      },
      {
        question: "¿Es el mismo servicio que en Almagro?",
        answer:
          "La cocina es la misma y la distancia es parecida, pero el encargo se presupuesta con la dirección de Bolaños. No hace falta recogerlo en Almagro ni en Ciudad Real.",
      },
    ],
  },
  {
    slug: "daimiel",
    name: "Daimiel",
    enabled: true,
    kmFromCiudadReal: 28.7,
    kmFromPuertollano: 60.3,
    nearby: ["torralba-de-calatrava", "villarrubia-de-los-ojos", "manzanares"],
    serviceSlugs: ["colectividades", "comida-a-domicilio", "catering-personalizado"],
    lead: "En Daimiel, a unos 29 km de Ciudad Real, hacemos comida casera a domicilio y menús para colegios, guarderías, residencias y centros de mayores. Desde Puertollano queda en el límite; el reparto se plantea desde la capital.",
    context:
      "Daimiel es puerta de las Tablas y un pueblo de servicios, con centros educativos y de mayores propios. No dependéis de ir a Ciudad Real a por la comida: el reparto llega al municipio. Las visitas al parque no cambian el servicio, que está pensado para quien vive o trabaja aquí.",
    delivery:
      "La ruta sale de Ciudad Real. Daimiel está a unos 29 km, holgado dentro de los 60. Puertollano queda a unos 60 km justos, así que no usamos ese centro como referencia. Indica si la entrega es en el casco o en una pedanía.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Daimiel?",
        answer:
          "Sí. Daimiel está a unos 29 km de Ciudad Real. Hay comida casera para casa y propuesta de colectividades. Indica el número de comensales y el día.",
      },
      {
        question: "¿Llegáis a las pedanías de Daimiel?",
        answer:
          "Si la pedanía está en el término y sigue dentro del radio, la estudiamos. Escríbela en la solicitud. No damos por hecha una entrega en diseminado sin confirmar el acceso.",
      },
    ],
  },
  {
    slug: "malagon",
    name: "Malagón",
    enabled: true,
    kmFromCiudadReal: 21.5,
    kmFromPuertollano: 58,
    nearby: ["fernán-caballero", "ciudad-real", "porzuna"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Malagón, a unos 22 km al norte de Ciudad Real, tiene comida casera a domicilio y menús para sus centros. El presupuesto se pide por WhatsApp, teléfono o formulario.",
    context:
      "El pueblo está en el eje hacia Toledo, con un casco extenso y actividad propia, no solo como dormitorio de la capital. Encajan la comida de casa y la colectividad. Los eventos de caza son menos el centro del servicio aquí que en la sierra del sur: si surge uno, se mira aparte.",
    delivery:
      "La salida es desde Ciudad Real, a poco más de 20 km. Puertollano queda a unos 58 km, casi en el límite, así que no es la base de esta ruta. Indica la zona del pueblo si no es el centro.",
    faqs: [
      {
        question: "¿Repartís en Malagón?",
        answer:
          "Sí. Malagón está a unos 22 km de Ciudad Real. Puedes pedir comida a domicilio o un menú de colectividad. No hay precios en la página.",
      },
      {
        question: "¿El servicio norte es el mismo que el del Campo de Calatrava?",
        answer:
          "La comida y la forma de pedir presupuesto son las mismas. Cambia la ruta: Malagón se atiende desde Ciudad Real hacia el norte, no desde Puertollano.",
      },
    ],
  },
  {
    slug: "piedrabuena",
    name: "Piedrabuena",
    enabled: true,
    kmFromCiudadReal: 21.8,
    kmFromPuertollano: 39.1,
    nearby: ["porzuna", "picón", "ciudad-real"],
    serviceSlugs: ["comida-a-domicilio", "catering-monterias-eventos-caza", "colectividades"],
    lead: "En Piedrabuena, a unos 22 km al oeste de Ciudad Real, repartimos comida casera y podemos presupuestar un catering de campo o de montería, además de menús para centros del municipio.",
    context:
      "Piedrabuena abre la comarca hacia los montes y hacia Cabañeros. Además de las casas del pueblo, es razonable que aparezcan encargos en finca o dehesa. Si es una montería, el servicio incluye desayuno campero, almuerzo y comida, los que necesitéis. Si es el menú de un centro, se trata como colectividad.",
    delivery:
      "Hay unos 22 km desde Ciudad Real y unos 39 desde Puertollano. Según el punto exacto elegimos la salida al presupuestar. Para un cortijo, manda el paraje: el casco urbano no nos sirve como única referencia.",
    faqs: [
      {
        question: "¿Llegáis a Piedrabuena con comida a domicilio?",
        answer:
          "Sí. Piedrabuena está a unos 22 km de Ciudad Real. El pedido de casa o de un centro se presupuesta como en el resto de la zona.",
      },
      {
        question: "¿Hacéis catering de montería en el término de Piedrabuena?",
        answer:
          "Si la finca está dentro de 60 km de Ciudad Real o de Puertollano, sí se puede estudiar. Indica el paraje, la fecha y los comensales. El menú de campo se propone en el presupuesto, no está cerrado en la web.",
      },
    ],
  },
  {
    slug: "porzuna",
    name: "Porzuna",
    enabled: true,
    kmFromCiudadReal: 26.3,
    kmFromPuertollano: 51.2,
    nearby: ["piedrabuena", "malagon", "ciudad-real"],
    serviceSlugs: ["comida-a-domicilio", "catering-monterias-eventos-caza", "colectividades"],
    lead: "Porzuna, a unos 26 km de Ciudad Real y cerca de Cabañeros, tiene comida a domicilio y catering para jornadas de campo. Los núcleos separados del casco se confirman uno a uno al pedir presupuesto.",
    context:
      "El municipio es amplio, con el pueblo y bastante término hacia el parque. No es lo mismo dejar la comida en el casco que en una casa o una finca a varios kilómetros de la plaza. Por eso el presupuesto pide el punto concreto. Las colectividades del pueblo se pueden consultar igual que en cualquier otro municipio de la zona.",
    delivery:
      "La ruta sale sobre todo de Ciudad Real. Si el destino es una pedanía o un acceso de sierra, lo miramos antes de confirmar el día. No prometemos la misma franja horaria que en un barrio de la capital.",
    faqs: [
      {
        question: "¿Hay reparto de comida casera en Porzuna?",
        answer:
          "Sí para el casco, a unos 26 km de Ciudad Real. Para una pedanía o una finca, confirma el sitio en la solicitud y te decimos si entra en la ruta de ese día.",
      },
      {
        question: "¿El parque o el turismo cambia el servicio?",
        answer:
          "No hacemos un menú turístico distinto. El servicio es comida casera, colectividades o catering de la jornada que nos pidas, con presupuesto. El entorno de Cabañeros solo nos importa para calcular el acceso.",
      },
    ],
  },
  {
    slug: "almodovar-del-campo",
    name: "Almodóvar del Campo",
    enabled: true,
    kmFromCiudadReal: 37.6,
    kmFromPuertollano: 6.7,
    nearby: ["puertollano", "argamasilla-de-calatrava", "brazatortas", "cabezarados"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio", "colectividades", "eventos"],
    lead: "Almodóvar del Campo está a unos 7 km de Puertollano. Desde ahí repartimos comida casera y es una de las bases naturales para catering de monterías y de campo, además de menús para los centros del municipio.",
    context:
      "El pueblo vive junto a Puertollano, con castillo, dehesa y fincas alrededor. Un pedido de casa se parece al de un barrio de Puertollano por distancia. Un evento de caza, en cambio, se presupuesta con el paraje, porque el término es grande y el camino manda.",
    delivery:
      "La salida habitual es Puertollano, a menos de 10 km del casco. Ciudad Real queda a unos 38 km, también dentro de radio, pero no es el centro más corto. Indica si la entrega es en el pueblo o en finca.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Almodóvar del Campo?",
        answer:
          "Sí. El casco está a unos 7 km de Puertollano. Puedes pedir para casa o para un centro, y también un catering de montería si la finca entra en el radio.",
      },
      {
        question: "¿Toda la dehesa del término entra automáticamente?",
        answer:
          "No de forma automática. El casco sí. Una finca concreta se confirma con el paraje, porque algunas caen más lejos de lo que parece por carretera de tierra.",
      },
    ],
  },
  {
    slug: "argamasilla-de-calatrava",
    name: "Argamasilla de Calatrava",
    enabled: true,
    kmFromCiudadReal: 27,
    kmFromPuertollano: 17.3,
    nearby: ["puertollano", "almodovar-del-campo", "calzada-de-calatrava", "corral-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-monterias-eventos-caza"],
    lead: "Argamasilla de Calatrava queda entre los dos centros: unos 17 km de Puertollano y 27 de Ciudad Real. Hay comida a domicilio, colectividades y posibilidad de catering de campo. El presupuesto dice desde qué punto salimos.",
    context:
      "No hay que confundirla con Argamasilla de Alba, que está fuera de radio, hacia el este. Esta Argamasilla es la del Campo de Calatrava, al norte de Puertollano, en zona volcánica y de fincas. Sirve tanto para el menú de una casa como para una jornada de caza cercana.",
    delivery:
      "Por distancia, Puertollano es el centro más cercano. Si ese día la ruta encaja mejor desde Ciudad Real, lo verás en la propuesta. Tú no tienes que elegir el almacén: solo la dirección.",
    faqs: [
      {
        question: "¿Repartís en Argamasilla de Calatrava?",
        answer:
          "Sí. Está a unos 17 km de Puertollano y 27 de Ciudad Real. Es la Argamasilla del Campo de Calatrava, no la de Alba. Indica el tipo de servicio.",
      },
      {
        question: "¿Argamasilla de Alba también entra?",
        answer:
          "No. Argamasilla de Alba queda a más de 70 km de los dos centros y está fuera del radio de 60 km. Si el encargo es allí, no lo damos por cubierto.",
      },
    ],
  },
  {
    slug: "calzada-de-calatrava",
    name: "Calzada de Calatrava",
    enabled: true,
    kmFromCiudadReal: 34.1,
    kmFromPuertollano: 28.8,
    nearby: ["almagro", "argamasilla-de-calatrava", "granatula-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos", "catering-monterias-eventos-caza"],
    lead: "Calzada de Calatrava está a medio camino: unos 34 km de Ciudad Real y 29 de Puertollano. Repartimos comida casera y presupuestamos colectividades, celebraciones y jornadas de campo dentro del término.",
    context:
      "Es un pueblo del sur del Campo de Calatrava, con santuario y un término que ya mira hacia la sierra. El casco pide servicio de casa y de centros. Las afueras pueden pedir catering de campo. Las dos cosas se presupuestan por separado si no son el mismo encargo.",
    delivery:
      "Podemos salir de cualquiera de los dos centros; en la propuesta verás cuál encaja ese día. Si la entrega es en el santuario o en una finca, dilo al principio para calcular el acceso, no solo los kilómetros del pueblo.",
    faqs: [
      {
        question: "¿Hay comida a domicilio en Calzada de Calatrava?",
        answer:
          "Sí. El pueblo está dentro del radio de los dos centros, más cerca de Puertollano en línea recta. Sirve para casa, para un centro o para un evento.",
      },
      {
        question: "¿Servís celebraciones fuera del casco?",
        answer:
          "Si el sitio está en el término y dentro de 60 km, lo miramos. Necesitamos el lugar concreto y la fecha. El menú se propone en el presupuesto.",
      },
    ],
  },
  {
    slug: "corral-de-calatrava",
    name: "Corral de Calatrava",
    enabled: true,
    kmFromCiudadReal: 19.6,
    kmFromPuertollano: 19,
    nearby: ["poblete", "argamasilla-de-calatrava", "ciudad-real", "puertollano"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Corral de Calatrava está casi a la misma distancia de los dos centros, unos 20 km. Hay comida casera a domicilio y propuesta para centros y celebraciones pequeñas del pueblo.",
    context:
      "El pueblo queda en el pasillo entre Ciudad Real y Puertollano. Es un buen ejemplo de municipio que no 'pertenece' a una sola ruta. Para quien vive aquí, el resultado es el mismo: comida en la puerta y un presupuesto antes de confirmar.",
    delivery:
      "Elegimos la salida según el resto de entregas de ese día. Tú indicas la dirección de Corral. No hay un suplemento publicado por estar entre medias.",
    faqs: [
      {
        question: "¿Repartís comida en Corral de Calatrava?",
        answer:
          "Sí. Está a unos 20 km tanto de Ciudad Real como de Puertollano. Entra sin estar en el límite del radio.",
      },
      {
        question: "¿Tengo que decir desde qué ciudad quiero el reparto?",
        answer:
          "No. Con la dirección nos basta. La salida se decide al organizar la ruta y queda reflejada si afecta a la hora, dentro del presupuesto.",
      },
    ],
  },
  {
    slug: "villarrubia-de-los-ojos",
    name: "Villarrubia de los Ojos",
    enabled: true,
    kmFromCiudadReal: 38,
    kmFromPuertollano: 73.3,
    nearby: ["daimiel", "malagon"],
    serviceSlugs: ["comida-a-domicilio", "colectividades"],
    lead: "Villarrubia de los Ojos está a unos 38 km al norte de Ciudad Real, dentro del radio. Hay comida casera a domicilio y menús para colectividades. Puertollano queda demasiado lejos para ser la base de esta ruta.",
    context:
      "El pueblo está en los ojos del Guadiana, al norte de Daimiel. El servicio que encaja es el de casa y el de centros locales. No es zona de montería de nuestro radio sur. Si el encargo es una celebración en el pueblo, se puede ver como catering personalizado.",
    delivery:
      "La ruta sale de Ciudad Real, unos 38 km, con margen respecto a los 60. Indica si la entrega es en el casco. Las pedanías se confirman aparte.",
    faqs: [
      {
        question: "¿Llegáis a Villarrubia de los Ojos?",
        answer:
          "Sí, desde Ciudad Real, a unos 38 km. Puedes pedir comida a domicilio o un menú de colectividad. El presupuesto no está publicado.",
      },
      {
        question: "¿También desde Puertollano?",
        answer:
          "Puertollano está a unos 73 km, fuera de su radio de 60. El pueblo entra porque Ciudad Real sí lo cubre. La comida sale de la capital.",
      },
    ],
  },
  {
    slug: "manzanares",
    name: "Manzanares",
    enabled: true,
    kmFromCiudadReal: 48.1,
    kmFromPuertollano: 72.3,
    nearby: ["membrilla", "daimiel", "moral-de-calatrava"],
    serviceSlugs: ["colectividades", "comida-a-domicilio", "eventos"],
    lead: "Manzanares está a unos 48 km de Ciudad Real, dentro del radio, en el cruce de la A-4. Repartimos comida casera y preparamos menús para colegios, residencias y eventos del municipio. No salimos de Puertollano para esta ruta.",
    context:
      "Es una ciudad de paso y de servicios, con centros propios y celebraciones que no dependen de la capital. El encargo se trata como el de cualquier localidad cubierta: presupuesto, menú y reparto. Al estar más lejos que un pueblo del alfoz, conviene pedir con la fecha clara para encajar la ruta.",
    delivery:
      "Unos 48 km desde Ciudad Real. Entra, pero no es una entrega de barrio: el día se reserva en la propuesta. Si el evento es en el castillo o en un local concreto, indica el acceso. Membrilla, al lado, tiene su propia página y también entra.",
    faqs: [
      {
        question: "¿Hay comida a domicilio en Manzanares?",
        answer:
          "Sí. Manzanares está a unos 48 km de Ciudad Real, dentro de los 60. Sirve para casa, para un centro o para un evento. Puertollano queda a más de 70 km y no es la base.",
      },
      {
        question: "¿Hace falta más antelación que en Ciudad Real?",
        answer:
          "No publicamos dos plazos distintos, pero al estar a casi 50 km conviene decir la fecha en cuanto la sepas. Te confirmamos si ese día hay ruta.",
      },
    ],
  },
  {
    slug: "membrilla",
    name: "Membrilla",
    enabled: true,
    kmFromCiudadReal: 42,
    kmFromPuertollano: 65.6,
    nearby: ["manzanares", "la-solana", "moral-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Membrilla está a unos 42 km de Ciudad Real, junto a Manzanares. Hay comida casera a domicilio y propuesta de colectividades. El radio se cumple desde la capital, no desde Puertollano.",
    context:
      "Aunque se nombre muchas veces junto a Manzanares, el reparto es en Membrilla si la dirección es de Membrilla. No hace falta recoger el pedido en el pueblo de al lado. Los encargos típicos son de casa, de centro local o de una comida familiar.",
    delivery:
      "Salida desde Ciudad Real. Unos 42 km, dentro de zona. Si el mismo día hay entregas en Manzanares, se pueden coordinar, pero cada presupuesto lleva su dirección.",
    faqs: [
      {
        question: "¿Repartís en Membrilla o solo en Manzanares?",
        answer:
          "Repartimos en Membrilla. Está a unos 42 km de Ciudad Real, dentro del radio. La solicitud debe poner la dirección de Membrilla.",
      },
      {
        question: "¿Se puede pedir un menú para un centro de Membrilla?",
        answer:
          "Sí. Colegios, guarderías, residencias y centros de mayores entran en colectividades también aquí. El centro nos indica calendario y adaptaciones, y recibe un presupuesto.",
      },
    ],
  },
  {
    slug: "moral-de-calatrava",
    name: "Moral de Calatrava",
    enabled: true,
    kmFromCiudadReal: 34.9,
    kmFromPuertollano: 48.5,
    nearby: ["manzanares", "valdepenas", "bolanos-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos"],
    lead: "Moral de Calatrava está a unos 35 km de Ciudad Real, en la zona de viñedo hacia Valdepeñas. Hay comida a domicilio, colectividades y catering de celebración. El presupuesto se pide antes de elaborar.",
    context:
      "El pueblo está en el este del Campo de Calatrava, con bodegas y un casco que no depende de un polígono industrial. El servicio es de cocina casera para quien vive aquí o celebra aquí. Valdepeñas queda más lejos y tiene su propia página.",
    delivery:
      "La ruta sale de Ciudad Real. Puertollano está a unos 49 km, también dentro de radio, pero no es el camino más corto. Indica la calle o, si la comida es en una bodega o finca, el acceso.",
    faqs: [
      {
        question: "¿Hay reparto en Moral de Calatrava?",
        answer:
          "Sí. Unos 35 km desde Ciudad Real. Puedes pedir comida casera o un evento. No hay precios publicados.",
      },
      {
        question: "¿Cubrís una comida en una bodega del término?",
        answer:
          "Si está en Moral y dentro del radio, cuéntanos el sitio y la fecha. Lo confirmamos en el presupuesto, junto con el menú.",
      },
    ],
  },
  {
    slug: "valdepenas",
    name: "Valdepeñas",
    enabled: true,
    kmFromCiudadReal: 53.3,
    kmFromPuertollano: 63.2,
    edge: true,
    nearby: ["moral-de-calatrava", "santa-cruz-de-mudela", "manzanares"],
    serviceSlugs: ["colectividades", "comida-a-domicilio", "eventos"],
    lead: "Valdepeñas está a unos 53 km de Ciudad Real, dentro del radio y cerca del límite. Hay comida casera a domicilio, menús para colectividades y catering de eventos. Cada fecha se confirma porque la ruta es de las más largas.",
    context:
      "Es la ciudad del vino, al sureste, con colegios, residencias y celebraciones propias. Entra desde Ciudad Real. Desde Puertollano supera los 60 km, así que no se atiende como extensión de Puertollano. Conviene no dejar el pedido para el mismo día sin haberlo hablado.",
    delivery:
      "Unos 53 km desde la capital. Al pedir presupuesto indica el barrio y la fecha. Si ese día no hay ruta hasta Valdepeñas, te lo decimos antes de elaborar, no después. Santa Cruz de Mudela, más al sur, también está en zona y tiene página propia.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Valdepeñas?",
        answer:
          "Sí. Valdepeñas está a unos 53 km de Ciudad Real, dentro de los 60. Por la distancia, la fecha se confirma en el presupuesto. No hay precio en la web.",
      },
      {
        question: "¿Llegáis desde Puertollano a Valdepeñas?",
        answer:
          "En línea recta Puertollano queda a unos 63 km, fuera de su radio. El servicio entra por Ciudad Real. La propuesta sale de esa ruta.",
      },
    ],
  },
  {
    slug: "la-solana",
    name: "La Solana",
    enabled: true,
    kmFromCiudadReal: 59.9,
    kmFromPuertollano: 80.4,
    edge: true,
    nearby: ["membrilla", "manzanares"],
    serviceSlugs: ["comida-a-domicilio", "colectividades"],
    lead: "La Solana está en el límite: unos 60 km en línea recta desde Ciudad Real. El servicio se puede pedir, y se confirma encargo por encargo. Desde Puertollano no entra.",
    context:
      "Es un pueblo del este, conocido por el azafrán, ya en el borde del área. No lo tratamos igual que Miguelturra. Si la dirección exacta o el camino de acceso empujan el punto fuera de los 60 km, te lo diremos al presupuestar en lugar de asumir que sí.",
    delivery:
      "Solo se plantea la salida desde Ciudad Real. Pide con fecha y dirección completa. Hasta que la propuesta no diga que la ruta entra, no des el encargo por confirmado.",
    faqs: [
      {
        question: "¿Repartís en La Solana?",
        answer:
          "Está justo en el límite, a unos 60 km de Ciudad Real. Se puede solicitar y lo confirmamos con la dirección. No es una ruta urbana automática.",
      },
      {
        question: "¿Qué pasa si la casa queda un poco más lejos del núcleo?",
        answer:
          "Lo medimos con la dirección real. Si se pasa del radio de 60 km, no entra. Preferimos decirlo al pedir el presupuesto.",
      },
    ],
  },
  {
    slug: "santa-cruz-de-mudela",
    name: "Santa Cruz de Mudela",
    enabled: true,
    kmFromCiudadReal: 55.3,
    kmFromPuertollano: 55.8,
    edge: true,
    nearby: ["valdepenas", "viso-del-marques", "almuradiel"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "eventos"],
    lead: "Santa Cruz de Mudela está a unos 55 km de Ciudad Real y de Puertollano, dentro del radio y cerca del borde sur. Hay comida a domicilio, colectividades y eventos, siempre con la fecha confirmada en el presupuesto.",
    context:
      "El pueblo está en la A-4, antes de bajar hacia Despeñaperros. Tiene entidad propia, no es una pedanía de Valdepeñas. El servicio cubre casas y centros del municipio, y celebraciones si el aforo y el lugar están claros.",
    delivery:
      "Aunque los dos centros quedan a distancia parecida, la ruta se decide al presupuestar. Al ser zona límite, no prometemos el mismo día de aviso que en la capital. Indica barrio o carretera de acceso si no es el centro.",
    faqs: [
      {
        question: "¿Hay comida casera a domicilio en Santa Cruz de Mudela?",
        answer:
          "Sí, dentro del radio de 60 km. Está a unos 55 km de los dos centros. Indica la fecha, porque la ruta se confirma.",
      },
      {
        question: "¿Cubrís el polígono o solo el casco?",
        answer:
          "Si la dirección está en el municipio y sigue dentro del radio, la miramos. Escríbela en la solicitud para no usar solo el nombre del pueblo.",
      },
    ],
  },
  {
    slug: "viso-del-marques",
    name: "Viso del Marqués",
    enabled: true,
    kmFromCiudadReal: 60.6,
    kmFromPuertollano: 50.8,
    edge: true,
    nearby: ["santa-cruz-de-mudela", "almuradiel", "san-lorenzo-de-calatrava"],
    serviceSlugs: ["eventos", "catering-personalizado", "comida-a-domicilio", "catering-monterias-eventos-caza"],
    lead: "Viso del Marqués entra desde Puertollano, a unos 51 km. Desde Ciudad Real se pasa un poco de 60, así que la ruta de referencia es la del sur. Hay catering, comida a domicilio y posibilidad de jornada de campo, con confirmación por estar cerca del límite.",
    context:
      "El pueblo es conocido por el palacio del Marqués de Santa Cruz. Un evento en el municipio se presupuesta con el lugar concreto, sobre todo si el acceso es el del conjunto histórico y no una calle cualquiera. El día a día de una casa también se puede pedir.",
    delivery:
      "Salida prevista desde Puertollano. Unos 51 km, dentro de radio pero no holgado. La fecha y el punto de entrega se cierran en la propuesta. No uses Ciudad Real como base para este pueblo.",
    faqs: [
      {
        question: "¿Llegáis a Viso del Marqués?",
        answer:
          "Sí desde Puertollano, a unos 51 km. Desde Ciudad Real el núcleo queda justo por encima de 60 km. Confirma la dirección al escribir.",
      },
      {
        question: "¿Podéis hacer un catering en el pueblo?",
        answer:
          "Sí, si la fecha encaja en la ruta. Indica el espacio, los comensales y si hay alguna dieta. El importe va en el presupuesto, no en la web.",
      },
    ],
  },
  {
    slug: "almuradiel",
    name: "Almuradiel",
    enabled: true,
    kmFromCiudadReal: 65,
    kmFromPuertollano: 56.9,
    edge: true,
    nearby: ["viso-del-marques", "santa-cruz-de-mudela", "fuencaliente"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio", "eventos"],
    lead: "Almuradiel está a unos 57 km de Puertollano, en la bajada de Despeñaperros, dentro del radio y en el borde. Desde Ciudad Real no entra. Se puede pedir comida a domicilio o un catering de campo, y se confirma cada encargo.",
    context:
      "Es puerta de Despeñaperros, con monte y fincas, no un barrio de la capital. Tiene más sentido un catering de jornada o una comida en el pueblo que una ruta diaria improvisada. Por eso la fecha manda.",
    delivery:
      "Solo desde Puertollano. Si el punto está pasado el pueblo, hacia el puerto, comprueba con nosotros que sigue dentro de los 60 km. No damos por cubierta la vertiente jienense.",
    faqs: [
      {
        question: "¿Repartís en Almuradiel?",
        answer:
          "Sí, desde Puertollano, a unos 57 km, cerca del límite. Cada pedido se confirma. Ciudad Real queda a unos 65 km y no cubre este pueblo.",
      },
      {
        question: "¿Entráis en fincas hacia Despeñaperros?",
        answer:
          "Solo si el punto concreto sigue a 60 km o menos de Puertollano. Indica el paraje. Si ya es Jaén y se pasa el radio, no entra.",
      },
    ],
  },
  {
    slug: "fuencaliente",
    name: "Fuencaliente",
    enabled: true,
    kmFromCiudadReal: 72.3,
    kmFromPuertollano: 35.7,
    nearby: ["brazatortas", "san-lorenzo-de-calatrava", "puertollano"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio", "colectividades"],
    lead: "Fuencaliente está a unos 36 km al sur de Puertollano, en Sierra Madrona y el Valle de Alcudia. Hay comida a domicilio y catering de monterías. Desde Ciudad Real queda fuera de radio; la ruta es la de Puertollano.",
    context:
      "El pueblo y sus aldeas están en sierra. El casco se puede servir. Una aldea, una finca o un puesto de montería hay que nombrarlo, porque las distancias internas del término engañan. El menú de un centro del pueblo también se puede consultar.",
    delivery:
      "Salida desde Puertollano, unos 36 km de carretera de sierra, no de autovía llana. El horario se acuerda con más margen que en el casco de Puertollano. No salimos de Ciudad Real para este municipio.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Fuencaliente?",
        answer:
          "Sí, desde Puertollano, a unos 36 km. Puedes pedir para el pueblo o consultar una montería en el término. El presupuesto confirma el punto exacto.",
      },
      {
        question: "¿Las aldeas de Fuencaliente entran igual que el pueblo?",
        answer:
          "No siempre. El pueblo sí. Una aldea se confirma con su nombre. Si se sale del radio de 60 km desde Puertollano, no la cubrimos.",
      },
    ],
  },
  {
    slug: "brazatortas",
    name: "Brazatortas",
    enabled: true,
    kmFromCiudadReal: 52.5,
    kmFromPuertollano: 22.7,
    nearby: ["almodovar-del-campo", "cabezarados", "fuencaliente", "puertollano"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio", "colectividades"],
    lead: "Brazatortas está a unos 23 km de Puertollano, en el Valle de Alcudia. Repartimos comida casera y es zona habitual de consulta para monterías y comidas de campo. También se puede pedir menú de colectividad.",
    context:
      "El valle es de dehesa y fincas. El pueblo tiene su servicio de casa y de centros. La montería se habla con la finca, no solo con el nombre de Brazatortas. Ciudad Real queda a unos 53 km, todavía dentro de radio, pero la salida corta es Puertollano.",
    delivery:
      "Ruta desde Puertollano. Para el casco, la distancia es corta. Para una finca del valle, envía el paraje y el número de comensales. El desayuno campero, el almuerzo y la comida se pueden pedir juntos o por separado.",
    faqs: [
      {
        question: "¿Llegáis a Brazatortas?",
        answer:
          "Sí. Está a unos 23 km de Puertollano. Hay comida a domicilio y catering de monterías dentro del radio.",
      },
      {
        question: "¿El Valle de Alcudia entero está cubierto?",
        answer:
          "No entero por el nombre. Cubrimos lo que quede a 60 km o menos de Puertollano o de Ciudad Real. Cada finca se confirma. Almadén, por ejemplo, ya se pasa.",
      },
    ],
  },
  {
    slug: "cabezarados",
    name: "Cabezarados",
    enabled: true,
    kmFromCiudadReal: 49.6,
    kmFromPuertollano: 17.2,
    nearby: ["brazatortas", "almodovar-del-campo", "puertollano"],
    serviceSlugs: ["comida-a-domicilio", "catering-monterias-eventos-caza", "colectividades"],
    lead: "Cabezarados está a unos 17 km al oeste de Puertollano. Hay comida casera a domicilio para el pueblo y catering de campo cuando la finca cae dentro del radio. El presupuesto se pide como en el resto de la zona.",
    context:
      "Es un municipio pequeño entre Puertollano y el valle. No tiene el volumen de una ciudad, y el servicio se adapta a eso: encargos concretos, no una ruta cada hora. Si el colegio o el centro de mayores necesita menú, se prepara propuesta de colectividad igual.",
    delivery:
      "Salida desde Puertollano, distancia corta hasta el casco. Las afueras se confirman con el paraje. Ciudad Real está a unos 50 km, dentro de radio, pero no es la base habitual.",
    faqs: [
      {
        question: "¿Hay reparto en Cabezarados?",
        answer:
          "Sí. El pueblo está a unos 17 km de Puertollano. Pide comida a domicilio o un catering indicando personas, día y lugar.",
      },
      {
        question: "¿Atiendéis un encargo pequeño de pocas personas?",
        answer:
          "Se puede consultar. No publicamos un mínimo de comensales. Con el número aproximado te decimos si encaja en la ruta de ese día.",
      },
    ],
  },
  {
    slug: "mestanza",
    name: "Mestanza",
    enabled: true,
    kmFromCiudadReal: 46.9,
    kmFromPuertollano: 12.3,
    nearby: ["puertollano", "hinojosas-de-calatrava", "solana-del-pino"],
    serviceSlugs: ["comida-a-domicilio", "catering-monterias-eventos-caza", "colectividades"],
    lead: "Mestanza está a unos 12 km de Puertollano, hacia el Valle de Alcudia. Repartimos comida casera en el pueblo y presupuestamos jornadas de campo en fincas que sigan dentro del radio.",
    context:
      "Por cercanía a Puertollano, una casa de Mestanza se atiende casi como una entrega del entorno de la ciudad. El término, en cambio, ya es valle: si la comida es para una montería, hace falta el puesto o la finca, no solo el municipio.",
    delivery:
      "Base en Puertollano. Distancia corta al casco. Indica pedanía si no es el núcleo principal. No hace falta pasar por Ciudad Real.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Mestanza?",
        answer:
          "Sí. Está a unos 12 km de Puertollano. Puedes pedir para casa o consultar un catering de caza en el término, si la finca entra en los 60 km.",
      },
      {
        question: "¿Las pedanías se incluyen con el nombre de Mestanza?",
        answer:
          "Escribe la pedanía. Varias están cerca y entran, pero el presupuesto usa el punto real de entrega.",
      },
    ],
  },
  {
    slug: "hinojosas-de-calatrava",
    name: "Hinojosas de Calatrava",
    enabled: true,
    kmFromCiudadReal: 45.5,
    kmFromPuertollano: 8.9,
    nearby: ["puertollano", "cabezarrubias-del-puerto", "mestanza"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Hinojosas de Calatrava está a unos 9 km de Puertollano. Hay comida casera a domicilio y se puede consultar un menú de colectividad o una comida de celebración en el pueblo.",
    context:
      "Es un municipio pequeño pegado a Puertollano, distinto de una finca del valle. El servicio habitual es el de casa. Si surge un evento, se presupuesta con el aforo, sin paquete publicado.",
    delivery:
      "Ruta corta desde Puertollano. Indica la calle. No es zona límite.",
    faqs: [
      {
        question: "¿Repartís en Hinojosas de Calatrava?",
        answer:
          "Sí. Está a unos 9 km de Puertollano, dentro de la zona sin estar en el borde. Puedes escribir por teléfono, WhatsApp o formulario.",
      },
      {
        question: "¿Hace falta un pedido grande para que lleguéis?",
        answer:
          "No hay un mínimo publicado. Dinos cuántas personas sois y te confirmamos si ese día la ruta pasa por el pueblo.",
      },
    ],
  },
  {
    slug: "cabezarrubias-del-puerto",
    name: "Cabezarrubias del Puerto",
    enabled: true,
    kmFromCiudadReal: 46.9,
    kmFromPuertollano: 10.5,
    nearby: ["hinojosas-de-calatrava", "puertollano", "almodovar-del-campo"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "Cabezarrubias del Puerto está a unos 11 km de Puertollano. Repartimos comida casera a domicilio y podemos presupuestar una celebración o un menú de centro en el municipio.",
    context:
      "El pueblo está al sur de Puertollano, en la subida hacia la sierra, pero la distancia al casco es corta. No lo confundas con un servicio de alta montaña: el núcleo entra con claridad. Las afueras se confirman.",
    delivery:
      "Salida desde Puertollano. Entrega en el pueblo en la ruta del entorno sur. Si la casa está en diseminado, añade una referencia.",
    faqs: [
      {
        question: "¿Hay comida a domicilio en Cabezarrubias del Puerto?",
        answer:
          "Sí. Unos 11 km desde Puertollano. El presupuesto incluye el menú y la entrega; en la web no verás precios.",
      },
      {
        question: "¿También colectividades?",
        answer:
          "Si en el municipio hay un colegio, una guardería, una residencia o un centro de mayores que quiera menú, preparamos la propuesta. La adaptación se habla con el centro.",
      },
    ],
  },
  {
    slug: "san-lorenzo-de-calatrava",
    name: "San Lorenzo de Calatrava",
    enabled: true,
    kmFromCiudadReal: 57.4,
    kmFromPuertollano: 33.9,
    edge: true,
    nearby: ["fuencaliente", "calzada-de-calatrava", "viso-del-marques"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio"],
    lead: "San Lorenzo de Calatrava está a unos 34 km de Puertollano y a unos 57 de Ciudad Real, dentro del radio y ya cerca del límite por el este de la sierra. Se pide comida a domicilio o catering de campo, y se confirma la fecha.",
    context:
      "Es un municipio de sierra entre Calzada, Fuencaliente y el Viso. El casco entra. Una montería en su término se mira con el paraje, porque el monte alarga los accesos. No es una ruta de todos los días como la de Miguelturra.",
    delivery:
      "Base en Puertollano. Distancia media y carretera de sierra. Deja la dirección y el día en la solicitud para saber si esa semana hay paso.",
    faqs: [
      {
        question: "¿Repartís en San Lorenzo de Calatrava?",
        answer:
          "Sí, desde Puertollano, a unos 34 km. Está dentro de los 60, aunque no es la ruta más corta. Confirma fecha y lugar al pedir presupuesto.",
      },
      {
        question: "¿Sirve para una montería en el municipio?",
        answer:
          "Se puede presupuestar desayuno campero, almuerzo y comida si la finca sigue en el radio. Envía el paraje y los comensales.",
      },
    ],
  },
  {
    slug: "almaden",
    name: "Almadén",
    enabled: false,
    kmFromCiudadReal: 81.5,
    kmFromPuertollano: 63.5,
    exclusionReason:
      "Unos 63,5 km en línea recta desde Puertollano y 81,5 desde Ciudad Real. Fuera del radio de 60 km.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "tomelloso",
    name: "Tomelloso",
    enabled: false,
    kmFromCiudadReal: 80.6,
    kmFromPuertollano: 107.5,
    exclusionReason: "Unos 81 km desde Ciudad Real. Fuera de radio.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "alcazar-de-san-juan",
    name: "Alcázar de San Juan",
    enabled: false,
    kmFromCiudadReal: 76.7,
    kmFromPuertollano: 110.2,
    exclusionReason: "Unos 77 km desde Ciudad Real. Fuera de radio.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "herencia",
    name: "Herencia",
    enabled: false,
    kmFromCiudadReal: 65,
    kmFromPuertollano: 99.6,
    exclusionReason: "Unos 65 km desde Ciudad Real. Fuera de radio.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "campo-de-criptana",
    name: "Campo de Criptana",
    enabled: false,
    kmFromCiudadReal: 83.4,
    kmFromPuertollano: 116.4,
    exclusionReason: "Unos 83 km desde Ciudad Real. Fuera de radio.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "villanueva-de-los-infantes",
    name: "Villanueva de los Infantes",
    enabled: false,
    kmFromCiudadReal: 84.3,
    kmFromPuertollano: 95.2,
    exclusionReason: "Unos 84 km desde Ciudad Real. Fuera de radio.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
  {
    slug: "argamasilla-de-alba",
    name: "Argamasilla de Alba",
    enabled: false,
    kmFromCiudadReal: 74.1,
    kmFromPuertollano: 100.8,
    exclusionReason:
      "Unos 74 km desde Ciudad Real. No confundir con Argamasilla de Calatrava, que sí entra.",
    nearby: [],
    serviceSlugs: [],
    lead: "",
    context: "",
    delivery: "",
    faqs: [],
  },
];

export const enabledLocalities = localities.filter((locality) => locality.enabled);

export function getLocality(slug: string) {
  return enabledLocalities.find((locality) => locality.slug === slug);
}

export function nearestHub(locality: Locality) {
  return locality.kmFromCiudadReal <= locality.kmFromPuertollano
    ? "Ciudad Real"
    : "Puertollano";
}

export function nearestKm(locality: Locality) {
  return Math.min(locality.kmFromCiudadReal, locality.kmFromPuertollano);
}
