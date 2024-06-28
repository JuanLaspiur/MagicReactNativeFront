import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppHeader from "../../components/User/AppHeader";
import { todosLosContactos } from "../../api/User.controller.js";
import ItemFriend from "../../components/User/Friends/ItemFriend.jsx"; // Asegúrate de importar correctamente ItemFriend

function Friends() {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await todosLosContactos();
        console.log('Lista de usuarios:', response); 
  
        setAllList(response);
      } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
      }
    };

    fetchAllUsers();
  }, []);

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const handleOptionPress = (option) => {
    setModalVisible(false);

    switch (option) {
      case "Seguidores":
        console.log("Seguidores " + option);
        break;
      case "Seguidos":
        console.log("Seguidos " + option);
        break;
      case "To":
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Amigos" />
      <View style={styles.searchContainer}>
        <FontAwesome
          name="search"
          size={24}
          color="#CCCCCC"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar amigos..."
          placeholderTextColor="#CCCCCC"
        />
        <TouchableOpacity onPress={handleFilterPress}>
          <Ionicons
            name="filter-outline"
            size={24}
            color="gray"
            style={styles.iconFilter}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {allList && allList.length > 0 &&  allList.map((user) => (
          <ItemFriend
            key={user._id}
            name={user.name}
            lastName={user.last_name}
            user={user}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  eclipse1: {
    position: "absolute",
    top: -10,
    right: -105,
    zIndex: -1,
    opacity: 0.2,
  },
  eclipse2: {
    position: "absolute",
    height: 500,
    top: 90,
    left: -105,
    zIndex: -1,
    opacity: 0.2,
  },
  eclipse3: {
    position: "absolute",
    height: 300,
    top: 50,
    left: 0,
    zIndex: -1,
    opacity: 0.2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
  },
  icon: {
    marginRight: 10,
  },
  iconFilter: {
    marginLeft: 10,
    marginRight: 2,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    fontSize: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    width: "90%",
    borderRadius: 20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    backgroundColor: "#AED0F6",
    paddingHorizontal: 10,
    borderRadius: 20,
    margin: 5,
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Friends