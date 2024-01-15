import { data as fakeData } from "./data.js";
import {
  filterMoviesByGenre,
  sortedMovies,
  calcularEstadistica,
} from "../src/Lib/datafunctions";
import { fakeDataAsc } from "./data.js";
import { fakeDataDesc } from "./data.js";



describe("Funciones de Filtrado y Ordenamiento", () => {
  // Pruebas para la función de filtrado por género
  describe("filterMoviesByGenre", () => {
    it("Debería filtrar las películas por género 'Terror'", () => {
      const peliculasTerror = filterMoviesByGenre(fakeData, "Terror");
      expect(peliculasTerror.length).toBe(3);
      // Puedes agregar más expectativas para verificar los resultados específicos
      // de las películas de terror filtradas, si es necesario.
    });
  });

  // Pruebas para la función de ordenamiento
  describe("sortedMovies", () => {
    it("Debería ordenar las películas en orden ascendente", () => {
      const dataAscendente = sortedMovies(fakeData, "Terror", "asc");
      expect(dataAscendente).toEqual(fakeDataAsc);
    });

    it("Debería ordenar las películas en orden descendente", () => {
      sortedMovies(fakeData, "desc");
      const dataDescendente = sortedMovies(fakeData, "Terror", "desc");
      expect(dataDescendente).toEqual(fakeDataDesc);
    });
  });
});

// Pruebas para la función de estadistica
describe("calcularEstadistica", () => {
  it("Debería calcular la estadistica de las peliculas de terror", () => {
    const peliculasDeTerror = calcularEstadistica(fakeData, "Terror");
    expect(peliculasDeTerror).toBe(3);
  });
});


