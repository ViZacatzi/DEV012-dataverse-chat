import data from "../data/dataset.js";
import { header } from "../componentes/header.js";
import { footer } from "../componentes/footer.js";
import {sortedMovies,calcularEstadistica,filterMoviesByGenre,} from "../Lib/datafunctions.js";
import { navigateTo } from '../router.js';
export const Home = () => {
  // Crear un nuevo elemento div
  const div = document.createElement("div");

  // Utilizar div como contenedor
  const homeview = div;

  // Obtener el componente de header
  const headerComponent = header();
  // Agregar el componente de header al div
  homeview.appendChild(headerComponent);

  // aqui llamamos a los filtros de HTML de la funcion filtros y se pegan en el div de la vista homeview
  const elementofiltros = filtros();
  homeview.appendChild(elementofiltros);

  //aqui creamos un div para las tarjetas
  const divContenedorTarjetas = document.createElement("div");
  divContenedorTarjetas.id = "tarjetas";

  homeview.appendChild(divContenedorTarjetas);

  //aqui metemos la funcion de filtrado
  const manejodefiltro = (selectedGenre, data) => {
    return filterMoviesByGenre(data, selectedGenre);
  };

  //aqui metemos la funcion de ordenamiento
  const manejodeordenamiento = (selectedGenre, orden, data) => {
    return sortedMovies(data, selectedGenre, orden);
  };

  //const manejodeestadisticas = (data, selectedGenre) => {
    //return calcularEstadistica(data, selectedGenre);
  //};

  //aqui llamamos a la lista de tarjetas de la funcion renderItems y las pegamos en el divContenedorTarjetas
  const listaDeTarjetas = renderItems(data);
  //const tarjetas = listaDeTarjetas.querySelectorAll("li")
  //tarjetas.forEach( function (litarjeta){
    
    //console.log(litarjeta)
  //} )
  
  divContenedorTarjetas.appendChild(listaDeTarjetas);
  
  const tarjetas = divContenedorTarjetas.querySelectorAll(".estilo-tarjetas");
  tarjetas.forEach((tarjeta) => {
   // console.log(tarjeta)
    tarjeta.addEventListener("click", () => {
      const movieName = tarjeta.getAttribute("moviename")
      // Obtén el ID desde el atributo de datos (data-id) de la tarjeta
     // const tarjetaId = tarjeta.dataset.id;
      // Navega a la ruta del personaje al hacer clic
      console.log("Navigating to:", `/personaje/${movieName}`);
      navigateTo(`/personaje/${movieName}`);
      
    });
  });
  // Aqui agregamos el componente de footer al div de la vista homeview
  const footerComponent = footer();
  homeview.appendChild(footerComponent);

  const filtrosSelect = homeview.querySelector("#filtros");
  const ordenamientoSelect = homeview.querySelector("#ordenamiento");
  const buttonBorrar = homeview.querySelector('[data-testid="button-clear"]');
  //const estadisticaElement = homeview.getElementById("peliculasDeTerror");
  // Evento para cambiar el select de género
  filtrosSelect.addEventListener("change", (event) => {
    const selectedGenre = event.target.value;
    const filteredMovies = manejodefiltro(selectedGenre, data);
    const listaDeTarjetasFiltradas = renderItems(filteredMovies);
    divContenedorTarjetas.innerHTML = "";
    divContenedorTarjetas.appendChild(listaDeTarjetasFiltradas);
  });

  // Evento para cambiar el select de ordenamiento
  ordenamientoSelect.addEventListener("change", (event) => {
    const selectedGenre = filtrosSelect.value;
    const orden = event.target.value;
    const sorted = manejodeordenamiento(selectedGenre, orden, data);
    const listaDeTarjetasOrdenadas = renderItems(sorted);
    divContenedorTarjetas.innerHTML = "";
    divContenedorTarjetas.appendChild(listaDeTarjetasOrdenadas);
  });

  // Evento para darle funcionamiento al boton
  buttonBorrar.addEventListener("click", () => {
    filtrosSelect.value = "seleccion";
    ordenamientoSelect.value = "seleccion";
    divContenedorTarjetas.innerHTML = "";
    divContenedorTarjetas.appendChild(renderItems(data));
  });

  //const generoTerror = "Terror";
  //const totalPeliculasDeTerror = manejodeestadisticas(data, generoTerror);
  // Calcular estadísticas para el género 'Terror'
  
  // está obteniendo el elemento del DOM con el identificador 'peliculasDeTerror' y
  //asignándolo a la variable estadisticaElement.
 // estadisticaElement.textContent = totalPeliculasDeTerror.toString();
  //  está actualizando el contenido del elemento de estadística en el DOM
  //con el valor total de películas de terror, que se ha convertido a una cadena de texto.
  return homeview;
};

//esta es la funcion que crea HTML para los fitros y botones
const filtros = () => {
  const elementofiltros = document.createElement("main");
  elementofiltros.innerHTML = `
<div class="filtros">
  <label class="texto" for="filtros">Genero</label>
  <select name="filtros" id="filtros" data-testid="select-filter">
    <option name="seleccion" value="seleccion">-selecciona-</option>
    <option value="Terror">Terror</option>
    <option value="Ciencia Ficción">Ciencia Ficción</option>
    <option value="Thriller">Thriller</option>
    <option value="Drama">Drama</option>
  </select>
</div>

<div class="filtros">
  <label class="texto" for="ordenamiento">Orden alfabetico</label>
    <select name="ordenamiento" id="ordenamiento" data-testid="select-ordenamiento">
      <option name="seleccion" value="seleccion">-selecciona-</option>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>
</div> 

<div>
  <label for="borrar"></label>
   <button data-testid="button-clear">borrar</button>
  </div>

<div class="filtros" id="estadistica">
  <label class="texto">Total de películas de terror: </label>
    <span id="peliculasDeTerror"></span>
</div>`;

  return elementofiltros;
};

//funcion para crear HTML para las tarjetas
const renderItems = (data) => {
  let listaDeTarjetas = "";

  data.forEach((content) => {
    listaDeTarjetas += ` 
      <li class='estilo-tarjetas' itemtype='peliculas' itemscope moviename="${content.name}"> 
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

