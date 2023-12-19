export const chat = () => {
  const chatElement = document.createElement("div");

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `<div class="vista-chat">
  

  
  </div>
  <div class="contenedor-chat">
    <div class="caja-chat">
      <div class="message entrada">
        <p>Hola, ¿cómo estás?</p>
      </div>
      <div class="message saliendo">
        <p>¡Hola! Estoy bien, gracias.</p>
      </div>
      <!-- Mensajes adicionales -->
    </div>
    <div class="cuadro-de-entrada">
      <input type="text" placeholder="Escribe un mensaje..." />
      <button>Enviar</button>
    </div>
  </div>
</div>
                            <button class="boton-chat">Regresar</button>                        
`;
  const botonRegresar = chatElement.querySelector(".boton-chat");

  botonRegresar.addEventListener("click", () => {});

  return chatElement;
};
