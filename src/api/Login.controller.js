// Ejemplo de uso en otro archivo

import api, { setAuthToken } from './configure';

// Función para iniciar sesión y obtener el token
const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    const { token } = response.data; // Suponiendo que la API devuelve un token después del login
    setAuthToken(token); // Establecer el token Bearer para las futuras solicitudes
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export { login };
