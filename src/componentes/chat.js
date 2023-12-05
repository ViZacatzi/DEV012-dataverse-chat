export const chat = () => {

  const chatElement = document.createElement('div');

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `
                          <div>
                           <h4 class="texto">Chatea con...</h4><br>
                          </div>
                          <div class="contenedor-vista-chat">
                            <div class="caja-chat"></div>
                            <div class="contenedor-chat">
                              <textarea for="enviar" class="texto-chat"></textarea><br>
                              <button>Enviar</button>
                            </div>
                            <div class="contenedor-boton-regreso">
                              <button class="boton-chat">Regresar</button>
                            </div>
                          </div>
`;
  return chatElement;
};