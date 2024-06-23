function capitalizeFirstLetter(text) {
    if (typeof text !== 'string' || text.length === 0) {
      return text; // Retorna el texto sin cambios si no es una cadena válida
    }
  
    const firstLetter = text.charAt(0).toUpperCase(); // Obtiene la primera letra y la convierte a mayúscula
    const restOfString = text.slice(1); // Obtiene el resto del texto
  
    return firstLetter + restOfString; // Retorna la cadena con la primera letra en mayúscula
  }
  

  export {capitalizeFirstLetter}