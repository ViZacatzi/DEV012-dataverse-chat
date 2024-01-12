# StephenFilmVerse Chat

## Índice


* [1. Definición del producto](#1-definicion-del-producto)
* [2. Historias de usuaria](#2-historias-de-usuaria)
* [3. Diseño de la Interfaz](#3-diseño-de-la-interfaz)
* [4. Problemas encontrados de usabilidad](#4-problemas-encontrados-de-usabilidad)
* [5. Implementación de la Interfaz de Usuaria (HTML/CSS/JS)](#5-implementacion-de-la-interfaz-de-usuaria)

***

## 1. Definición del producto

Al ser una pagina SPA donde el reto era implementar diferentes vistas, primero 
decidimos modificar un poco la primera vista del home ya que retomando al 
el proyecto anterior nos gustó la interfaz que tenía así que solo hicimos 
pequeños cambios.

Como nos gusto la interfaz que ya estaba implementada, para que la pagina se
viera continua, las siguientes vistas decidimos hacerlas siguiendo el diseño, 
es decir, usando el mismo tipo de botones, la misma imagen de fondo, los mismos 
tonos para la caja de chat, mismo tipo de letra. 

Aunque cada vista tenia su propio diseño único que la caracteriza y resalta
su usabilidad.


## 2. Historias de usuaria

Esta página es dirigida para usuarias amantes de las películas de ciencia ficción,
terror y thriller. Así como usuarias fans de Stephen King.

1. Igual que en el proyecto anterior la usuaria podrá filtrar, ordenar y ver una
   estadistica de las péliculas presentadas en la página.
   
2. En este proyecto la usuaria además podra ingresar a cada pélicula y ver la
   descripción de la pélicula seleccionada.

3. En la vista del detalle de cada pélicula, la usuaria podrá chatear con el
   personaje principal de cada película y este tendrá que responder.

4. En este proyecto la usuaria entrará a la ruta llamada Api-Key, donde podrá
   ingresar su clave API, esto para que pueda chatear con la IA.

5. La usuaria al ingresar una URL que no reconozca la página la redirigira a
   una vista de "error 404" donde tendra un boton que la devuelva a la vista
   principal.


## 3. Diseño de la Interfaz

**Ya que retomamos el proyecto anterior

Diseñamos la página siguiendo el estilo del proyecto anterior donde rescatamos
de la interfaz los tonos obscuros, la imagen de fondo, los estilos de letra,
agregando detalles dependiendo la necesidad de cada vista de la SPA.

## 4. Problemas encontrados de usabilidad

//Aqui habiamos visto algunos problemas al iniciar el diseño de la pagina,
es decir, vimos que al ingresar a la pagina del detalle del personaje y al 
intentar chatear con el presonaje de la pelicula selecionada, no podia 
hacerlo ya que no habia ingresado su Api-Key, pero notamos que al ser un 
boton común en la pagina de inicio, la usuaria realmente no sabia para que 
se usaba, entonces decidimos agregarle texto donde le informabamos a la 
usuaria que si queira chatear con los personajes de las peliculas debia 
ingresar a esa vista para que ingresara su Api-Key y tuviera la 
funcionalidad.

//Otro problema que vimos en el diseño de la página es que al principio 
habiamos pensado que al ingresar a la vista de detalle, habria un boton que
redireccionara a la usuaria auna vista de chat, pero nos dimos cuenta que 
la usuaria al ver otra vista, perdia la oportunidad de leer los detalles de la 
pelicula y asi dejaria de hacerle preguntas más interesantes a la IA sobre
la misma, asi que decidimos que el chat se implementara en la vista del detalle 
del personaje y mejorar la "experiencia de la usuaria " "cuando al usuario le 
gusta estar en la pagina".

//Al implementar el diseño queriamos que al ingresar a la vista del chat y 
intentar chatear con el personaje principal de la pelicula, llevara a la  
usuaria a la vista de la Api-Key o marcara una error de que necesitaba una Api-Key
para esa funcionalidad, pero creimos que hariamos que la experiencia de la usuaria
no fuera agradable al ser redireccionada o recibir mensajes de error, por lo que
decidimos que el chat se abriera pero no funcionara, y al inicio de la pagina
agregar un texto al boton advirtiendo que no va a funcionar el chat si no tiene
una Api-Key.

## 5. Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

**Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.


