import api from './configure';
import { apiNoAuth } from  './configure'


const registerUser =  async(requestBody) => {
  try {
    const response = await api.post('/registerWithReactNative', requestBody)
    return response
  } catch (error) {
    console.log('Error al crear usuario '+error)
  }
}

const loginWithGoogle = async(userGoogleToken) => {
  try {
    let response = await api.post('/loginByGoogle2WithReactNative', { googleToken: userGoogleToken})
    response = JSON.stringify(response)
    alert('Response desde el axios ' +response)
    return response.data
  } catch (error) {
    console.log('Error en el metodo axios loginWithGoogle ' +error)
  }
}

const getUserById = async (userID) => {
  try {
    const response = await api.get(`/user_by_id/${userID}`);
    return response;
  } catch (error) {
    console.error('Error al obtener el usuario por id:', error);
}
};

const getSeguidores_seguidos = async (userID, num) =>{
  try {
    const response = await api.get(`/seguidores_seguidos/${num}/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener segfuidores o seguidos:', error);
}
}

const seguidoresYseguidos = async (userID) =>{
  try {
    const response = await api.get(`/seguidores_seguidos/${num}/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener segfuidores o seguidos:', error);
}
}

const seguidoresQueMeSiguen = async (userID) => {
  try {
    const response = await api.get(`/seguidoresQueMeSiguen/${userID}`)
    return response.data
  } catch (error) {
    console.error('Error al obtener seguidores y que me siguen:', error);
  }
}

// all_user

const todosLosContactos = async () =>{
  try {
    const response = await api.get(`/all_user/`)
    return response.data
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
  }
}


const seguirUsuario = async (seguidoID) => {
  try {
    const response = await api.post(`/seguir_user/`,{seguidoID})
    return response.data
  } catch (error) {
    console.error('Error seguir usuario:', error);
  } 
}

// animales

const getAnimales = async () => {
  try {
    const response = await api.get(`/animales/`)
    return response.data
  } catch (error) {
    console.error('Error seguir usuario:', error);
  } 
}


const getCities = async() => {
  try {
    const response = await api.get('/cities/')
    return response.data
  } catch (error) {
    console.error('Error al conseguir las ciudades: ', error);
  }
}

const getCommunities = async () => {
  try {
    const response = await api.get('/communities/')
    return response.data
  } catch (error) {
    console.error('Error al obtener las comunidades ', error);
  
  }
}

const getUserInfo = async() => {
  try {
    const response = await api.get(`user_info2`)
    return response
  } catch (error) {
    console.error('Error al obtener informacion del usuario: ', error);
  } 
}


const updateUserInfo = async (data, userID) => {
  try {
    const response = await api.put('update_user_info/'+userID, data)
    return response
  } catch (error) {
    console.log('Error')
  }
}


const deleteMyUser = async (userID) => {
  try {
    const response = await api.put('deleteSimbolic/'+userID, { deleted: true})
    return response
  } catch (error) {
    console.log('Error')
  }
}
// Route.get("email_send_app/:email", "UserController.recuperacionapp");
const handlePasswordRecover = async(email)=> {
  try {
    const response = await api.get('/email_send_app'+email)
    return response
  } catch (error) {
    console.log('Error')
  }
}



export {registerUser, loginWithGoogle, handlePasswordRecover,getUserById,getCities,updateUserInfo,getCommunities ,deleteMyUser,getAnimales,getSeguidores_seguidos, seguidoresQueMeSiguen, seguidoresYseguidos, todosLosContactos, seguirUsuario, getUserInfo}
