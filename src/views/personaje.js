import { footer } from "../componentes/footer.js";
import data from "../data/dataset.js";

export const personaje = (props) => {
  console.log(props);
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

  // Supongamos que props contiene el ID del personaje que se desea mostrar
  const contenido = character(props.id);
  // Aquí puedes adjuntar contenido a tu elemento HTML
  document.getElementById("contenedor").appendChild(contenido); // Reemplaza 'contenedor' con el ID de tu contenedor
};
