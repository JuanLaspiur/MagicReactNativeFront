import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import env from "../../../../env";
import { FontAwesome } from "@expo/vector-icons";

function ItemFriend({ name, lastName, user }) {
  const imageUri =  env.BACK_URL + '/perfil_img/' + user._id;
  const navigation = useNavigation();  

  const handlePressItemFriend = () => {
    navigation.navigate('OtherUserProfile', { user });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePressItemFriend}>
      <View style={styles.avatarContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }}  style={styles.avatar} />
        ) : (
          <FontAwesome name="user-circle-o" size={50} color="#AED0F6" />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{lastName}</Text>
        </View>
        {/* Componente de Mensaje (Ejemplo) */}
        <TouchableOpacity style={styles.messageContainer}>
          <FontAwesome name="comment-o" size={24} color="#AED0F6" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 15,
    marginVertical: 8,
    alignSelf: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666666",
  },
  messageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AED0F6",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemFriend;
