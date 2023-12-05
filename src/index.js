

import { Home } from "./views/home.js";
import { personaje } from "./views/personaje.js";
import { PanelChat } from "./views/panel.js";
import { ApiKey } from "./views/apikey.js";
import { vistaError } from "./views/error.js";
import { onURLChange, setRootElement, setRouters } from "./router.js";
import { calcularEstadistica } from "./Lib/datafunctions.js";
import { filterMoviesByGenre } from "./Lib/datafunctions.js";
import { sortedMovies } from "./Lib/datafunctions.js";


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
  
  const selectFiltros = document.querySelector("#filtros"); // Selector para filtros
  const selectOrdenamiento = document.querySelector("#ordenamiento");
  const buttonBorrar = document.querySelector('[data-testid="button-clear"]'); //selector de borrar
  
  //evento de cambio para selecctor de fitros
  
  selectFiltros.addEventListener("change", (evento) => {
    //console.log;
   tarjetas.innerHTML = ""; //limpiar el contenido del contenedor prin
   const selectedGenre = selectFiltros.value; // Obtener el género seleccionado del selector de filtros
   const filteredMovies = filterMoviesByGenre(data, selectedGenre); // Usa la función de filtrado
    // Filtrar las películas por el género seleccionado
   tarjetas.appendChild(renderItems(filteredMovies));
    // Renderizar y agregar las películas filtradas al contenedor principal
    
  });
  console.log(selectFiltros)

  // Evento de cambio para el selector de ordenamiento
  selectOrdenamiento.addEventListener("change", () => {
    tarjetas.innerHTML = "";
    // Limpiar el contenido del contenedor principal
    const selectedGenre = selectFiltros.value;
    // Obtener el género seleccionado del selector de filtros
    const dataSort = sortedMovies(data, selectedGenre, selectOrdenamiento.value);
    // Utiliza la función sortedMovies para ordenar las películas filtradas
    tarjetas.appendChild(renderItems(dataSort));
    // Renderizar y agregar las películas ordenadas al contenedor principal
  });
  
  buttonBorrar.addEventListener("click", () => {
    // Evento de clic para el botón de borrado
    tarjetas.innerHTML = "";
    // Limpiar el contenido del contenedor principal
    tarjetas.appendChild(renderItems(data));
    // Renderizar y agregar todas las películas al contenedor principal
  });
  
  // El código para calcular la estadística de películas de terror ya se encuentra en dataFunctions.js
  const generoTerror = "Terror";
  const totalPeliculasDeTerror = calcularEstadistica(data, generoTerror);
  // Calcular estadísticas para el género 'Terror'
  const estadisticaElement = document.getElementById("peliculasDeTerror");
  // está obteniendo el elemento del DOM con el identificador 'peliculasDeTerror' y
  //asignándolo a la variable estadisticaElement.
  estadisticaElement.textContent = totalPeliculasDeTerror.toString();
  //  está actualizando el contenido del elemento de estadística en el DOM
  //con el valor total de películas de terror, que se ha convertido a una cadena de texto.
  

});



  
