export const chat = () => {

  const chatElement = document.createElement('div');

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `
                          
                           <h4 class="texto">Chatea con...</h4><br>
                          
                          
                            <input class="caja-chat"></input>
                            
                              <textarea for="enviar" class="texto-chat"></textarea><br>
                              <button>Enviar</button>
                            
                            
                              <button class="boton-chat">Regresar</button>
                            
`;
  return chatElement;
};