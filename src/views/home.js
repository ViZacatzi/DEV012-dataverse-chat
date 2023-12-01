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

  // Hacer algo con headerview o devolverlo según tus necesidades
  // Aquí es donde debes llamar a la función renderItems
  const listaDeTarjetas = renderItems(data);
  headerview.appendChild(listaDeTarjetas);

  // Finalmente, devolver el contenedor completo
  return headerview;
};

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




