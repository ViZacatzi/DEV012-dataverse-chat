export const footer = () => {
  // Crear un nuevo elemento header en lugar de usar el nombre de la función
  const footerElement = document.createElement("footer");

  // Agregar el contenido al elemento header
  footerElement.innerHTML = `<p name="titulo">Creado por Nohemi Rodríguez y Victoria Zacatzi</p>`;

  return footerElement;
};
