
var tokenString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2Njg2Y2VkNGFlYWIzZjNkMTNlOGFiYjkiLCJpYXQiOjE3MjAxMTA5OTF9.jPI3mqtWwE_pcawxV5FEujUlVnRZ8w_AH0ohbA20KC8";

// Función para modificar la variable string si fuera necesario
const setTokenString = (newValue) => {
  console.log('Se modoficó el token ')
  tokenString = newValue;
};

const getTokenSting = () => {
 return tokenString
}
// Exportación de la variable y la función
export { tokenString, setTokenString, getTokenSting };
