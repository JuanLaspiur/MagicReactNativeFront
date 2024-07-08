import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppHeader from "../../components/User/AppHeader";
import { todosLosContactos } from "../../api/User.controller.js";
import ItemFriendQuedada from "../../components/User/createquedada/ItemFriendQuedada.jsx";
import { invitar } from '../../api/Quedada.controller.js'

function PremiumGatheringInvitations({ route }) {
  const { quedada } = route.params;

  const [allList, setAllList] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await todosLosContactos();
        setAllList(response);
      } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
      }
    };

    fetchAllUsers();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
      setItemsToShow(itemsToShow + 10);
    }
  };

  const toggleUserSelection = (userId) => {
    setSelectedUserIds(prevState =>
      prevState.includes(userId) 
        ? prevState.filter(id => id !== userId)
        : [...prevState, userId]
    );
  };

  const filteredList = allList.filter((user) => {
    const fullName = `${user.name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const handleSendInvitations = async() => {
    selectedUserIds.forEach(async (userId) => {
      try {
        const invitation = await invitar(quedada._id, userId);
        console.log(`Invitación enviada a ${userId}:`, userId);
      } catch (error) {
        console.error(`Error al enviar invitación a ${userId}:`, error);
      }
    });
  }
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
      </View>
      <ScrollView
        style={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {filteredList.slice(0, itemsToShow).map((user) => (
          <ItemFriendQuedada
            key={user._id}
            name={user.name}
            lastName={user.last_name}
            user={user}
            isSelected={selectedUserIds.includes(user._id)}
            onToggleSelect={toggleUserSelection}
          />
        ))}
      </ScrollView>
      <View>
      <TouchableOpacity onPress={handleSendInvitations} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Invitaciones</Text>
      </TouchableOpacity>
      </View>
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
  button: {
    backgroundColor: '#AED0F6',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    borderRadius: 6,
    marginHorizontal:10,
    marginBottom:5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default PremiumGatheringInvitations;
