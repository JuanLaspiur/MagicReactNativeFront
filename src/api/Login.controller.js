
import api, { setAuthToken } from './configure';

const login = async (credentials) => {
  try {
    const response = await api.post('/loginReact', credentials);
    // const { token } = response.data; 
    // setAuthToken(token); 
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export { login };
