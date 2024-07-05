import axios from 'axios';
import env from '../../env.js';
import { tokenString, setTokenString, getTokenSting } from './AuthToken'; 



const api = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getTokenSting() ? `Bearer ${getTokenSting()}` : getTokenSting(),
  },
});

const apiFormData = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': undefined,
    'Authorization': getTokenSting() ? `Bearer ${getTokenSting()}` : getTokenSting(),
  },
});

export { api, apiFormData };
export default api;
