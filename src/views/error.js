export const vistaError = () => {
  
  const elementoError = document.createElement('div');

  // Agregar el contenido al elemento header
  elementoError.innerHTML = `<div class="contenedor"> <div class="error">ERROR 404</div>
                             <button class="boton-regresar">Click aquí para regresar</button></div>`;
                             

  return elementoError;


};
 
