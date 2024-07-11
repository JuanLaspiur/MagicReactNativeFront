import api from './configure'; 
import apiFormData from './configure'
import env from  '../../env'

const getAllMyChats = async(userID)=>{
    try {
        const response = await api.get('/chatsByUserId/'+userID);
        return response.data 
    } catch (error) {
        console.error(error)
    }
}

const getChatBychatID = async(chatID)=>{
    try {
        const response = await api.get('/chat_by_id/'+chatID); 
        return response 
    } catch (error) {
        console.error(error)
    }
}

const ChatPrivadoByuserID = async(otroUserID)=>{
    try {
        const response = await api.post('/chat_privado/'+otroUserID); 
        return response 
    } catch (error) {
        console.error(error)
    }
}

const sendMessageBychatID = async(data,chatID)=>{
    try {
        const response = await api.post('/send_message/'+chatID, data); 
        return response 
    } catch (error) {
        console.error(error)
    }
}

const sendImageMessage = async (chatID, base64Image) => {
    try {
      const response = await api.post(`/createWithBase64/${chatID}`,{
        base64Image: base64Image
      });
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar imagen mensaje:', error);
    }
  };
 
const udateChatBychatID = async(chatID)=>{
    try {
        const response = await api.put('/chat/'+chatID); 
        return response 
    } catch (error) {
        console.error(error)
    }
}



export { getAllMyChats, getChatBychatID, ChatPrivadoByuserID, sendMessageBychatID, udateChatBychatID,sendImageMessage }

/*
    Route.get("all_chats", "ChatController.index");
    Route.get("chat_by_id/:id", "ChatController.chatById");
    Route.post("chat_privado/:user_id", "ChatController.store");
    Route.post("send_message/:id", "ChatController.create");
    Route.put("chat/:id", "ChatController.update");
*/
