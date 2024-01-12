// Función para calcular la estadística de películas de terror
export const calcularEstadistica = (data, genero) => {
  //toma un conjunto de datos y un género como parámetros
  const totalPeliculas = data

    .map((pelicula) => (pelicula.genre === genero ? 1 : 0))
    //utiliza el método map para convertir cada película en 1 si pertenece al género específico y 0 si no

    .reduce((total, count) => total + count, 0);
  // para sumar estos valores y obtener el total de películas del género dado.

  return Number(totalPeliculas);
  //La función devuelve el resultado como un número.
};

export function filterMoviesByGenre(data, selectedGenre) {
  return data.filter((movie) => movie.genre === selectedGenre);
  //filterMoviesByGenre exporta una función que toma un conjunto de datos
  // y un género seleccionado como parámetros, y devuelve un nuevo conjunto de datos que contiene solo las películas del género especificado.
}
export function sortedMovies(data, genero, ord) {
  //sortedMovies exporta una función que toma un conjunto de datos, un género y un criterio de orden como parámetros.

  const peliculasFiltradas = data.filter((movie) => movie.genre === genero);
  //La función comienza filtrando las películas por género.

  if (ord === "asc") {
    // dentro de la condición se ejecutará si el valor de la variable ord es igual a 'asc'.

    return peliculasFiltradas.sort((a, b) => a.name.localeCompare(b.name));
  } else if (ord === "desc") {
    //en caso de que el valor de la variable ord sea igual a 'desc', el código dentro de esa condición se
    // ejecutará para ordenar las películas filtradas en orden descendente por nombre.

    return peliculasFiltradas.sort((a, b) => b.name.localeCompare(a.name));
    //está devolviendo las películas filtradas ordenadas en orden descendente por nombre.
  }

  return peliculasFiltradas;
  //está devolviendo las películas filtradas sin aplicar ningún orden específico.
}
