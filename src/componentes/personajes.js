export const character = (data) => {

let personajes = "";

data.forEach((content) => {
  personajes += ` 
      <div class='tarjeta-personaje' itemtype='peliculas' itemscope> 
          <img class="imagen-personaje" src="${content.imageUrl}">
          <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
          <dt>description:</dt><dd itemprop="description">${content.description}</dd>
          <dt>genre:</dt><dd itemprop="genre">${content.genre}</dd>
          <dt>yearOfRelease:</dt><dd itemprop="yearOfRelease">${content.facts.yearOfRelease}</dd>
          <dt>director:</dt><dd itemprop="director">${content.facts.director}</dd>
          <dt>mainActors:</dt><dd itemprop="mainActors">${content.facts.mainActors}</dd>
      </div>
    `; 
});

const contenidoPersonaje = document.createElement("div"); 
contenidoPersonaje.innerHTML = personajes;
return contenidoPersonaje;
};
