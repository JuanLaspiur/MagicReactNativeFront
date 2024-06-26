import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserById } from '../../../api/User.controller'
import { getChatBychatID } from '../../../api/Chat.controller';

const ItemMessageBox = ({ message, profileImage = require('../../../assets/Animals/ICONOS A COLOR-21.png'), name = 'John', lastName = 'Doe', timestamp = 1660424800000 }) => {
  const navigation = useNavigation();
  const [user , setUser] = useState(null)
  const [ chat , setChat ] = useState([])
  const [ mensajes , setMensajes ] = useState([])
  const [lastMessage, setLastMessage] = useState('Hey, how are you?'); // Estado para almacenar el último mensaje

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await getUserById(message.otro_id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
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

    fetchUserById();
    fetchChatById();
  }, []);

  const handlePress = () => {
    navigation.navigate('ChatRoom');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.messageContainer}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
      <View style={styles.messageDetails}>
      <Text style={styles.nameText}>{user?.name} {user?.last_name}</Text>
      { /*  <Text style={styles.status}>{lastMessage}</Text> */ }
        <Text style={styles.lastMessageText}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
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
  status: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#AED0F6', // Celeste
  },
  lastMessageText: {
    fontSize: 14,
    color: '#666',
  },
  timestampText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default ItemMessageBox;
