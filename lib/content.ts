export const siteContent = {
  company: {
    name: "ROMA",
    tagline: "Andamios y Soluciones para Construcción",
    email: "info@romaandamios.com",
    phone: "+52 (55) 1234-5678",
    address: "Ciudad de México, México",
    instagram: "#",
    linkedin: "#",
  },

  nav: {
    links: [
      { label: "Proyectos", href: "#proyectos", active: false },
      { label: "Servicios", href: "#servicios", active: true },
      { label: "Nosotros", href: "#nosotros", active: false },
    ],
    cta: { label: "Contacto", href: "#contacto" },
  },

  hero: {
    label: "Servicios",
    quote:
      "Trabajar con nosotros es una colaboración real. Nuestros clientes saben lo que sus obras necesitan, y para descubrirlo, nos tomamos el tiempo de entender cada detalle.",
    title: "ROMA",
    explore: "Explorar ↓",
    image: "/hero.jpg",
    imageAlt: "ROMA Andamios — obra de construcción",
  },

  quienesSomos: {
    heading: "¿QUIENES SOMOS?",
    body: "Empresa orgullosamente mexicana enfocada a la renta del andamio multidireccional desde hace casi 15 años.",
  },

  diferenciador: {
    headline: "NUESTRO\nDIFERENCIADOR",
    cta: { label: "Trabajemos juntos", href: "#contacto" },
    points: [
      { prefix: "Propuestas ", bold: "efectivas y económicas", icon: "/bolsa.png" },
      { prefix: "Velocidad en la ", bold: "entrega", icon: "/bandera.png" },
      { prefix: "Simplicidad en ", bold: "trámites", icon: "/form.png" },
      { prefix: "Acompañamiento ", bold: "24/7", icon: "/manos.png" },
    ],
    image: "/nuestro_diferenciador.png",
    imageAlt: "Edificio con andamios",
  },

  servicios: {
    heading: "SERVICIOS",
    sectionLabel: "Nuestros servicios",
    cta: { label: "Trabajemos juntos", href: "#contacto" },
    cards: [
      {
        id: "renta",
        name: "RENTA DEL EQUIPO",
        description:
          "Contamos con toda la versatilidad para darte la solución necesaria",
        image: "/Imagen1.png",
        imageAlt: "Andamios en construcción",
      },
      {
        id: "capacitacion",
        name: "CAPACITACIÓN",
        description:
          "Sin importar el conocimiento de tu colaboradores, les enseñamos el manejo del equipo",
        image: "/Imagen2.png",
        imageAlt: "Capacitación en altura",
      },
      {
        id: "logistica",
        name: "LOGÍSTICA",
        description:
          "Podemos entregarte en cualquier parte del país, en cualquier horario",
        image: "/Imagen3.png",
        imageAlt: "Logística de entrega",
      },
    ],
  },

  clientes: {
    sectionLabel: "Nuestros clientes",
    count: "39 empresas",
    // image: ruta al logo (p. ej. "/logos/acesta.png"). null = muestra nombre como texto.
    logos: [
      { id: "acesta",         name: "Acesta",                       image: null },
      { id: "jose-cuervo",    name: "Jose Cuervo",                  image: null },
      { id: "adobe-const",    name: "Adobe Construcciones",         image: null },
      { id: "icar",           name: "ICAR Ingenieria",              image: null },
      { id: "don-julio",      name: "Don Julio",                    image: null },
      { id: "stellantis",     name: "Stellantis",                   image: null },
      { id: "sabritas",       name: "Sabritas",                     image: null },
      { id: "diatsa",         name: "DIATSA Construcciones",        image: null },
      { id: "numeco",         name: "numeco inmobiliaria",          image: null },
      { id: "omega",          name: "Omega Constructora",           image: null },
      { id: "almex",          name: "ALMEX",                        image: null },
      { id: "mota-engil",     name: "Mota-Engil",                   image: null },
      { id: "steamatic",      name: "Steamatic",                    image: null },
      { id: "qhc",            name: "QHC Estructuras de Acero",     image: null },
      { id: "boehringer",     name: "Boehringer Ingelheim",         image: null },
      { id: "pisa",           name: "PiSA Farmacéutica",            image: null },
      { id: "ral",            name: "RAL",                          image: null },
      { id: "recal",          name: "Grupo Recal",                  image: null },
      { id: "zg-arq",         name: "Z&G Arquitectos",              image: null },
      { id: "construmet",     name: "Construmet",                   image: null },
      { id: "proyin",         name: "Proyín",                       image: null },
      { id: "acerotechos",    name: "Acerotechos",                  image: null },
      { id: "reiko",          name: "Reiko",                        image: null },
      { id: "cemex",          name: "CEMEX",                        image: null },
      { id: "bluesky",        name: "Blue Sky Facades",             image: null },
      { id: "ichep",          name: "Ichep",                        image: null },
      { id: "coca-cola",      name: "Coca-Cola",                    image: null },
      { id: "pemex",          name: "PEMEX",                        image: null },
      { id: "metalitec",      name: "Metalitec",                    image: null },
      { id: "estrumetalb",    name: "Estrumetalb",                  image: null },
      { id: "dicova",         name: "DICOVA",                       image: null },
      { id: "gap",            name: "Grupo Aeroportuario del Pacífico", image: null },
      { id: "r2b",            name: "R2B",                          image: null },
      { id: "indolea",        name: "Indolea",                      image: null },
      { id: "ternium",        name: "Ternium",                      image: null },
      { id: "edificacero",    name: "Edificacero",                  image: null },
      { id: "cg-const",       name: "CG Constructora",              image: null },
      { id: "ferrero",        name: "Ferrero Rocher",               image: null },
      { id: "tren-maya",      name: "Tren Maya",                    image: null },
    ],
  },

  proyectos: {
    sectionLabel: "Proyectos destacados",
    cta: { label: "Todos los proyectos", href: "#proyectos" },
    featured: [
      {
        id: "torre-central",
        name: "Torre Central",
        category: "Andamios de Fachada",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        size: "large" as const,
      },
      {
        id: "conjunto-residencial",
        name: "Conjunto Residencial Altura",
        category: "Multidireccional",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
        size: "small" as const,
      },
      {
        id: "planta-industrial",
        name: "Planta Industrial Norte",
        category: "Cimbras y Encofrados",
        image:
          "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=600&q=80",
        size: "small" as const,
      },
    ],
  },

  metodologia: {
    headline: "NUESTRA\nMETODOLOGÍA",
    steps: [
      {
        number: "01",
        name: "REQUERIMIENTOS",
        description:
          "Platicanos acerca del proyecto y las necesidades de tu equipo.",
      },
      {
        number: "02",
        name: "PROGRAMAR FECHA",
        description:
          "Te preparamos la solución más eficiente y económica que podrás encontrar en el mercado.",
      },
      {
        number: "03",
        name: "DOCUMENTACIÓN",
        description:
          "Te solicitaremos la menor cantidad de papeles necesarios para iniciar con la renta del equipo.",
      },
      {
        number: "04",
        name: "PAGO",
        description:
          "Una vez que procesemos tu pedido, podemos estarte entregando dentro de las 24 a 48 horas siguientes.",
      },
    ],
  },

  ctaFinal: {
    headline: "CONSTRUIMOS\nLA ESTRUCTURA\nDE TUS\nGRANDES IDEAS.",
    body: "Cada proyecto comienza con la seguridad que merece, moldeado por la visión del cliente, la complejidad que exige la obra y los resultados que aspira a lograr. Estos elementos se combinan para crear algo sólido e inigualable. Nos sumergimos en cada detalle para construir soluciones que resistan el tiempo.",
    cta: { label: "Trabajemos juntos", href: "#contacto" },
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Trabajadores en andamio",
  },

  footer: {
    address: "Ciudad de México, México",
    email: "info@romaandamios.com",
    phone: "+52 (55) 1234-5678",
    sitemap: ["Inicio", "Nosotros", "Servicios", "Proyectos", "Contacto"],
    socials: ["Instagram", "LinkedIn"],
    newsletter: {
      heading: "Recibe novedades de ROMA.",
      placeholder: "Tu correo aquí",
      legal: "Al suscribirte aceptas nuestra política de privacidad.",
    },
    copyright: `© ROMA Andamios ${new Date().getFullYear()}`,
  },
};
