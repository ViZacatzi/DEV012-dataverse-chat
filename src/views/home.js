//import { renderItems } from "./componentes/tarjetas.js";
import data from "../data/dataset.js";
import { header } from "../componentes/header.js";
import { footer } from "../componentes/footer.js";

export const Home = () => {
  // Crear un nuevo elemento div
  const div = document.createElement("div");

  // Utilizar div como contenedor
  const homeview = div;

  // Obtener el componente de header
  const headerComponent = header();
  // Agregar el componente de header al div
  homeview.appendChild(headerComponent);

 // aqui llamamos a los filtros de HTML de la funcion filtros y se pegan en el div de la vista homeview 
  const elementofiltros = filtros();
  homeview.appendChild(elementofiltros);
  
  //aqui creamos un div para las tarjetas
  const divContenedorTarjetas = document.createElement("div");
  divContenedorTarjetas.id = "tarjetas";
  homeview.appendChild(divContenedorTarjetas);

  //aqui llamamos a la lista de tarjetas de la funcion renderItems y las pegamos en el divContenedorTarjetas
  const listaDeTarjetas = renderItems(data);
  divContenedorTarjetas.appendChild(listaDeTarjetas);
  
  
  // Aqui agregamos el componente de footer al div de la vista homeview
  const footerComponent = footer();
  homeview.appendChild(footerComponent);

  return homeview;
};

//esta es la funcion que crea HTML para los fitros y botones
const filtros = () => {
  const elementofiltros = document.createElement("main");
  elementofiltros.innerHTML = `
<div class="filtros">
  <label class="texto" for="filtros">Genero</label>
  <select name="filtros" id="filtros" data-testid="select-filter">
    <option name="seleccion" value="seleccion">-selecciona-</option>
    <option value="Terror">Terror</option>
    <option value="Ciencia Ficción">Ciencia Ficción</option>
    <option value="Thriller">Thriller</option>
    <option value="Drama">Drama</option>
  </select>
</div>

<div class="filtros">
  <label class="texto" for="ordenamiento">Orden alfabetico</label>
    <select name="ordenamiento" id="ordenamiento" data-testid="select-ordenamiento">
      <option name="seleccion" value="seleccion">-selecciona-</option>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>
</div> 

<div>
  <label for="borrar"></label>
   <button data-testid="button-clear">borrar</button>
  </div>

<div class="filtros" id="estadistica">
  <label class="texto">Total de películas de terror: </label>
    <span id="peliculasDeTerror"></span>
</div>`;
  return elementofiltros;
  
};

//funcion para crear HTML para las tarjetas
const renderItems = (data) => {
  let listaDeTarjetas = "";

  data.forEach((content) => {
    listaDeTarjetas += ` 
      <li class='estilo-tarjetas' itemtype='peliculas' itemscope> 
        <dl itemscope itemtype='peliculas'>
          <img class="estilo-imagen" src="${content.imageUrl}">
          <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
          <dt>Género:</dt><dd itemprop="genre">${content.genre}</dd>
        </dl>
      </li>
    `;
  });

  const lista = document.createElement("ul");
  lista.innerHTML = listaDeTarjetas;

  return lista;
};


//Aqui llamamos a la funciones del datafuncion para hacer los filtros 

//const tarjetas = document.querySelector("#tarjetas"); // se esta obteniendo el elemento que tiene id "root"
//y almacena en la variable root.
//tarjetas.appendChild(renderItems(data)); //el elemento que se va a agregar es el resultado de llamar a la funcion
//renderltems(data)
