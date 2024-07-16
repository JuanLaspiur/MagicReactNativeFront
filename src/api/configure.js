import axios from 'axios';
import env from '../../env.js';
import { getTokenSting } from './AuthToken'; 

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

const apiNoAuth = axios.create({
  baseURL: env.BACK_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api, apiFormData, apiNoAuth };
export default api;
