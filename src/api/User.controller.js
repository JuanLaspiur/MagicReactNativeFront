import api from './configure';

const getUserById = async (userID) => {
  try {
    const response = await api.get(`/user_by_id/${userID}`);
    return response;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
}
};

const getSeguidores_seguidos = async (userID, num) =>{
  try {
    const response = await api.get(`/seguidores_seguidos/${num}/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
}
}

const seguidoresYseguidos = async (userID) =>{
  try {
    const response = await api.get(`/seguidores_seguidos/${num}/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching friends by user ID:', error);
}
}

const seguidoresQueMeSiguen = async (userID) => {
  try {
    const response = await api.get(`/seguidoresQueMeSiguen/${userID}`)
    return response.data
  } catch (error) {
    console.error('Error fetching friends by user ID:', error);
  }
}

// all_user

const todosLosContactos = async (userID) =>{
  try {
    const response = await api.get(`/all_user/${userID}`)
    return response.data
  } catch (error) {
    console.error('Error fetching friends by user ID:', error);
  }
}
export {getUserById, getSeguidores_seguidos, seguidoresQueMeSiguen, seguidoresYseguidos, todosLosContactos}
