import axios from 'axios';
import env from '../../env.js';
import { tokenString, setTokenString } from './AuthToken'; 



const api = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': tokenString ? `Bearer ${tokenString}` : env.auth_token,
  },
});

const apiFormData = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': undefined,
    'Authorization': tokenString ? `Bearer ${tokenString}` : env.auth_token,
  },
});

export { api, apiFormData };
export default api;
