import api from './configure';

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

const getUserInfo = async() => {
  try {
    const response = await api.get(`user_info2`)
    return response
  } catch (error) {
    console.error('Error al obtener informacion del usuario: ', error);
  } 
}


export {getUserById, getAnimales,getSeguidores_seguidos, seguidoresQueMeSiguen, seguidoresYseguidos, todosLosContactos, seguirUsuario, getUserInfo}
