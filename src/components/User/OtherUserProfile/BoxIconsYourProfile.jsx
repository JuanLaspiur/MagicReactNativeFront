import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getValueFromSecureStore } from "../../../helpers/ExpoSecureStore";
import {
  getSeguidores_seguidos,
  seguirUsuario,
} from "../../../api/User.controller";
import {
  getAllMyChats,
  ChatPrivadoByuserID,
} from "../../../api/Chat.controller";
import { useNavigation } from "@react-navigation/native";

const BoxIconsYourProfile = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigation = useNavigation();

  const toggleFollow = async () => {
    try {
      const data = await seguirUsuario(user._id);
      console.log("response " + JSON.stringify(data));
      setIsFollowing(!isFollowing);
    } catch {
      console.error("Error al seguir al usuario");
    }
  };

  const sendMessage = async () => {
    try {
      const listaDeChats = await getAllMyChats(authUser._id);
      let chat = listaDeChats.find((item) => item.otro_id === user._id);

      if (chat) {
        navigation.navigate("ChatRoom", { user, chat });
      } else {
        try {
          const response = await ChatPrivadoByuserID(user._id);
          chat = response.data;
          navigation.navigate("ChatRoom", { user, chat });
        } catch (error) {
          console.error("No se pudo crear un chat");
        }
      }
    } catch (error) {}

  };

  const handlePressSusAmistades = ()=>{
    // YourFriends
    navigation.navigate("YourFriends", { user });
  }

  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const data = await getValueFromSecureStore("user");
        setAuthUser(JSON.parse(data));
        console.log("Usuario ID " + JSON.stringify(authUser));
      } catch (error) {
        console.error("Error al obtener el usuario autenticado:", error);
      }
    };
    if (!authUser) getAuthUser();

    const isMyFolloewerNow = async () => {
      try {
        if (!authUser) return;

        const authID = authUser._id;
        const list = await getSeguidores_seguidos(authID, 2);

        if (!list) return;
        const seguidor = list.some((item) => item._id === user._id);
        if (seguidor) {
          console.log("El usuario autenticado es seguidor de este usuario.");
          setIsFollowing(true);
        } else {
          console.log("El usuario autenticado no es seguidor de este usuario.");
          setIsFollowing(false);
        }
      } catch (error) {
        console.error("Error al obtener seguidores de usuario:", error);
      }
    };

    isMyFolloewerNow();
  }, [authUser]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={toggleFollow}>
        <Ionicons
          name={isFollowing ? "arrow-undo" :"dice" }
          size={40}
          color={isFollowing ? "gray" : "#AED0F6"}
        />
        <Text
          style={[styles.text, { color: isFollowing ? "gray": "#AED0F6" }]}
        >
          {isFollowing ? "Dejar de Seguir" :"Seguir" }
        </Text>
      </TouchableOpacity>

      {/* Botón Mensajes */}
      {isFollowing && (
        <TouchableOpacity style={styles.box} onPress={sendMessage}>
          <Ionicons name="paper-plane-outline" size={40} color="#AED0F6" />
          <Text style={[styles.text, { color: "#AED0F6" }]}>Mensaje</Text>
        </TouchableOpacity>
      )}

      {/* Botón Sus Amistades */}
      <TouchableOpacity style={styles.box} onPress={handlePressSusAmistades}>
        <Ionicons name="people-outline" size={40} color="gray" />
        <Text style={styles.text}>Sus Amistades</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%", 
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
});

export default BoxIconsYourProfile;
