import api from './configure';

const getNotificationsWebApi =  async() =>{
try {
    const response = await api.get('/notifications')
    return response.data
} catch (error) {
    console.log('Error al obtener las notificaciones '+error)
}
}

const updateAllNotificationsWebApiSeen =async()=>{
    try {
        const response = await api.put('/markAllNotificationsAsSeen')
        return response
    } catch (error) {
        console.log('Error al cambiar el estado de todas las notificaciones ' +error)
    }
}

export { getNotificationsWebApi, updateAllNotificationsWebApiSeen };