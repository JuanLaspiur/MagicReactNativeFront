import * as SecureStore from 'expo-secure-store';

async function saveToSecureStore(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error(`Error al guardar en SecureStore para la clave ${key}:`, error);
    throw error; 
  }
}

async function getValueFromSecureStore(key) {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
    console.log("🔐 Here's your value 🔐 \n" + value);
      return value;
    } else {
      console.log(`No se encontró valor en SecureStore para la clave ${key}`);
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener valor de SecureStore para la clave ${key}:`, error);
    throw error; 
  }
}

export { saveToSecureStore, getValueFromSecureStore };

  