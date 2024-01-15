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

5. En este proyecto la usuaria entrará a la ruta llamada Api-Key, donde podrá
   ingresar su clave API, esto para que pueda chatear con la IA.

6. La usuaria al ingresar una URL que no reconozca la página la redirigira a
   una vista de "error 404" donde tendra un boton que la devuelva a la vista
   principal.



## 3. Diseño de la Interfaz


Diseñamos la página siguiendo el estilo del proyecto anterior donde rescatamos
de la interfaz los tonos obscuros, la imagen de fondo, los estilos de letra,
agregando detalles dependiendo la necesidad de cada vista de la SPA.


  - Prototipo de alta fidelidad

  - ![283193325-ba9b6bff-f8d6-4a81-94e5-9d353b95368e](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/7ca9086f-ce09-4a91-902a-1e507d0cf8c5)
  - ![captura_de_pantalla_2024-01-15_a_la_s__8 34 16___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/ff5e327f-7317-44b4-8984-cecdce79d7f1)
  - ![captura_de_pantalla_2024-01-15_a_la_s__11 48 05___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/ec7893ec-6381-4054-9142-4323e4095623)



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


**para la pagina utilizamos HTML para ingresar el titulo de la pagina, asi como un
una imagen para icono para que se visualice en la parte superior de la pestaña. 
Le dimos estilos a la vista de home, de igual manera a las otras 3 vistas desde CSS
respetando el estilo que ya teniamos en el anterior proyecto.
Todo lo referente a funcionalidad de:
filtros, ordenamiento, boton para borrar, guardar apikey 
en el localstorage, chat con personaje y las 4 rutas. Lo implementamos ulitizando JS 

![captura_de_pantalla_2024-01-15_a_la_s__11 51 54___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/f47f094f-7552-456e-b881-9dd1b5995eef)

![captura_de_pantalla_2024-01-15_a_la_s__11 52 04___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/d3f9e173-a615-4e53-8466-ad3dfbaf6442)

![captura_de_pantalla_2024-01-15_a_la_s__11 53 51___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/34543837-21be-4738-9e4d-fbbb83ef850b)


![captura_de_pantalla_2024-01-15_a_la_s__11 53 51___a m _720](https://github.com/ViZacatzi/DEV012-dataverse-chat/assets/144548383/17535cea-c85e-41f4-a12d-339823eb33ee)

**Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar.

