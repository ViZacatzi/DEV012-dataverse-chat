export const chat = () => {

  const chatElement = document.createElement('div');

  // Agregar el contenido al elemento header
  chatElement.innerHTML = `<div class="vista-chat">
  <div class="lista-de-usuarios">
    <div class="usuario">
    <img class="img-chat" src="peliculas/carrie.jpg" alt="carrie" />
    <span>Carrie</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/theshining.jpg" alt="Usuario 2" />
    <span>Jack Torrance</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src= "peliculas/it.jpg" alt="Usuario 3" />
    <span>IT</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/misery.jpg" alt="Usuario 1" />
    <span>Paul Sheldon</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/millaverde.jpg" alt="Usuario 1" />
    <span>Arlen Bitterbuck</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/doctorsleep.jpg" alt="Usuario 1" />
    <span>Danny Torrance</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/secretwindow.jpg" alt="Usuario 1" />
    <span>Mort Rainey</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/doloresclaiborne.jpg" alt="Usuario 1" />
    <span>dolores claiborne</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/petsematary.jpg" alt="Usuario 1" />
    <span>Louis Creed</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/standbyme.jpg" alt="Usuario 1" />
    <span>Gordie Lachance</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/deadzone.jpg" alt="Usuario 1" />
    <span>Johnny Smith</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/thelangoliers.jpg" alt="Usuario 1" />
    <span>Capitán Bryan Engle</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/dreamcatcher.jpg" alt="Usuario 1" />
    <span>coronel Abraham Curtis</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/red.rose.jpg" alt="Usuario 1" />
    <span>Rochelle “Roch”</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/firestarter.jpg" alt="Usuario 1" />
    <span>Charlene “Charlie” McGee </span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/needful.jpg" alt="Usuario 1" />
    <span> Gaunt Leland</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/goldenyears.jpg" alt="Usuario 1" />
    <span>conserje</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/graveyardshift.jpg" alt="Usuario 1" />
    <span>David Andrews</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/childrencorn.jpg" alt="Usuario 1" />
    <span> Eden</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/shawshank.jpg" alt="Usuario 1" />
    <span>Andy Dufresne</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/1408.jpg" alt="Usuario 1" />
    <span> Mike Enslin</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/themist.jpg" alt="Usuario 1" />
    <span>David Drayton</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/geraldsgames.jpg" alt="Usuario 1" />
    <span> Gerald Burlingame</span>
    </div>
    <div class="usuario">
    <img class="img-chat" src="peliculas/cujo.jpg" alt="Usuario 1" />
    <span>Cujo</span>
    </div>

  
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