import api from './configure'; 


const getAllQuedadas = async () => {
  try {
    const response = await api.get('/all_quedadas'); 
    return response.data;
  } catch (error) {
    console.error('Error al obtener quedadas:', error);
    throw error;
  }
};

const getAllQuedadasPremium = async () => {
    try {
      const response = await api.get('/all_quedadas_premium'); 
      return response;
    } catch (error) {
      console.error('Error al obtener quedadas:', error);
      throw error;
    }
  };

  const getQuedadasByUserId = async (userId) => {
    try {
      const response = await api.get(`/quedadas_user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener quedadas del usuario con ID ${userId}:`, error);
      throw error;
    }
  };

  const getQuedadasAsistidasByUserId = async (userId) => {
    try {
      const response = await api.get(`/evetos_asistidos/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener quedadas del usuario con ID ${userId}:`, error);
      throw error;
    }
  };


const getQuedadaById = async (id) => {
  try {
    const response = await api.get(`/quedada_by_id/${id}`); 
    return response.data;
  } catch (error) {
    console.error(`Error al obtener quedada con ID ${id}:`, error);
    throw error;
  }
};

const createQuedada = async (quedada) => {
  try {
    const response = await api.post('/register_quedada', quedada); 
    return response.data;
  } catch (error) {
    console.error('Error al crear quedada:', error);
    throw error;
  }
};

const updateQuedada = async (id, updatedQuedada) => {
  try {
    const response = await api.put(`/edit_quedada/${id}`, updatedQuedada);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar quedada con ID ${id}:`, error);
    throw error;
  }
};


export { getAllQuedadas,getAllQuedadasPremium, getQuedadaById, createQuedada, updateQuedada, getQuedadasByUserId, getQuedadasAsistidasByUserId };
