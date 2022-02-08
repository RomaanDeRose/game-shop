const products = [
  {
    id: 1,
    description:
      "Es un videojuego de futbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Es la vigésimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global.",
    imageURL:
      "https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg",
    title: "FIFA 22",
    price: "6.000",
  },
  {
    id: 2,
    description:
      "Es un videojuego que combina el fútbol con los vehículos. Fue desarrollado por Psyonix y lanzado el 7 de julio de 2015. Fue lanzado Free to play en septiembre de 2020.",
    imageURL:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3",
    title: "Rocket League",
    price: "3.500",
  },
  {
    id: 3,
    description:
      "Pone todo el universo del baloncesto a tus pies. JUEGA YA a la NBA y la WNBA en entornos realistas contra equipos y jugadores auténticos. Construye tu propio dream team en MyTEAM con las estrellas de hoy y las leyendas de ayer. Emprende tu propio camino profesional en MyCAREER y experimenta tu ascenso hasta la NBA.",
    imageURL:
      "https://image.api.playstation.com/vulcan/ap/rnd/202106/3002/Eaq9uyUlyLZK8L5xTlsPl0rM.png",
    title: "NBA 2K22",
    price: "6.000",
  },
];

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

const getItems = () => promise;

export { getItems };
