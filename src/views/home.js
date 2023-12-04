//import { renderItems } from "./componentes/tarjetas.js";
import data from "../data/dataset.js";
import { header } from "../componentes/header.js";

export const Home = () => {
  // Crear un nuevo elemento div
  const div = document.createElement('div');

  // Utilizar div como contenedor
  const headerview = div;

  // Obtener el componente de header
  const headerComponent = header();

  // Agregar el componente de header al div
  headerview.appendChild(headerComponent);
  
  const elementofiltros = filtros();
  headerview.appendChild(elementofiltros);
  // aqui llamo a los filtros de la funcion filtros 

  const listaDeTarjetas = renderItems(data);
  headerview.appendChild(listaDeTarjetas);
  //aqui llamamos a la lista de tarjetas de la funcion renderItems
  
  return headerview;
};
  
//esta e sla funcion que crea HTML para los fitros y botones 
export const filtros = () => {
  const elementofiltros = document.createElement('main');
  elementofiltros.innerHTML = `
<div>
<label for="filtros">Genero</label>
 <select name="filtros" id="filtros" data-testid="select-filter">
  <option name="seleccion" value="seleccion">-selecciona-</option>
  <option value="Terror">Terror</option>
  <option value="Ciencia Ficción">Ciencia Ficción</option>
  <option value="Thriller">Thriller</option>
  <option value="Drama">Drama</option>
</select>
</div>

<div>
<label for="ordenamiento">Orden alfabetico</label>
  <select name="ordenamiento" id="ordenamiento" data-testid="select-ordenamiento">
  <option name="seleccion" value="seleccion">-selecciona-</option>
  <option value="asc">A - Z</option>
  <option value="desc">Z - A</option>
</select>
</div>   
<div>
<label for="borrar">borrar</label>
  <button data-testid="button-clear">borrar</button>
</div>
<div id="estadistica">Total de películas de terror: <span id="peliculasDeTerror"></span></div>`
 return elementofiltros;
};

//funcion para crear HTML para las tarjetas 
const renderItems = (data) => {
  let listaDeTarjetas = "";

  data.forEach((content) => {
    listaDeTarjetas += ` 
      <li class='estilo-tarjetas' itemtype='peliculas' itemscope> 
        <dl itemscope itemtype='peliculas'>
          <img class="estilo-imagen"src="${content.imageUrl}">
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




