export const header = () => {
  // Crear un nuevo elemento header en lugar de usar el nombre de la función
  const headerElement = document.createElement('header');

  // Agregar el contenido al elemento header
  headerElement.innerHTML = `<h1 name="titulo">StephenFilmVerse</h1>`;

  return headerElement;
};
