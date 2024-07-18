import api from './configure'; 
import apiFormData from './configure'


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
      return response.data;
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
      return response;
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

const createQuedadaBack = async (form) => {
  try {
    const response = await apiFormData.post('/createQuedadaReactNative', form);
    return response.data;
  } catch (error) {
    console.error('Error al crear quedada:', error);
    throw error;
  }
};


const updateQuedada = async (updatedQuedada) => {
  try {
    const response = await api.put(`/editQuedadaReactNative`, updatedQuedada);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar quedada con ID ${id}:`, error);
    throw error;
  }
};

const getQuedadaCategories = async () =>{
  try{
    const response = await api.get('/categories')
    return response.data
  }catch (error){
    console.error(`Axios Error al obtener categorias :`, error);
    throw error;
  }
}

// asistir/:id

const asistirAQuedada = async (quedadaID) => {
  try{
    const response = await api.post('/asistir/'+quedadaID)
    return response.data
  }catch (error){
    console.error(`Error al obtener categorias :`, error);
    throw error;
  }
}

const confirmarAQuedada = async (userID, quedadaID, bool) => {
  try {
    // Configura el cuerpo de la solicitud con los datos necesarios
    const response = await api.put('/actualizarAsistencia', {
      userId: userID,
      quedadaId: quedadaID,
      asistencia: bool
    });
    
    return response.data;
  } catch (error) {
    console.error(`Error al asistir a la quedada:`, error);
    throw error;
  }
};


const invitar = async(quedadaID, userID )=>{
  try {
    const response = await api.post('/invitar/'+quedadaID,  { invitado: { user_id: userID, asistencia: false, rating_id: null }, invitar: true})
    return response
  } catch (error) {
    console.log('Error al invitar ')
  }
}

const solicitarParticipacionPremium = async(quedadaID) =>{
  try {
    const response = await api.post('/solicitarPremium/'+quedadaID)
    return response.data
  } catch (error) {
    console.log('Error al solicitar participación en evento premium '+error)
  }
}

/*
    Route.get("getQuedadasAsistenciaPorConfirmar","QuedadaController.getQuedadasAsistenciaPorConfirmar")
    Route.get("getQuedadasAsistenciaConfirmadas","QuedadaController.getQuedadasAsistenciaConfirmadas")

*/
const quedadasPorConfirmarAsistencia = async () =>{
  try{
    const response = await api.get('/getQuedadasAsistenciaPorConfirmar')
    return response.data
  }catch(error){
    console.log('Error '+error)
  }
}


const quedadasAsistenciaAsistenciaConfirmada = async () =>{
  try{
    const response = await api.get('/getQuedadasAsistenciaConfirmadas')
    return response.data
  }catch(error){
    console.log('Error '+error)
  }
}

const gestionSolicitudQuedadaPremium = async (userID,quedadaID, bool)=>{
  try {
    const response = await api.put(`/gestionarSolicitudParticipacion/${quedadaID}`,
      {
        user_id: userID,
        status: bool
      }

    )
    return response
  } catch (error) {
    console.log('Error '+error)
  }
}

export { invitar,confirmarAQuedada,gestionSolicitudQuedadaPremium, solicitarParticipacionPremium, quedadasPorConfirmarAsistencia,quedadasAsistenciaAsistenciaConfirmada, getQuedadaCategories,getAllQuedadas,getAllQuedadasPremium, getQuedadaById, createQuedadaBack, updateQuedada, getQuedadasByUserId, getQuedadasAsistidasByUserId, asistirAQuedada };
