// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

//import { sortedMovies } from "./dataFunctions.js";
//import { calcularEstadistica } from "./dataFunctions.js";
//import { filterMoviesByGenre } from "./dataFunctions.js";
import { Home } from "./views/home.js";
import { personaje } from "./views/personaje.js";
//import { PanelChat } from "./views/panel.js";
import { ApiKey } from "./views/apikey.js";
import { vistaError } from "./views/error.js";
import { onURLChange, setRootElement, setRouters } from "./router.js";

const routes = {
  "/": Home,
  "/personaje": personaje,
  //"/panel": PanelChat,
  "/apikey": ApiKey,
  "/error": vistaError,
};

const ViewContainer = document.getElementById("root")

setRouters(routes);
setRootElement(ViewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
onURLChange(event.target.location.pathname)
const imagenClick = document.querySelector('.estilo-tarjetas');
  if (imagenClick) {
    imagenClick.addEventListener("click", () => {
      alert("Hola");
    });
  }

});


//ESTE CODIGO ES LO QUE NOS TRAJIMOS DEL MAIN DEL PROYECTO DATAVERSE
//const root = document.querySelector("#root"); // se esta obteniendo el elemento que tiene id "root"
//y almacena en la variable root.
//root.appendChild(renderItems(data)); //el elemento que se va a agregar es el resultado de llamar a la funcion
//renderltems(data)

//const selectFiltros = document.querySelector("#filtros"); // Selector para filtros
//const selectOrdenamiento = document.querySelector("#ordenamiento");
//const buttonBorrar = document.querySelector('[data-testid="button-clear"]'); //selector de borrar

//evento de cambio para selecctor de fitros
//selectFiltros.addEventListener("change", (evento) => {
  //console.log;
 // root.innerHTML = ""; //limpiar el contenido del contenedor prin
 // const selectedGenre = selectFiltros.value; // Obtener el género seleccionado del selector de filtros
 // const filteredMovies = filterMoviesByGenre(data, selectedGenre); // Usa la función de filtrado
  // Filtrar las películas por el género seleccionado
 // root.appendChild(renderItems(filteredMovies));
  // Renderizar y agregar las películas filtradas al contenedor principal
//});

// Evento de cambio para el selector de ordenamiento
//selectOrdenamiento.addEventListener("change", () => {
  //root.innerHTML = "";
  // Limpiar el contenido del contenedor principal
  //const selectedGenre = selectFiltros.value;
  // Obtener el género seleccionado del selector de filtros
  //const dataSort = sortedMovies(data, selectedGenre, selectOrdenamiento.value);
  // Utiliza la función sortedMovies para ordenar las películas filtradas
  //root.appendChild(renderItems(dataSort));
  // Renderizar y agregar las películas ordenadas al contenedor principal
//});

//buttonBorrar.addEventListener("click", () => {
  // Evento de clic para el botón de borrado
  //root.innerHTML = "";
  // Limpiar el contenido del contenedor principal
  //root.appendChild(renderItems(data));
  // Renderizar y agregar todas las películas al contenedor principal
//});

// El código para calcular la estadística de películas de terror ya se encuentra en dataFunctions.js
//const generoTerror = "Terror";
//const totalPeliculasDeTerror = calcularEstadistica(data, generoTerror);
// Calcular estadísticas para el género 'Terror'
//const estadisticaElement = document.getElementById("peliculasDeTerror");
// está obteniendo el elemento del DOM con el identificador 'peliculasDeTerror' y
//asignándolo a la variable estadisticaElement.
//estadisticaElement.textContent = totalPeliculasDeTerror.toString();
//  está actualizando el contenido del elemento de estadística en el DOM
//con el valor total de películas de terror, que se ha convertido a una cadena de texto.
