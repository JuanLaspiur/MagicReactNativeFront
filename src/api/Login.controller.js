
import api, { setAuthToken } from './configure';
import { saveToSecureStore } from '../helpers/ExpoSecureStore';
import { getUserById } from './User.controller';

const login = async (email, password ) => {
  try {
     const response = await api.post('/loginReact', {email, password});
         console.log(response.data)
         await saveToSecureStore("token", response.data.token); 
         let user = await getUserById(response.data.user_id);
         user = user.data
         await saveToSecureStore("user", JSON.stringify(user));
        return response.data.token;
  } catch (error) {
    alert('Error al ingresar sesión revise su contraseña o su correo')
  }
};


export { login };
