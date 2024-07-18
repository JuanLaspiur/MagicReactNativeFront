import api from './configure'; 

const verificarYActualizarExpoPushToken = async(userID,ExpoPushToken)=>{
    try {
        const response = await api.put('/verificarYActualizarExpoPushToken',{
            userId: userID,
            ExpoPushToken:ExpoPushToken
              
        })
        console.log(response.message)
    } catch (error) {
      console.log('Error al actualizar el expo push token')  
    }
}

export { verificarYActualizarExpoPushToken }