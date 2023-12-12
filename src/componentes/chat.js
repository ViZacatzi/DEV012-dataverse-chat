export const chat = () => {

  const chatElement = document.createElement('div');

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `<div class="vista-chat">
  <div class="lista-de-usuarios">
    <div class="usuario">
    <img class="img-chat" src="peliculas/1408.jpg" alt="Usuario 1" />
    <span>Usuario 1</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/carrie.jpg" alt="Usuario 2" />
    <span>Usuario 2</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/childrencorn.jpg" alt="Usuario 3" />
    <span>Usuario 3</span>
    </div>
    <!-- Agrega más usuarios según sea necesario -->
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
  return chatElement;
};