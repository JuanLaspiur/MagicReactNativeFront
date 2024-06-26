import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AppHeader from "../../components/User/AppHeader";
import ItemMessage from "../../components/User/Messages/ItemMenssageBox";
import { getAllMyChats } from "../../api/Chat.controller";
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";

const MessagesBox = () => {
  const [user, setUser] = useState(null); 
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getValueFromSecureStore('user');
        setUser(JSON.parse(response));
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [user]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (user) {
          const response = await getAllMyChats(user._id);
          setMessages(response); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [user]);

  return (
    <ScrollView style={styles.container}>
      <AppHeader title="Mensajes" />
      <View style={styles.messageListContainer}>
        {messages.map((message, index) => (
          message.activo && message.otro_id && <ItemMessage key={index} message={message} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  messageListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default MessagesBox;
