import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppHeader from "../../components/User/AppHeader";
import ItemMessageBox from "../../components/User/Messages/ItemMessageBox";
import ItemQuedadaMessageBox from "../../components/User/Messages/ItemQuedadaMessageBox";
import { getAllMyChats } from "../../api/Chat.controller";
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";

const MessagesBox = () => {
  const [user, setUser] = useState(null); 
  const [messages, setMessages] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Usuarios");

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
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Usuarios" && styles.selectedTabButton,
          ]}
          onPress={() => setSelectedTab("Usuarios")}
        >
          <Text style={styles.tabButtonText}>Usuarios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Quedadas" && styles.selectedTabButton,
          ]}
          onPress={() => setSelectedTab("Quedadas")}
        >
          <Text style={styles.tabButtonText}>Quedadas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messageListContainer}>
        {selectedTab === "Usuarios" && messages.map((message, index) => (
          message.activo && message.otro_id && <ItemMessageBox key={index} message={message} />
        ))}
        {selectedTab === "Quedadas" && messages.map((message, index) => (
          message.activo && message.evento_id && <ItemQuedadaMessageBox key={index} message={message} />
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D9E3F0",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedTabButton: {
    backgroundColor: "#AED0F6",
  },
  tabButtonText: {
    color: 'gray'
  },
  messageListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default MessagesBox;
