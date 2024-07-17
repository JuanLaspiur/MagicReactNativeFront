import api from './configure';
import { saveToSecureStore } from '../helpers/ExpoSecureStore';
import { setTokenString } from './AuthToken';
import axios from 'axios';
import env from '../../env';

const login = async (email, password) => {
 try {
    const response = await api.post('/loginReact', { email, password });
    await saveToSecureStore("token", response.data.SESSION_INFO.token);
   console.log(response)

   setTokenString(response.data.SESSION_INFO.token);
   

    const userResponse = await axios.get(`${env.BACK_URL}/user_by_id/${response.data.SESSION_INFO._id}`, {
      headers: {
        Authorization: `Bearer ${response.data.SESSION_INFO.token}`
      }
    });

    if(userResponse.data.deleted){
      alert('Usuario eliminado')
      return null
    } else {

    await saveToSecureStore("user", JSON.stringify(userResponse.data));
    console.log('User del LoginController.js : ', JSON.stringify(userResponse.data))

    return response.data.SESSION_INFO.token; 
    
    }
  } catch (error) {
   console.error('Error al iniciar sesión:', error);
   alert('Error al iniciar sesión. Revise su contraseña o su correo.');
   throw error; 
  }
};


const singInWidthGoogle = async(user, authToken) => {
  try {
    setTokenString(authToken);

    const userResponse = await axios.get(`${env.BACK_URL}/user_by_id/${user._id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    await saveToSecureStore("user", JSON.stringify(userResponse));
    if(user && authToken) {
      return true
    }
    return false
  } catch (error) {
    console.log('Error singInWidthGoogle ', error)
  }
}
export { login, singInWidthGoogle };



