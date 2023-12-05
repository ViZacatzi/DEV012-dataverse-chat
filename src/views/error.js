// error.js

export const vistaError = () => {
  const elementoError = document.createElement("div");

  // Agregar el contenido al elemento de error
  elementoError.innerHTML = `<div class="contenedor"> 
                               <div class="error">ERROR 404
                                 <button class="boton-regresar">Regresar</button>
                               </div>
                             </div>`;

  return elementoError;
};
