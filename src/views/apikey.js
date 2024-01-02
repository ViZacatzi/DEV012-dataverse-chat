import { footer } from "../componentes/footer.js";
import { navigateTo } from "../router.js";

export const ApiKey = () => {
  //crea el div que va a contener la vista Api-Key
  const div = document.createElement("div");

  const apikeyview = div;

  const apikeyComponent = apikeyelement();
  apikeyview.appendChild(apikeyComponent);

  const footerComponent = footer();
  apikeyview.appendChild(footerComponent);

  //llamar a los botones
  const inputUser = apikeyview.querySelector("#user");
  const inputApi = apikeyview.querySelector("#api");
  const buttonHome = apikeyview.querySelector('[data-testid="button-home"]');
  const buttonApiBorrar = apikeyview.querySelector(
    '[data-testid="button-api-borrar"]'
  );

  //función del boton Home para que el boton regrese a la vista Home
  buttonHome.addEventListener("click", () => {
    navigateTo(`/`);
  });

  //función del boton ApiBorrar para que limpie el contenido de los input
  buttonApiBorrar.addEventListener("click", () => {
    inputUser.value = "";
    inputApi.value = "";
  });

  return apikeyview;
};

//función que crea el html de apikeyelement para que pinte la vista
export const apikeyelement = () => {
  const elementoApi = document.createElement("div");

  elementoApi.innerHTML = `
<div class="contenedor-api">
  <p class="api">API-KEY</p><br>
  <label class="texto" for="user">Pon tu nombre aqui</label>
  <input type="text" id="user" value=""><br>
  <label class="texto" for="api">Api-Key</label>
  <input type="texto" id="api" value=""><br>

  <div class="botones"><br>
    <button class="boton-api">Aceptar</button>
    <button data-testid="button-api-borrar" class="boton-api-borrar">Borrar todo</button>
  </div>

  <div>
    <label for="button-home"></label>
    <button data-testid="button-home" class="button-home">Home</button>
  </div>
                              
</div>
  `;
// en esta variable se va a almacenar la APIKEY
let apiKey = ''; 

function guardarApiKey() {
  const usuario = document.getElementById('user').value;
  const apiIngresada = document.getElementById('api').value;

  if (usuario !== '' && apiIngresada !== '') {
    apiKey = apiIngresada;
    // Puedes guardar el usuario también si es necesario
    // const nombreUsuario = usuario;

    // Llamar a la función para enviar mensajes al chat (puede variar dependiendo de tu estructura)
    // enviarMensaje();

    // Aquí puedes hacer lo que sea necesario con la APIKEY ingresada por el usuario
    console.log('APIKEY guardada:', apiKey);

    // Llamar a una función que use fetch con la apiKey
    usarFetchConApiKey(apiKey);
  } else {
    alert('Por favor ingresa tu nombre y tu APIKEY');
  }
}


  return elementoApi;
};
