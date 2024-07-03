
import api, { setAuthToken } from './configure';

const login = async (email, password ) => {
  try {
     const response = await api.post('/loginReact', {email, password});
    // const { token } = response.data; 
    // setAuthToken(token);
    console.log(response) 
   //return response;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};

const verifyUser = async ( email, password ) => {
  try {
     const response = await api.post('/verificar_user', {email, password});
     return response
  } catch (error) {
    console.error('Error al verificar usuario: ', error);
  }
}


export { login };
