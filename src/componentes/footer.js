export const footer = () => {
  // Crear un nuevo elemento header en lugar de usar el nombre de la función
  const footerElement = document.createElement('footer');

  // Agregar el contenido al elemento header
  footerElement.innerHTML = `<footer name="titulo">creado</footer>`;

  return footerElement;
};