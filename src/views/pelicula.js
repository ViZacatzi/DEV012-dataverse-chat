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
              <img class="imagen-pelicula" src="${peliculaEncontrada.imageUrl}">
              <div> <dt>Nombre:</dt><dd itemprop="name">${peliculaEncontrada.name}</dd>
              <dt>description:</dt><dd itemprop="description">${peliculaEncontrada.description}</dd>
              <dt>genre:</dt><dd itemprop="genre">${peliculaEncontrada.genre}</dd>
              <dt>yearOfRelease:</dt><dd itemprop="yearOfRelease">${peliculaEncontrada.facts.yearOfRelease}</dd>
              <dt>director:</dt><dd itemprop="director">${peliculaEncontrada.facts.director}</dd>
              <dt>mainActors:</dt><dd itemprop="mainActors">${peliculaEncontrada.facts.mainActors}</dd>
              <button id="abrirChat">Abrir Chat</button>
              <div id="contenedorChat"></div>
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
