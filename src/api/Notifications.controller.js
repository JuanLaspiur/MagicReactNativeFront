import { err } from 'react-native-svg';
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

const hasUnreadNotifications = async()=>{
    try{
        const response = await api.get('/hasUnreadNotifications')
        return response.data.hasUnread
    } catch (error) {
        console.log('Error al obtener estado de la notificacion ' + error)
    }
}

export { getNotificationsWebApi, updateAllNotificationsWebApiSeen, hasUnreadNotifications };