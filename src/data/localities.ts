/**
 * Localidades de reparto. Edita este archivo para añadir o quitar localidades.
 * `enabled: true` genera su página en /zonas-de-reparto/.
 * `enabled: false` = fuera de zona: no tiene página; el buscador de la home dice que queda fuera.
 * No se publican distancias en la web.
 */

export type Locality = {
  slug: string;
  name: string;
  /** Otras formas de escribirla en el buscador de la home. */
  aliases?: string[];
  enabled: boolean;
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
    nearby: ["miguelturra", "poblete", "carrion-de-calatrava", "pozuelo-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "En Ciudad Real repartimos comida casera a domicilio y servimos a colectividades, celebraciones y catering. Es uno de los dos centros del servicio, junto con Puertollano. El presupuesto se pide por teléfono, WhatsApp o formulario.",
    context:
      "La capital concentra colegios, guarderías, residencias, centros de mayores y casas particulares en distintos barrios, además de la universidad y los servicios públicos. Por eso aquí tienen peso tanto el menú de casa como el de colectividades. Si el encargo es una celebración en un domicilio o en un local de la ciudad, se trata como catering personalizado para eventos, no como un pedido genérico.",
    delivery:
      "El reparto urbano se organiza por zonas de la ciudad. Al pedir presupuesto indica el barrio o la dirección aproximada, el número de comensales y el día. No publicamos una hora fija de paso: se acuerda en la propuesta. Desde Ciudad Real también salen rutas hacia los pueblos y pedanías de alrededor.",
    faqs: [
      {
        question: "¿Hacéis comida casera a domicilio en Ciudad Real?",
        answer:
          "Sí. Ciudad Real es centro de reparto. Llevamos comida casera a casas y también a colegios, guarderías, residencias y centros de mayores de la ciudad. El menú se concreta en un presupuesto.",
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
    nearby: ["almodovar-del-campo", "argamasilla-de-calatrava", "corral-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-monterias-eventos-caza", "catering-personalizado"],
    lead: "En Puertollano hay comida casera a domicilio y servicio para colectividades, eventos y monterías de la comarca. Es el segundo centro de reparto, junto con Ciudad Real. Se pide presupuesto.",
    context:
      "Puertollano tiene vida de barrio, centros educativos, residencias y un entorno de campo y dehesa hacia Almodóvar, el Valle de Alcudia y la sierra. Eso cambia el tipo de encargos respecto a la capital: además de la casa y el comedor, aquí pesan las comidas de finca y las monterías. El menú sigue siendo casero y, cuando hace falta, adaptado.",
    delivery:
      "El reparto dentro de Puertollano se acuerda por barrios. Para una finca o un punto de encuentro a las afueras, indica el paraje al presupuestar, sobre todo si el camino no es calle urbana. Desde aquí se llega a los pueblos de alrededor.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Puertollano?",
        answer:
          "Sí. Puertollano es centro de reparto, no una extensión ocasional de Ciudad Real. Puedes pedir comida casera para casa, un menú de colectividad o un catering. La propuesta sale por teléfono, WhatsApp o el formulario.",
      },
      {
        question: "¿Desde Puertollano llegáis a las fincas de alrededor?",
        answer:
          "Si la finca está en nuestra zona de reparto, se estudia. Hace falta el nombre del paraje y cómo se accede. Las monterías se presupuestan con desayuno campero, almuerzo y comida si los necesitas.",
      },
    ],
  },
  {
    slug: "miguelturra",
    name: "Miguelturra",
    enabled: true,
    nearby: ["ciudad-real", "pozuelo-de-calatrava", "poblete", "carrion-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Miguelturra tiene comida casera a domicilio, en la misma zona urbana que Ciudad Real. También preparamos propuestas para sus colegios, guarderías y centros de mayores. El presupuesto es a medida.",
    context:
      "Miguelturra está pegada a la capital. Muchas familias viven en un municipio y trabajan o estudian en el otro, así que el reparto no se trata como un desplazamiento largo. Encajan la comida de casa, el comedor de un centro local y un catering pequeño de celebración.",
    delivery:
      "El reparto se hace en la misma organización que el de Ciudad Real. Indica la calle o la urbanización. No hay un suplemento publicado: si hay algún ajuste por la dirección, va dentro del presupuesto, no como sorpresa en la web.",
    faqs: [
      {
        question: "¿Repartís comida a domicilio en Miguelturra?",
        answer:
          "Sí. Miguelturra está pegada a Ciudad Real y entra de lleno en la zona. Puedes pedir para casa o para un centro. Escríbenos con el número de comensales y el día y te pasamos el presupuesto.",
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
    nearby: ["ciudad-real", "miguelturra", "corral-de-calatrava", "almagro"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "En Poblete, al sur de Ciudad Real, llevamos comida casera a domicilio y catering para celebraciones en casa. Si hay un centro que necesite menú, también preparamos propuesta de colectividades.",
    context:
      "Poblete es la salida sur de la capital, con vivienda y un casco corto. Los encargos habituales son de casa y de reunión familiar. Queda también bien situado si el evento está entre la capital y el camino de Almagro o de Puertollano.",
    delivery:
      "La entrega se concreta en el pueblo. Si la dirección es una parcela o una casa a las afueras del casco, indícalo al pedir presupuesto para dejar el punto de descarga claro. El plazo no está publicado: se acuerda en la propuesta.",
    faqs: [
      {
        question: "¿Llegáis con comida a domicilio a Poblete?",
        answer:
          "Sí. Poblete está junto a Ciudad Real y entra de lleno en la zona. Indica personas y día al escribirnos.",
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
    nearby: ["ciudad-real", "torralba-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Carrión de Calatrava, junto al Guadiana, tiene comida casera a domicilio y propuesta de menús para sus centros. El servicio se pide por presupuesto.",
    context:
      "Es un pueblo de vega, muy cerca de la capital, con vida de colectividad local más que de gran evento. Encaja la comida de diario en casa y el menú de un colegio, una guardería o un centro de mayores si el centro lo solicita.",
    delivery:
      "El reparto entra en las rutas cortas de Ciudad Real. Basta con la dirección del casco. No tratamos Carrión como un extra de larga distancia.",
    faqs: [
      {
        question: "¿Hay comida a domicilio en Carrión de Calatrava?",
        answer:
          "Sí. Entra en la zona de reparto de Ciudad Real. Puedes pedir comida casera para casa o consultar un menú de colectividad.",
      },
      {
        question: "¿También llegáis a viviendas junto al río, fuera del centro?",
        answer:
          "Si la casa está en el término, indícanos la dirección o el paraje. Lo confirmamos al preparar la propuesta para no dejar la entrega en un punto equivocado.",
      },
    ],
  },
  {
    slug: "pozuelo-de-calatrava",
    name: "Pozuelo de Calatrava",
    enabled: true,
    nearby: ["ciudad-real", "almagro", "miguelturra", "bolanos-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Pozuelo de Calatrava está en el camino de Ciudad Real a Almagro. Repartimos comida casera a domicilio y podemos presupuestar colectividades o una celebración en el pueblo.",
    context:
      "El pueblo queda entre la capital y Almagro, así que un mismo desplazamiento puede encajar encargos de casa y algún evento pequeño. No es un núcleo industrial: el servicio se plantea a escala de municipio, con menús caseros y adaptación si nos la pides.",
    delivery:
      "La entrega es en el casco, salvo que indiques otra dirección del término. Al estar tan cerca de Ciudad Real, se organiza con las rutas del sur de la capital.",
    faqs: [
      {
        question: "¿Repartís en Pozuelo de Calatrava?",
        answer:
          "Sí. Pozuelo está dentro de la zona. Pide información con la localidad, las personas y el tipo de servicio.",
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
    nearby: ["carrion-de-calatrava", "daimiel", "ciudad-real"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "En Torralba de Calatrava, al este de Ciudad Real, hay comida casera a domicilio y menús para colectividades. Cada encargo se presupuesta.",
    context:
      "Torralba está en la llanura entre la capital y Daimiel. Los encargos que más encajan son los de casa y los de un centro local. Una celebración familiar se puede ver como catering personalizado si el número de comensales lo pide.",
    delivery:
      "El reparto sale desde Ciudad Real. Indica si la entrega es en el pueblo o en una casa de labor del término, porque el acceso no es el mismo. El día se cierra en la propuesta.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Torralba de Calatrava?",
        answer:
          "Sí. Torralba está dentro de la zona. Escríbenos o llama y te preparamos el presupuesto según el menú y las personas.",
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
    nearby: ["bolanos-de-calatrava", "pozuelo-de-calatrava"],
    serviceSlugs: ["catering-personalizado", "comida-a-domicilio", "colectividades"],
    lead: "En Almagro repartimos comida casera a domicilio y catering para celebraciones. También hay propuesta para colegios, guarderías y centros de mayores.",
    context:
      "Almagro es villa de teatro, con el Corral de Comedias y una plaza mayor que atrae visitas y celebraciones. Además del día a día del pueblo, aquí tienen sentido los encargos de evento: una comida de grupo, una celebración o un menú para quien recibe en casa. El servicio sigue siendo cocina casera, no un montaje de banquete.",
    delivery:
      "La entrega en el casco se acuerda al presupuestar. Si el evento está en un espacio del centro y hay horario de montaje, indícalo: no es lo mismo dejar la comida en un domicilio que coordinarla con una celebración. El centro de salida habitual es Ciudad Real.",
    faqs: [
      {
        question: "¿Hay catering para eventos en Almagro?",
        answer:
          "Sí. Almagro entra en la zona. Podemos presupuestar un catering personalizado para el evento, o comida a domicilio. Dinos fecha, lugar y comensales.",
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
    nearby: ["almagro", "pozuelo-de-calatrava", "daimiel"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Bolaños de Calatrava, junto a Almagro, tiene comida a domicilio, menús de colectividades y catering de celebración. Se pide presupuesto.",
    context:
      "Es uno de los núcleos con más población del Campo de Calatrava, al lado de Almagro pero con su propio día a día: colegios, casas y celebraciones de pueblo. El servicio no se limita al visitante de Almagro. Quien vive en Bolaños puede pedir para casa o para un centro.",
    delivery:
      "El reparto sale desde Ciudad Real. Indica el barrio o la calle. Si el evento es el mismo día que otro en Almagro, lo coordinamos en la propuesta; no hace falta que lo organices tú.",
    faqs: [
      {
        question: "¿Repartís comida casera en Bolaños de Calatrava?",
        answer:
          "Sí. Bolaños está dentro de la zona. Puedes pedir comida a domicilio o un menú para un centro del municipio.",
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
    nearby: ["torralba-de-calatrava"],
    serviceSlugs: ["colectividades", "comida-a-domicilio", "catering-personalizado"],
    lead: "En Daimiel hacemos comida casera a domicilio y menús para colegios, guarderías, residencias y centros de mayores. El reparto se plantea desde Ciudad Real.",
    context:
      "Daimiel es puerta de las Tablas y un pueblo de servicios, con centros educativos y de mayores propios. No dependéis de ir a Ciudad Real a por la comida: el reparto llega al municipio. Las visitas al parque no cambian el servicio, que está pensado para quien vive o trabaja aquí.",
    delivery:
      "La ruta sale de Ciudad Real. Indica si la entrega es en el casco o en una pedanía.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Daimiel?",
        answer:
          "Sí. Daimiel entra en la zona. Hay comida casera para casa y propuesta de colectividades. Indica el número de comensales y el día.",
      },
      {
        question: "¿Llegáis a las pedanías de Daimiel?",
        answer:
          "Si la pedanía está en el término, la estudiamos. Escríbela en la solicitud. No damos por hecha una entrega en diseminado sin confirmar el acceso.",
      },
    ],
  },
  {
    slug: "almodovar-del-campo",
    name: "Almodóvar del Campo",
    enabled: true,
    nearby: ["puertollano", "argamasilla-de-calatrava", "corral-de-calatrava"],
    serviceSlugs: ["catering-monterias-eventos-caza", "comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Almodóvar del Campo está junto a Puertollano. Desde ahí repartimos comida casera y es una de las bases naturales para catering de monterías y de campo, además de menús para los centros del municipio.",
    context:
      "El pueblo vive junto a Puertollano, con castillo, dehesa y fincas alrededor. Un pedido de casa se parece al de un barrio de Puertollano por distancia. Un evento de caza, en cambio, se presupuesta con el paraje, porque el término es grande y el camino manda.",
    delivery:
      "La salida habitual es Puertollano. Indica si la entrega es en el pueblo o en finca.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en Almodóvar del Campo?",
        answer:
          "Sí. Almodóvar entra en la zona de Puertollano. Puedes pedir para casa o para un centro, y también un catering de montería si la finca entra en la zona.",
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
    nearby: ["puertollano", "almodovar-del-campo", "corral-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-monterias-eventos-caza"],
    lead: "Argamasilla de Calatrava queda entre los dos centros, más cerca de Puertollano. Hay comida a domicilio, colectividades y posibilidad de catering de campo. El presupuesto dice desde qué punto salimos.",
    context:
      "No hay que confundirla con Argamasilla de Alba, que queda fuera de nuestra zona, hacia el este. Esta Argamasilla es la del Campo de Calatrava, al norte de Puertollano, en zona volcánica y de fincas. Sirve tanto para el menú de una casa como para una jornada de caza cercana.",
    delivery:
      "Por distancia, Puertollano es el centro más cercano. Si ese día la ruta encaja mejor desde Ciudad Real, lo verás en la propuesta. Tú no tienes que elegir el almacén: solo la dirección.",
    faqs: [
      {
        question: "¿Repartís en Argamasilla de Calatrava?",
        answer:
          "Sí. Es la Argamasilla del Campo de Calatrava, no la de Alba. Indica el tipo de servicio.",
      },
      {
        question: "¿Argamasilla de Alba también entra?",
        answer:
          "No. Argamasilla de Alba queda fuera de nuestra zona de reparto. Si el encargo es allí, no lo damos por cubierto.",
      },
    ],
  },
  {
    slug: "corral-de-calatrava",
    name: "Corral de Calatrava",
    enabled: true,
    nearby: ["poblete", "argamasilla-de-calatrava", "ciudad-real", "puertollano"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "Corral de Calatrava está casi a la misma distancia de Ciudad Real que de Puertollano. Hay comida casera a domicilio y propuesta para centros y celebraciones pequeñas del pueblo.",
    context:
      "El pueblo queda en el pasillo entre Ciudad Real y Puertollano. Es un buen ejemplo de municipio que no 'pertenece' a una sola ruta. Para quien vive aquí, el resultado es el mismo: comida en la puerta y un presupuesto antes de confirmar.",
    delivery:
      "Elegimos la salida según el resto de entregas de ese día. Tú indicas la dirección de Corral. No hay un suplemento publicado por estar entre medias.",
    faqs: [
      {
        question: "¿Repartís comida en Corral de Calatrava?",
        answer:
          "Sí. Está entre Ciudad Real y Puertollano y entra en la zona.",
      },
      {
        question: "¿Tengo que decir desde qué ciudad quiero el reparto?",
        answer:
          "No. Con la dirección nos basta. La salida se decide al organizar la ruta y queda reflejada si afecta a la hora, dentro del presupuesto.",
      },
    ],
  },
  {
    slug: "las-casas",
    name: "Las Casas",
    enabled: true,
    nearby: ["ciudad-real", "la-poblachuela", "miguelturra"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "En Las Casas, pedanía de Ciudad Real, llevamos comida casera a domicilio y preparamos catering para celebraciones en casa. El presupuesto se pide por teléfono, WhatsApp o formulario.",
    context:
      "Las Casas forma parte del término de Ciudad Real y su reparto va con las rutas de la capital. Los encargos habituales son de casa: el menú de diario para una persona mayor o para la familia, y alguna comida de reunión o de fiestas.",
    delivery:
      "La entrega se hace en el domicilio. Si es una parcela o una casa fuera del núcleo, indícalo al pedir presupuesto para dejar claro el punto de entrega. El día y la franja se acuerdan en la propuesta.",
    faqs: [
      {
        question: "¿Llegáis con comida a domicilio a Las Casas?",
        answer:
          "Sí. Las Casas es pedanía de Ciudad Real y entra en el reparto de la capital. Dinos para cuántas personas es y qué días lo necesitas.",
      },
      {
        question: "¿Podéis preparar una comida familiar en Las Casas?",
        answer:
          "Sí, como catering personalizado o como comida a domicilio, según el tamaño de la reunión. Cuéntanos cuántos vais a ser y si hay alguna dieta. La propuesta sale por escrito antes de confirmar.",
      },
    ],
  },
  {
    slug: "la-poblachuela",
    name: "La Poblachuela",
    enabled: true,
    nearby: ["ciudad-real", "las-casas", "miguelturra"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "colectividades"],
    lead: "En La Poblachuela, pedanía de Ciudad Real, repartimos comida casera a domicilio y catering para celebraciones en casa o en el jardín. Se pide presupuesto sin compromiso.",
    context:
      "La Poblachuela es una zona sobre todo de viviendas unifamiliares, con muchas familias que trabajan o estudian en la capital. Encajan bien el menú de diario a domicilio y la comida para una reunión en casa.",
    delivery:
      "El reparto va con las rutas de Ciudad Real. Indica la calle o la urbanización al pedir presupuesto, porque muchas casas no están en el núcleo. El día y la franja se acuerdan en la propuesta.",
    faqs: [
      {
        question: "¿Hacéis comida a domicilio en La Poblachuela?",
        answer:
          "Sí. La Poblachuela es pedanía de Ciudad Real y entra en el reparto. Puedes pedir comida casera para casa o un catering para una celebración.",
      },
      {
        question: "¿Llegáis a las urbanizaciones de La Poblachuela?",
        answer:
          "Sí. Al pedir presupuesto indica la dirección exacta o la urbanización. Así dejamos claro el punto de entrega desde el principio.",
      },
    ],
  },
  {
    slug: "valenzuela-de-calatrava",
    name: "Valenzuela de Calatrava",
    enabled: true,
    nearby: ["almagro", "pozuelo-de-calatrava", "ciudad-real"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "En Valenzuela de Calatrava llevamos comida casera a domicilio y preparamos propuestas para centros y celebraciones del pueblo. Cada encargo se presupuesta.",
    context:
      "Valenzuela es un pueblo pequeño del Campo de Calatrava, en el entorno de Almagro. Aquí pesa sobre todo la comida de diario para personas mayores y familias, con el menú adaptado cuando hace falta, y alguna celebración en casa.",
    delivery:
      "El reparto sale de Ciudad Real. Indica la calle al pedir presupuesto. El día y la franja se acuerdan en la propuesta.",
    faqs: [
      {
        question: "¿Repartís comida a domicilio en Valenzuela de Calatrava?",
        answer:
          "Sí. Valenzuela entra en la zona de reparto. Dinos para cuántas personas es, qué días y si hay alguna dieta, y te pasamos el presupuesto.",
      },
      {
        question: "¿Podéis llevar el menú a una persona mayor que vive sola?",
        answer:
          "Sí. Es uno de los encargos más habituales. El menú se adapta a lo que necesite (fácil de masticar, sin sal, para diabéticos…) con el respaldo de un nutricionista.",
      },
    ],
  },
  {
    slug: "ballesteros-de-calatrava",
    name: "Ballesteros de Calatrava",
    enabled: true,
    nearby: ["poblete", "caracuel-de-calatrava", "corral-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "colectividades", "catering-personalizado"],
    lead: "En Ballesteros de Calatrava repartimos comida casera a domicilio y preparamos menús para centros y celebraciones. El presupuesto se pide por teléfono, WhatsApp o formulario.",
    context:
      "Ballesteros es un pueblo pequeño del Campo de Calatrava, entre Ciudad Real y Puertollano. Los encargos habituales son la comida de diario para casa, sobre todo de personas mayores, y alguna reunión familiar.",
    delivery:
      "La ruta se organiza desde Ciudad Real o desde Puertollano, según el día. Indica la calle al pedir presupuesto. El día y la franja se acuerdan en la propuesta.",
    faqs: [
      {
        question: "¿Llegáis con comida a domicilio a Ballesteros de Calatrava?",
        answer:
          "Sí. Ballesteros entra en la zona de reparto. Indica personas, días y si hay alguna dieta al escribirnos.",
      },
      {
        question: "¿Hay un pedido mínimo?",
        answer:
          "No publicamos un mínimo. Cuéntanos qué necesitas y te decimos en el presupuesto cómo organizamos el reparto.",
      },
    ],
  },
  {
    slug: "caracuel-de-calatrava",
    name: "Caracuel de Calatrava",
    aliases: ["Caracuel"],
    enabled: true,
    nearby: ["corral-de-calatrava", "ballesteros-de-calatrava", "puertollano"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "catering-monterias-eventos-caza"],
    lead: "En Caracuel de Calatrava llevamos comida casera a domicilio y preparamos catering para celebraciones y jornadas de campo. Cada encargo se presupuesta.",
    context:
      "Caracuel es un pueblo pequeño del Campo de Calatrava, entre Ciudad Real y Puertollano, rodeado de campo y fincas. Además de la comida de diario para casa, encajan las comidas de finca y de caza.",
    delivery:
      "La ruta sale de Puertollano o de Ciudad Real, según el día. Para una finca, indica el paraje y cómo se accede al pedir presupuesto.",
    faqs: [
      {
        question: "¿Repartís comida a domicilio en Caracuel de Calatrava?",
        answer:
          "Sí. Caracuel entra en la zona de reparto. Dinos para cuántas personas es y qué días lo necesitas.",
      },
      {
        question: "¿Hacéis catering para una montería en una finca de Caracuel?",
        answer:
          "Sí, si la finca está en nuestra zona. Indica el paraje, la fecha y los comensales. Preparamos desayuno campero, almuerzo y comida si los necesitas.",
      },
    ],
  },
  {
    slug: "villar-de-puertollano",
    name: "Villar de Puertollano",
    aliases: ["El Villar", "Villar"],
    enabled: true,
    nearby: ["puertollano", "almodovar-del-campo", "argamasilla-de-calatrava"],
    serviceSlugs: ["comida-a-domicilio", "catering-personalizado", "catering-monterias-eventos-caza"],
    lead: "En el Villar de Puertollano llevamos comida casera a domicilio y preparamos catering para celebraciones y comidas de campo. El presupuesto se pide sin compromiso.",
    context:
      "El Villar pertenece al término de Puertollano y su reparto va con las rutas de la ciudad. Los encargos habituales son la comida de diario para casa y las reuniones familiares o de campo.",
    delivery:
      "La ruta sale de Puertollano. Indica la calle o, si es una casa de campo, cómo se llega. El día y la franja se acuerdan en la propuesta.",
    faqs: [
      {
        question: "¿Llegáis con comida a domicilio al Villar de Puertollano?",
        answer:
          "Sí. El Villar entra en el reparto de Puertollano. Dinos para cuántas personas es, qué días y si hay alguna dieta.",
      },
      {
        question: "¿Podéis preparar una comida de campo en el Villar?",
        answer:
          "Sí, como catering personalizado. Indica el lugar, la fecha y los comensales, y te enviamos la propuesta por escrito.",
      },
    ],
  },
  { slug: "porzuna", name: "Porzuna", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "calzada-de-calatrava", name: "Calzada de Calatrava", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "membrilla", name: "Membrilla", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "manzanares", name: "Manzanares", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "malagon", name: "Malagón", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "moral-de-calatrava", name: "Moral de Calatrava", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "piedrabuena", name: "Piedrabuena", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "villarrubia-de-los-ojos", name: "Villarrubia de los Ojos", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "almaden", name: "Almadén", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "tomelloso", name: "Tomelloso", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "alcazar-de-san-juan", name: "Alcázar de San Juan", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "herencia", name: "Herencia", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "campo-de-criptana", name: "Campo de Criptana", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "villanueva-de-los-infantes", name: "Villanueva de los Infantes", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
  { slug: "argamasilla-de-alba", name: "Argamasilla de Alba", enabled: false, nearby: [], serviceSlugs: [], lead: "", context: "", delivery: "", faqs: [] },
];

export const enabledLocalities = localities.filter((locality) => locality.enabled);

export function getLocality(slug: string) {
  return enabledLocalities.find((locality) => locality.slug === slug);
}
