import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import AppHeader from "../../components/User/AppHeader";
import MessageHeader from "../../components/User/Messages/MessageHeader";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      text: inputText,
      isMine: true, // Indica si el mensaje es propio o ajeno
    };

    // Agregar el nuevo mensaje al estado de mensajes
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <View style={styles.container}>
        <AppHeader title="Chat" />
        <MessageHeader />
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.isMine ? styles.myMessage : styles.otherMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => alert("Enviar imagen")} style={styles.iconContainer}>
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
    paddingTop:25,
    paddingHorizontal: 15,
  },
  messageBubble: {
    maxWidth: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#AED0F6',
    color:'gray'
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#D3D3D3',
    color: '#000000',
  },
  messageText: {
    fontSize: 16,

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
