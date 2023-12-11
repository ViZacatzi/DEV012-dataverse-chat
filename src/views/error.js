// error.js

export const vistaError = () => {
  const elementoError = document.createElement("div");
  elementoError.id = ("contenedor-error")

  // Agregar el contenido al elemento de error al div contenedor error
  elementoError.innerHTML = `<div class="contenedor-imagen"> 
                                 <img src="../peliculas/error404.jpg" alt="Error 404" class="imagen404">
                              </div>
                              <div class="contenedor-boton">
                                 <button class="boton-regresar">Regresar</button>
                              </div>`;

  return elementoError;
};

