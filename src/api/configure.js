import axios from 'axios';
import env from '../../env.js'; 
let authToken = env.auth_token;

const api = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': authToken ? `Bearer ${authToken}` : null, 
  },
});

// Función para establecer el token de autorización (Bearer token)
export const setAuthToken = (token) => {
  authToken = token;
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
