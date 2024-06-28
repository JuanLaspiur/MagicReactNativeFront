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
import ItemFriend from "../../components/User/Friends/ItemFriend.jsx";

function Friends() {
  const [allList, setAllList] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await todosLosContactos();
        console.log('Ejemplo de usuario: ')
        console.log(response[0])
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

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      // Cuando llega al final del ScrollView, cargar más elementos
      setItemsToShow(itemsToShow + 10); // Cargar 10 elementos más
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  // Filtrar la lista por nombre y apellido
  const filteredList = allList.filter((user) => {
    const fullName = `${user.name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

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
          onChangeText={handleSearch}
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
      <ScrollView
        style={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16} 
      >
        {filteredList.slice(0, itemsToShow).map((user) => (
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
});

export default Friends;
