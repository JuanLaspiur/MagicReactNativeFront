import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppHeader from "../../components/User/AppHeader";
import ItemsFriends from "../../components/User/Friends/ItemsFriends";
import { Ionicons } from "@expo/vector-icons";
import { seguidoresQueMeSiguen } from "../../api/User.controller.js";
import { getValueFromSecureStore } from '../../helpers/ExpoSecureStore.js';
import { FriendsItem } from './FriendsItem.jsx'


function Friends() {
  const [modalVisible, setModalVisible] = useState(false);
  const [friends, setFriends] = useState([]);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
  const getAuthUser = async () => {
    const data = await getValueFromSecureStore("user");
    setUser(JSON.parse(data));
  };
  const getSeguidoresQueMeSiguen = async () => {
    try {
      const response = await seguidoresQueMeSiguen(user._id);
      setFriends(response)
    } catch (err) {
      console.log(err);
    }
  };
 if(!user) {
    getAuthUser();}
    getSeguidoresQueMeSiguen();
  }, [user]);

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
        {friends.length > 0 &&
          friends.map((friend) => (
            <ItemsFriends
              key={friend.seguidor_id}
              userID ={friend.seguidor_id}
              avatarUrl={
                "https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg"
              }
            />
          ))}
      </ScrollView>
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse2}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse3}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress("Seguidores")}
              >
                <Text style={styles.optionText}>Solo mis seguidos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress("Seguidos")}
              >
                <Text style={styles.optionText}>Solo mis seguidores</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress("Mi zona")}
              >
                <Text style={styles.optionText}>De mi zona</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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

export default Friends;
