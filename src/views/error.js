import { navigateTo } from "../router.js";

// error.js

export const vistaError = () => {
  const divError = document.createElement("div");
  //divError.id = ("contenedor-error")
  const errorView = divError;

  const errorComponent = errorElement();
  errorView.appendChild(errorComponent);

  const buttonRegresar = errorView.querySelector(
    '[data-testid="button-regresar"]'
  );

  buttonRegresar.addEventListener("click", () => {
    navigateTo(`/`);
  });

  return errorView;
};

const errorElement = () => {
  const elementoError = document.createElement("div");

  // Agregar el contenido al elemento de error al div contenedor error
  elementoError.innerHTML = `
<div class="contenedor-imagen"> 
   <img src="../peliculas/error404.jpg" alt="Error 404" class="imagen404">
</div>

<div class="contenedor-boton">
   <button class="boton-regresar" data-testid="button-regresar">Regresar</button>
</div>`;
  return elementoError;
};
