import { footer } from "../componentes/footer.js";
import data from "../data/dataset.js";

export const pelicula = (props) => {
  //console.log(props);
  const character = (id) => {
    const personajeEncontrado = data.find((content) => content.id === id);

    if (personajeEncontrado) {
      const contenidoPersonaje = document.createElement("div");
      contenidoPersonaje.classList.add("tarjeta-personaje");
      contenidoPersonaje.setAttribute("itemtype", "peliculas");
      contenidoPersonaje.innerHTML = ` 
              <img class="imagen-personaje" src="${personajeEncontrado.imageUrl}">
              <dt>Nombre:</dt><dd itemprop="name">${personajeEncontrado.name}</dd>
              <dt>description:</dt><dd itemprop="description">${personajeEncontrado.description}</dd>
              <dt>genre:</dt><dd itemprop="genre">${personajeEncontrado.genre}</dd>
              <dt>yearOfRelease:</dt><dd itemprop="yearOfRelease">${personajeEncontrado.facts.yearOfRelease}</dd>
              <dt>director:</dt><dd itemprop="director">${personajeEncontrado.facts.director}</dd>
              <dt>mainActors:</dt><dd itemprop="mainActors">${personajeEncontrado.facts.mainActors}</dd>
        `;
           

      return contenidoPersonaje;
    } else {
      return "Personaje no encontrado";
    }
  };

  

document.addEventListener("DOMContentLoaded", function() {
  const contenedor = document.getElementById("contenedor");

  if (contenedor) {
    // Llama a la función obtenerContenido y asigna el resultado a la variable contenido
    const contenido = obtenerContenido(); // Esto elimina el aviso

    // Asegúrate de que 'contenido' sea un elemento antes de intentar agregarlo
    if (contenido instanceof Element) {
      contenedor.appendChild(contenido);
    } else {
      console.error("El contenido no es un elemento válido.");
    }
  } else {
    console.error("No se encontró el contenedor con ID: contenedor");
  }
});

// Tu lógica para obtener o generar contenido aquí
const contenido = document.createElement("p");
contenido.textContent = "¡Hola, soy el contenido!";

return contenido;
}



 

