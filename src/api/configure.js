// configure.js

import axios from 'axios';
import env from '../../env.js'; // Asegúrate de tener un archivo env.js con la configuración de URL base

// Token de autorización inicial (puede ser null o un token válido)
let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NWY5OTFlZjdiY2UwMjJkNjIwZDI2ZGYiLCJpYXQiOjE3MTg3NDExNTV9.xnjAO_72_OLNusStIWvmPPJy5WgCCn1TLNz0uMw8plU";

const api = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': authToken ? `Bearer ${authToken}` : null, // Configura el token inicialmente
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
