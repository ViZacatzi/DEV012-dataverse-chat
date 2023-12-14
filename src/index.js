

import { Home } from "./views/home.js";
import { personaje } from "./views/personaje.js";
import { PanelChat } from "./views/panel.js";
import { ApiKey } from "./views/apikey.js";
import { vistaError } from "./views/error.js";
import { onURLChange, setRootElement, setRouters } from "./router.js";



const routes = {
  "/": Home,
  "/personaje/Carrie": personaje,
  "/personaje/The_Shining": personaje,
  "/personaje/It": personaje,
  "/personaje/Misery": personaje,
  "/personaje/The_Green_Mile": personaje,
  "/personaje/Doctor_Sleep": personaje,
  "/personaje/Secret_Window": personaje,
  "/personaje/Dolores_Claiborne": personaje,
  "/personaje/Pet_Sematary": personaje,
  "/personaje/Stand_by_Me": personaje,
  "/personaje/The_Dead_Zone": personaje,
  "/personaje/The_Langoliers": personaje,
  "/personaje/Dreamcatcher": personaje,
  "/personaje/Rose_Red": personaje,
  "/personaje/Firestarter": personaje,
  "/personaje/Needful_Things": personaje,
  "/personaje/Golden_Years": personaje,
  "/personaje/Graveyard_Shift": personaje,
  "/personaje/Children_of_the_Corn": personaje,
  "/personaje/The_Shawshank_Redemption": personaje,
  "/personaje/1408": personaje,
  "/personaje/The_Mist": personaje,
  "/personaje/Gerald's_Game": personaje,
  "/personaje/Cujo": personaje,
  "/panel": PanelChat,
  "/apikey": ApiKey,
  "/error": vistaError,
};


const ViewContainer = document.getElementById("root")

setRouters(routes);
setRootElement (ViewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
onURLChange(event.target.location.pathname)
//const imagenClick = document.querySelector('.estilo-tarjetas');
  //if (imagenClick) {
   // imagenClick.addEventListener("click", () => {
  //    alert("Hola");
  //  });
  
  

});



  
