/*
    Información de prueba
    Solo disponible de forma hard-coded para muestra de la app en los desafíos
*/

const author_me = {
  id: "52ab16cc-89af-403c-bbfd-3a68b4fd32ce",
  name: "Nicolás Filippi Farmar",
  image:
    "https://firebasestorage.googleapis.com/v0/b/homie-b5662.appspot.com/o/profile_pictures%2FeqgfQsrUqtTo8AaTS3nkS3Ca5G73%2FuHkw7gSphQlI.jpg?alt=media&token=d80d3722-5034-4e1b-ab25-7f2069da3b88",
};

const author_coder = {
  id: "abf83175-2442-4023-bcf7-3266ff2cfd36",
  name: "Equipo CoderHouse",
  image:
    "https://avatars.slack-edge.com/2020-08-23/1303062387175_56cab3e013f7f4991252_88.png",
};

export { author_me, author_coder };

export default [
  {
    author: author_me,
    date: "2021-06-20T00:00:05.000Z",
    id: "009c3373-be69-4118-b8a2-a4ba78adfcac",
    message: "Hola Coder!",
  },
  {
    author: author_me,
    date: "2021-06-20T00:00:04.000Z",
    id: "7e069544-a76a-467c-8f1c-e828d9c3a1ff",
    message: "Esta es mi aplicación para el primer desafío!",
  },
  {
    author: author_coder,
    date: "2021-06-20T00:00:03.000Z",
    id: "4100085b-3a17-4a2d-a73a-a27fce2c847a",
    message:
      'Haciendo tap en el botón del "+", podrán agregar un nuevo posteo a la lista...',
  },
  {
    author: author_me,
    date: "2021-06-20T00:00:02.000Z",
    id: "7bdaba7a-f7b7-437f-990d-96131019db13",
    message:
      "Para eliminar cualquiera de los posteos, solo se requiere mantener presionado un posteo y así acceder al cartel de confirmación de eliminación!",
  },
  {
    author: author_coder,
    date: "2021-06-20T00:00:01.000Z",
    id: "abf83175-2442-4023-bcf7-3266ff2cfd36",
    message: "Saludos!!!",
  },
];
