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
  const buttonHome = apikeyview.querySelector("[data-testid='button-home']");
  const buttonApiBorrar = apikeyview.querySelector(
    "[data-testid='button-api-borrar']"
  );
  const buttonAceptar = apikeyview.querySelector(".boton-api");

  //función del boton Home para que el boton regrese a la vista Home
  buttonHome.addEventListener("click", () => {
    navigateTo(`/`);
  });

  //función del boton ApiBorrar para que limpie el contenido de los input
  buttonApiBorrar.addEventListener("click", () => {
    inputUser.value = "";
    inputApi.value = "";
    apiKey = "";
  });

  // en esta variable se va a almacenar la APIKEY
  let apiKey = "";
  //let nombreUsuario = "";

  function guardarApiKey() {
    const usuario = document.querySelector("#user").value;
    const apiIngresada = document.querySelector("#api").value;
    if (usuario !== "" && apiIngresada !== "") {
      //Guarda la apiKey que ingresa el usuario
      apiKey = apiIngresada;
      //Guarda el numbre del usuario
      //nombreUsuario = usuario;

      // Almacenar en localStorage
      localStorage.setItem("apiKey", apiKey);
      alert(
        "Tu Api-Key ya esta guardada, puedes ir a chatear con tus personajes favoritos"
      );
    } else {
      alert("Por favor ingresa tu nombre y tu APIKEY");
    }
  }

  buttonAceptar.addEventListener("click", () => {
    guardarApiKey();
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
    </div>`;
  return elementoApi;
};
