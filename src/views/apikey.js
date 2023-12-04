export const ApiKey = () => {
  const elementoApi = document.createElement("div");

  // Agregar el contenido al elemento header
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
};
