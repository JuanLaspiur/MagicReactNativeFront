import api from './configure';
import { saveToSecureStore } from '../helpers/ExpoSecureStore';
import { setTokenString } from './AuthToken';
import axios from 'axios';
import env from '../../env';

const login = async (email, password) => {
  try {
    const response = await api.post('/loginReact', { email, password });

    await saveToSecureStore("token", response.data.token);

    setTokenString(response.data.token);

    const userResponse = await axios.get(`${env.BACK_URL}/user_by_id/${response.data.user_id}`, {
      headers: {
        Authorization: `Bearer ${response.data.token}`
      }
    });

    if(userResponse.data.deleted){
      alert('Usuario eliminado')
      return null
    } else {

    await saveToSecureStore("user", JSON.stringify(userResponse.data));

    return response.data.token; }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Revise su contraseña o su correo.');
    throw error; 
  }
};

export { login };


