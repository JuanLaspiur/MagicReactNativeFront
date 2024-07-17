import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getQuedadaById } from '../../../api/Quedada.controller';
import { getChatBychatID } from '../../../api/Chat.controller';
import env from '../../../../env';

const ItemQuedadaMessageBox = ({ message }) => {
  const navigation = useNavigation();
  const [quedada, setQuedada] = useState(null);
  const [chat, setChat] = useState([]);
  const [lastMessage, setLastMessage] = useState('Hey, how are you?'); 
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    const fetchQuedadaById = async () => {
      try {
        const response = await getQuedadaById(message.evento_id);
        console.log('Respuesta quedada por id  ' + JSON.stringify(response));
        setQuedada(response);
      } catch (error) {
        console.log('Error al obtener la quedada por id en el chat ItemQuedadaMessageBox.jsx ' + error);
      }
    };

    const fetchChatById = async () => {
      try {
        const response = await getChatBychatID(message._id);
        setChat(response.data);
        // Actualizar el estado del último mensaje
        if (response.data && response.data.messages && response.data.messages.length > 0) {
          const lastMessageText = response.data.messages[response.data.messages.length - 1].text;
          setLastMessage(lastMessageText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuedadaById();
    fetchChatById();
    setImageUri(`${env.BACK_URL}/quedada_img/${message.evento_id}`);
  }, [message.evento_id, message._id]);

  const handlePress = () => {
    navigation.navigate('ChatRoom', { chat });
  };

  return (
    <>
      {quedada?.status !== 3 && (
        <TouchableOpacity onPress={handlePress} style={styles.messageContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: imageUri }} style={styles.profileImage} />
          </View>
          <View style={styles.messageDetails}>
            <Text style={styles.nameText}>{quedada?.name}</Text>
            <Text style={styles.lastMessageText}>{lastMessage}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageDetails: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessageText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ItemQuedadaMessageBox;
