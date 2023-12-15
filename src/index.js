import { Home } from "./views/home.js";
import { pelicula } from "./views/pelicula.js";
import { PanelChat } from "./views/panel.js";
import { ApiKey } from "./views/apikey.js";
import { vistaError } from "./views/error.js";
import { onURLChange, setRootElement, setRouters } from "./router.js";

// Definir las rutas de las 24 películas
const movies = [
  "Carrie",
  "The_Shining",
  "It",
  "Misery",
  "The_Green_Mile",
  "Doctor_Sleep",
  "Secret_Window",
  "Dolores_Claiborne",
  "Pet_Sematary",
  "Stand_by_Me",
  "The_Dead_Zone",
  "The_Langoliers",
  "Dreamcatcher",
  "Rose_Red",
  "Firestarter",
  "Needful_Things",
  "Golden_Years",
  "Graveyard_Shift",
  "Children_of_the_Corn",
  "The_Shawshank_Redemption",
  "1408",
  "The_Mist",
  "Gerald's_Game",
  "Cujo",
];

// Crear un objeto de rutas dinámicas
const routes = {
  "/": Home,
  "/panel": PanelChat,
  "/apikey": ApiKey,
  "/error": vistaError,
};

// Agregar las rutas de las películas al objeto de rutas
movies.forEach((movie) => {
  const moviePath = `/pelicula/${movie}`;
  routes[moviePath] = pelicula;
});

// Configurar el enrutador con las rutas
const ViewContainer = document.getElementById("root");
setRouters(routes);
setRootElement(ViewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});




  
