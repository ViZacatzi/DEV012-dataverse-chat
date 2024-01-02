import { navigateTo } from "../router.js";
export const chat = () => {
  const chatElement = document.createElement("div");

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `
<div class="contenedor-chat">
    <div class="caja-chat">
    </div>
    <div class="cuadro-de-entrada">
      <input id="mensajeInput" type="text" placeholder="Escribe un mensaje..." />
      <button id="enviarMensaje">Enviar</button>
    </div>
</div>
<button class="boton-chat">Regresar</button>                        
`;
  const botonRegresar = chatElement.querySelector(".boton-chat");

  botonRegresar.addEventListener("click", () => {
    navigateTo(`/`);
  });

  function enviarMensaje() {
    const mensajeInput = document.querySelector("#mensajeInput");
    const mensaje = mensajeInput.value.trim();

    if (mensaje !== "") {
      const cajaChat = document.querySelector(".caja-chat");
      const nuevoMensaje = document.createElement("div");
      nuevoMensaje.classList.add("message", "saliendo");
      nuevoMensaje.innerHTML = `<p>${mensaje}</p>`;
      cajaChat.appendChild(nuevoMensaje);

      mensajeInput.value = ""; // Limpiar el input después de enviar el mensaje
    }
  }

  chatElement
    .querySelector("#enviarMensaje")
    .addEventListener("click", enviarMensaje);

  return chatElement;
};
