import api from './configure'; 

const getLasterAdminSurvey = async () => {
  try {
    const response = await api.get('/encuestas-admin'); 
    let ultimaEncuesta = response.data;
    
    if (ultimaEncuesta.length > 0) {
      ultimaEncuesta = ultimaEncuesta[ultimaEncuesta.length - 1];
    } else {
      ultimaEncuesta = null; 
    }
    
    return ultimaEncuesta;
  } catch (error) {
    console.error('Error al obtener encuesta de admin: ', error);
    throw error;
  }
};


const getLasterAdminSurveyOptions = async (surveyID) =>{
    try {
    const response = await api.get('opciones_admin123/id/' + surveyID)
    return response
} catch (error) {
    console.error('Error al las opciones de la encuesta de admin: ', error);
    throw error;
  }
}  

export {getLasterAdminSurvey, getLasterAdminSurveyOptions};