import api from './configure';
import { saveToSecureStore, getValueFromSecureStore } from '../helpers/ExpoSecureStore';
import { setTokenString } from './AuthToken';
import axios from 'axios';
import env from '../../env';                                             // aclaración importante:
import { verificarYActualizarExpoPushToken} from "../api/ExpoPushToken" // expo push token es el token de las notificaciones no el token de sesión
                                                                        // cada vez que refiere el token de notificaciones su nomenclatura es "ExpoPushToken" por las
                                                                        //notificaciones push

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

   const Expo_push_token = await getValueFromSecureStore('ExpoToken')
   const userID = userResponse.data._id;
   await verificarYActualizarExpoPushToken(userID,Expo_push_token)
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

    const Expo_push_token = await getValueFromSecureStore('ExpoToken')
    const userID = userResponse._id;
    await verificarYActualizarExpoPushToken(userID,Expo_push_token)

    await saveToSecureStore("user", JSON.stringify());
    if(userResponse && authToken.length > 0) {
      return true
    } else {
      alert('Este es el usuario obtenido '+JSON.stringify(userResponse) + 'id del usuario '+userResponse._id)
      return false
    }

  } catch (error) {
    console.log('Error singInWidthGoogle ', error)
  }
}
export { login, singInWidthGoogle };



