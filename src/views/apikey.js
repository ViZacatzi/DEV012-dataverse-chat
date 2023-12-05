import { footer } from "../componentes/footer.js";

export const ApiKey = () => {

  const div = document.createElement("div");

  const apikeyview = div;

  const apikeyComponent = apikeyelement();
  apikeyview.appendChild(apikeyComponent);


  const footerComponent = footer();
  apikeyview.appendChild(footerComponent);
  

  return apikeyview;
};

export const apikeyelement = () => {
const elementoApi = document.createElement("div");

  elementoApi.innerHTML = `
                          <div class="contenedor-api">
                            <p class="api">API-KEY</p><br>
                            <label class="texto" for="user">Usuario:</label>
                            <input type="text" id="user"><br>
                            <label class="texto" for="pass">Contraseña:</label>
                            <input type="password" id="pass"><br>
                              <div class="botones"><br>
                               <button class="boton-api">Aceptar</button>
                               <button class="boton-limpiar">Borrar todo</button>
                              </div>
                          </div>
  `;

  return elementoApi;
}