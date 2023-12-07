// error.js

export const vistaError = () => {
  const elementoError = document.createElement("div");

  // Agregar el contenido al elemento de error
  elementoError.innerHTML = `<div class="contenedor-error"> 
                              
                                 <img src="../peliculas/error404.jpg" alt="Error 404" class="imagen404">
                                 <div class="contenedor-boton">
                                 <button class="boton-regresar">Regresar</button>
                                 </div>
                             </div>`;

  return elementoError;
};

