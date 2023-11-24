export const chat = (data) => {
  let componenteChat = "";
  data.forEach((content) => {
    imagenChat += ` 
    <img class="imagen-chat" src="${content.imageUrl}">
    <input class="chat">
    <button class="enviar">Enviar</button>
        `;
  });

  const contenidoChat = document.createElement("main");
  contenidoChat.innerHTML = componenteChat;
  return contenidoChat;
};
