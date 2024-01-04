import { navigateTo } from "../router.js";
import { chatRequest } from "../Lib/requestAPI.js"

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


  let apiKey = localStorage.getItem("apiKey")


  function enviarMensaje() {
    const mensajeInput = document.querySelector("#mensajeInput");
    const mensaje = mensajeInput.value.trim();

    if (mensaje !== "") {
      const cajaChat = document.querySelector(".caja-chat");
      const nuevoMensajeUsuario = document.createElement("div");
      nuevoMensajeUsuario.classList.add("message", "saliendo");
      nuevoMensajeUsuario.innerHTML = `<p>${mensaje}</p>`;
      cajaChat.appendChild(nuevoMensajeUsuario);

      mensajeInput.value = ""; // Limpiar el input después de enviar el mensaje
      
    } try {

      // Enviar el mensaje a la API de la IA
      const respuestaIA = chatRequest(apiKey, { model: "gpt-3.5-turbo", messages: [{ role: "user", content: mensaje }] }); // Función para enviar el mensaje a la IA
    // Verifica el código de respuesta antes de acceder a la respuesta
if (respuestaIA && respuestaIA.choices && respuestaIA.choices[0] && respuestaIA.choices[0].message) {
      // Mostrar la respuesta de la IA en el chat como 'entrada'
      const nuevoMensajeIA = document.createElement("div");
      nuevoMensajeIA.classList.add("message", "entrada");
      nuevoMensajeIA.innerHTML = `<p>${respuestaIA.choices[0].message.content}</p>`;
      cajaChat.appendChild(nuevoMensajeIA);
    } else {
      console.error("La respuesta de la IA no tiene el formato esperado:", respuestaIA);
    }
    } catch (error) {
      console.error("Error al obtener la respuesta de la IA:", error);
      // Manejar el error, mostrar un mensaje de error, etc.
    }
  }

  chatElement.querySelector("#enviarMensaje").addEventListener("click", enviarMensaje);

  return chatElement;
};
