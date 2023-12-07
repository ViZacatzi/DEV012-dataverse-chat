

import { Home } from "./views/home.js";
import { personaje } from "./views/personaje.js";
import { PanelChat } from "./views/panel.js";
import { ApiKey } from "./views/apikey.js";
import { vistaError } from "./views/error.js";
import { onURLChange, setRootElement, setRouters } from "./router.js";


const routes = {
  "/": Home,
  "/personaje": personaje,
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



  