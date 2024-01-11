export const renderItems = (data) => {

let listadeTarjetas = "";

data.forEach((content) => {
  //innicio con forEach
  // inicio con la variale lista de tarjetas para la cadena para costruir la cadena en html
  //utilize "`" para concatenar texto al valor que ya tiene "lista de tarjetas"
  //el fracmento esta dentro de un bucle data.forEach((content) => {...})
  listadeTarjetas += ` 
  <a href="/personaje/${content.name.toLowerCase()}">
      <li class='estilo-tarjetas' itemtype='peliculas' itemscope> 
        <dl itemscope itemtype='peliculas'>
          <img class="estilo-imagen" src="${content.imageUrl}">
          <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
          <dt>genre:</dt><dd itemprop="genre">${content.genre}</dd>
        </dl>
      </li>
      </a>
    `; // está agregando una tarjeta a la lista. La plantilla de cadena se utiliza
  //para construir el contenido de la tarjeta con propiedades como imageUrl, name y genre de un objeto content.
});

const lista = document.createElement("ul"); // crea un elemento de lista desordenada (<ul>),
//le asigna contenido generado previamente en forma de tarjetas de
//películas y devuelve este elemento de lista  para ser insertado en el documento HTML.

lista.innerHTML = listadeTarjetas;
//aqui está actualizando el contenido del elemento de lista en el DOM con las tarjetas generadas previamente en la variable listadeTarjetas.
return lista;
//está devolviendo el elemento de lista con las tarjetas generadas.
};