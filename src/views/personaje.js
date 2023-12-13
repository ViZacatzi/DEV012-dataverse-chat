import { footer } from "../componentes/footer.js";
import data from "../data/dataset.js";

// Supongamos que tienes una lista de películas en un array llamado 'data'

export const personaje = (movieName) => {
  // Encuentra la película en tu lista de datos
  const peliculaSeleccionada = data.find(pelicula => pelicula.name === movieName);

  if (peliculaSeleccionada) {
    // Construye la vista de la película según la estructura de tu objeto de película
    const template = `
      <h2>${peliculaSeleccionada.name}</h2>
      <img src="${peliculaSeleccionada.imageUrl}" alt="${peliculaSeleccionada.name}">
      <p>${peliculaSeleccionada.description}</p>
      <!-- Otros detalles de la película -->
    `;

    const container = document.createElement('div');
    container.innerHTML = template;

    // Supongamos que tienes un elemento en tu HTML donde quieres mostrar esta vista
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';
    movieContainer.appendChild(container);
  } else {
    console.error('Película no encontrada');
  }
}
