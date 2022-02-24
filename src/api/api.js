const products = [
  {
    id: 1,
    description:
      "Es un videojuego de futbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Es la vigésimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global.",
    imageURL:
      "https://as01.epimg.net/meristation/imagenes/2021/10/01/guias/1633081476_163721_1633081863_noticia_normal.jpg",
    title: "FIFA 22",
    price: 6000,
    category: "sports",
  },
  {
    id: 2,
    description:
      "Es un videojuego que combina el fútbol con los vehículos. Fue desarrollado por Psyonix y lanzado el 7 de julio de 2015. Fue lanzado Free to play en septiembre de 2020.",
    imageURL:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3",
    title: "Rocket League",
    price: 3500,
    category: "sports",
  },
  {
    id: 3,
    description:
      "Pone todo el universo del baloncesto a tus pies. JUEGA YA a la NBA y la WNBA en entornos realistas contra equipos y jugadores auténticos. Construye tu propio dream team en MyTEAM con las estrellas de hoy y las leyendas de ayer. Emprende tu propio camino profesional en MyCAREER y experimenta tu ascenso hasta la NBA.",
    imageURL:
      "https://image.api.playstation.com/vulcan/ap/rnd/202106/3002/Eaq9uyUlyLZK8L5xTlsPl0rM.png",
    title: "NBA 2K22",
    price: 6000,
    category: "sports",
  },
  {
    id: 4,
    description:
      "Juega contra los profesionales. Juega con tu equipo. En PGA TOUR 2K21, puedes seguir las reglas o crear las tuyas. NUEVO MODO CARRERA, demuestra que puedes ganar la FedExCup. Vence a los profesionales del PGA TOUR a lo largo de tu carrera y gana recompensas y equipo. PROFESIONALES Y CAMPOS NUEVOS, juega contra Justin Thomas y 11 profesionales en campos de la vida real, como el TPC Sawgrass o East Lake Golf Club.",
    imageURL: "https://cdn.mos.cms.futurecdn.net/kABT6auTqYyc8gyzeGVsZ4.jpg",
    title: "PGA TOUR 2K21",
    price: 6000,
    category: "sports",
  },
  {
    id: 5,
    description:
      "Un videojuego de disparos en primera persona desarrollado por Sledgehammer Games para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows. Su historia está ambientada en la Segunda Guerra Mundial. Vanguard es la decimoctava entrega en la franquicia de Call of Duty.",
    imageURL:
      "https://areajugones.sport.es/wp-content/uploads/2021/08/call-of-duty-vanguard-portada-1.jpg",
    title: "Call Of Duty VANGUARD",
    price: 6000,
    category: "action",
  },
  {
    id: 6,
    description:
      "Un juego de disparos en primera persona en el que dos equipos de cinco jugadores se enfrentan entre ellos. Además de los consabidos tiros, el objetivo de las partidas es colocar un dispositivo llamado Spike en una zona concreta del mapa.",
    imageURL:
      "https://www.muycomputer.com/wp-content/uploads/2020/03/Valorant.jpg",
    title: "VALORANT",
    price: 6000,
    category: "action",
  },
  {
    id: 7,
    description:
      "Es un juego de tipo batalla real en el que compiten hasta cien jugadores en solitario o en escuadrones de dos o cuatro miembros. Los jugadores saltan de un autobús que cruza el mapa en el momento que deseen, y empiezan sin armas.",
    imageURL:
      "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
    title: "FORTNITE",
    price: 6000,
    category: "action",
  },
  {
    id: 8,
    description:
      "RUGBY 22 ofrece la auténtica experiencia del rugby. Encuentra los mejores clubes y las naciones más importantes, disfruta de un sistema de juego dinámico que reproduce el deporte con toda fidelidad y vive la intensidad de los grandes partidos.",
    imageURL:
      "https://cdn.akamai.steamstatic.com/steam/apps/1475850/capsule_616x353.jpg?t=1643280706",
    title: "RUGBY 22",
    price: 6000,
    category: "sports",
  },
  {
    id: 9,
    description:
      "F1 2021 es el videojuego oficial de las temporadas 2021 de Fórmula 1 y del Campeonato de Fórmula 2 de la FIA desarrollado por Codemasters y distribuido por Electronic Arts bajo la división EA Sports. Fue lanzado el 16 de julio de 2021 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.",
    imageURL:
      "https://s3.gaming-cdn.com/images/products/7541/orig/juego-steam-f1-2021-cover.jpg",
    title: "F1 2021",
    price: 6000,
    category: "sports",
  },
  {
    id: 10,
    description:
      "Apex Legends es un juego de disparos en primera persona, como los juegos principales de la serie Titanfall. El juego es un 'tirador de héroes', donde los jugadores juegan como personajes discretos e individualizados con sus propios diseños, personalidades, historias y habilidades especiales.",
    imageURL:
      "https://image.api.playstation.com/vulcan/ap/rnd/202202/0721/LDGqEr54kpTZqMKJbspb3QkE.png?w=440&thumb=false",
    title: "APEX LEGENDS",
    price: 6000,
    category: "action",
  },
  {
    id: 11,
    description:
      "En eFootball™ 2022, podrás hacerte con los jugadores que más codicies y desarrollarlos como veas conveniente. Esto significa que, cuando suene el pitido final, el resultado del partido habrá sido en buena parte consecuencia de tus decisiones. ¡Haz realidad el equipo de tus sueños!",
    imageURL:
      "https://image.api.playstation.com/vulcan/img/rnd/202110/2805/KvDDja9QKnvDZhBC2GOtvUlc.png?w=440&thumb=false",
    title: "eFootball 2022",
    price: 6000,
    category: "sports",
  },
  {
    id: 12,
    description:
      "Warface es un videojuego de disparos en primera persona (FPS) desarrollado inicialmente por Crytek y desde 2018 por MY. GAMES (parte de Mail.ru Group)",
    imageURL:
      "https://cdn.gamer-network.net/2020/articles/2020-02-18-19-33/-1582054418354.jpg/EG11/thumbnail/1920x1078/format/jpg/quality/80",
    title: "WARFACE",
    price: 6000,
    category: "action",
  },
];

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

const getItems = () => promise;

export { getItems };
