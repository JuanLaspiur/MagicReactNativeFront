import api from './configure';

const getUserById = async (userID) => {
  try {
    const response = await api.get(`/user_by_id/${userID}`);
    return response;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error; 
}
};

const getSeguidores_seguidos = async (userID) =>{
  try {
    const response = await api.get(`/seguidores_seguidos/${userID}`);
    return response;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error; 
}
}
export {getUserById, getSeguidores_seguidos}
