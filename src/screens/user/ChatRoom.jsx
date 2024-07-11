import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import AppHeader from "../../components/User/AppHeader";
import MessageHeader from "../../components/User/Messages/MessageHeader";
import * as ImagePicker from 'expo-image-picker'; 
import { sendMessageBychatID, sendImageMessage, getChatBychatID } from "../../api/Chat.controller";
import { getValueFromSecureStore } from '../../helpers/ExpoSecureStore'

const ChatRoom = ({ route }) => {
  const { user, chat, mensajes } = route.params;
  const [authUser, setAuthUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    (async () => { 
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se necesita permiso para acceder a la galería de imágenes.');
      }
    })();

    const getAuthUser = async() => {
      const data = await getValueFromSecureStore('user');
      setAuthUser(JSON.parse(data));
    };
    getAuthUser();

    if (chat.message) {
      setMessages(chat.messages); 
    } else {
      setMessages(chat.messages);
      faundMessagesByChatId(chat._id);
    }
  }, []);

  const faundMessagesByChatId = async(id) => {
    try {
      const response = await getChatBychatID(id);
      setMessages(response.data.messages);
    } catch (err) {
      console.log('Error al obtener el chat', err);
    }
  };

  const handleSend = async() => {
    if (inputText.trim() === "") return;
    const currentTime = getCurrentTime(); 
    const newMessage = {
      text: inputText,
      time: currentTime,
      isMine: true, 
    };
    setMessages([...messages, newMessage]);

    const sendMessaje = {
      message: inputText,
      user_id: authUser._id,
      chat_id: chat._id, 
    };
    
    try {
      await sendMessageBychatID(sendMessaje, chat._id);
    } catch (err) {
      console.log(err);
    }
    setInputText("");
  };

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const file = result.assets[0];
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.uri.split('/').pop(),
      });

      try {
        await sendImageMessage(chat._id, formData);
        alert('Imagen enviada correctamente');
      } catch (err) {
        console.error('Error al enviar la imagen:', err);
      }
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Chat" />
      <MessageHeader user={user} />
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages && messages.length > 0 && messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              (message.isMine || message.user_id === user._id) ? styles.myMessageContainer : styles.otherMessageContainer
            ]}
          >
            <View style={styles.messageContent}>
              <Text style={styles.messageText(message.isMine)}>{message.text}</Text>
            </View>
            <View style={styles.messageInfo}>
              <Text style={styles.messageOwner}>{(message.isMine || message.user_id === user._id) ? 'Tú' : `${message.full_name}`}</Text>
              <Text style={styles.messageTime}>{message.stamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.iconContainer}>
          <FontAwesome name="image" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <FontAwesome name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  messageBubble: {
    flexDirection: 'column', // Cambiado a column para apilar los elementos
    maxWidth: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#AED0F6',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#D3D3D3',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 3,
    gap: 2,
  },
  messageOwner: {
    fontSize: 10,
    color: 'gray',
  },
  messageText: (isMine) => ({
    fontSize: 16,
    color: isMine ? '#FFFFFF' : '#000000',
  }),
  messageTime: {
    fontSize: 10,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#AED0F6',
  },
  iconContainer: {
    padding: 10,
  },
});
