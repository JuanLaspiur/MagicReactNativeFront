import api from './configure'; 

const getLasterAdminSurvey = async () => {
    try {
      const response = await api.get('/encuestas-admin'); 
      const ultimaEncuesta = response.length > 0 ? response[response.length - 1] : []
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