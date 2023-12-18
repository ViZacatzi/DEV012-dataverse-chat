import { footer } from "../componentes/footer.js";
import data from "../data/dataset.js";

export const pelicula = (movieName) => {
  
    const peliculaEncontrada = data.find((content) => content.name === movieName);

    if (peliculaEncontrada) {
      const contenidoPelicula = document.createElement("div");
      contenidoPelicula.classList.add("tarjeta-pelicula");
      contenidoPelicula.setAttribute("itemtype", "peliculas");
      contenidoPelicula.innerHTML = ` 
              <img class="imagen-pelicula" src="${peliculaEncontrada.imageUrl}">
              <dt>Nombre:</dt><dd itemprop="name">${peliculaEncontrada.name}</dd>
              <dt>description:</dt><dd itemprop="description">${peliculaEncontrada.description}</dd>
              <dt>genre:</dt><dd itemprop="genre">${peliculaEncontrada.genre}</dd>
              <dt>yearOfRelease:</dt><dd itemprop="yearOfRelease">${peliculaEncontrada.facts.yearOfRelease}</dd>
              <dt>director:</dt><dd itemprop="director">${peliculaEncontrada.facts.director}</dd>
              <dt>mainActors:</dt><dd itemprop="mainActors">${peliculaEncontrada.facts.mainActors}</dd>
        `;
           

      return contenidoPelicula;
    } else {
      return "Pelicula no encontrada";
    }
  };

  






 

