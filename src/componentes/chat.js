export const chat = () => {

  const chatElement = document.createElement('div');

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `
                          <div>
                           <h4>Chatea con...</h4><br>
                          </div>
                          <div>
                            <textarea></textarea><br>
                          </div>
                          <div>
                            <textarea></textarea><br>
                            <button class="boton-chat">Enviar</button>
                          </div>
`;
  return chatElement;
};