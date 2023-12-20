import { footer } from "../componentes/footer.js";
import data from "../data/dataset.js";
import { chat } from "../componentes/chat.js";

export const pelicula = (movieName) => {
  const peliculaEncontrada = data.find((content) => content.name === movieName);

  if (peliculaEncontrada) {
    const contenidoPelicula = document.createElement("div");
    contenidoPelicula.classList.add("tarjeta-pelicula");
    contenidoPelicula.setAttribute("itemtype", "peliculas");
    contenidoPelicula.innerHTML = ` 
              <div class="elementos-visuales">
              <img class="imag-vistapelicula" src="${peliculaEncontrada.imageUrl}">
              <div id="contenedorChat"></div>
              <button id="abrirChat">Abrir Chat</button>
              </div>
              <div class="elementos-detalle">
              <dt>Nombre:</dt><dd itemprop="name">${peliculaEncontrada.name}</dd>
              <dt>description:</dt><dd itemprop="description">${peliculaEncontrada.description}</dd>
              <dt>genre:</dt><dd itemprop="genre">${peliculaEncontrada.genre}</dd>
              <dt>yearOfRelease:</dt><dd itemprop="yearOfRelease">${peliculaEncontrada.facts.yearOfRelease}</dd>
              <dt>director:</dt><dd itemprop="director">${peliculaEncontrada.facts.director}</dd>
              <dt>mainActors:</dt><dd itemprop="mainActors">${peliculaEncontrada.facts.mainActors}</dd>
              
            </div>
              
        `;
    const contenedorChat = contenidoPelicula.querySelector("#contenedorChat");
    const botonAbrirChat = contenidoPelicula.querySelector("#abrirChat");

    botonAbrirChat.addEventListener("click", () => {
      contenedorChat.innerHTML = ""; // Limpia el contenedor antes de agregar la vista
      contenedorChat.appendChild(chat());
    });

    return contenidoPelicula;
  } else {
    return "Pelicula no encontrada";
  }
};
