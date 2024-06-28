import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import env from "../../../../env";


function ItemFriend({ name, lastName, user }) {
  const imageUri =  env.BACK_URL + '/perfil_img/' + user._id;
  const navigation = useNavigation();  

  const handlePressItemFriend = () => {
    navigation.navigate('OtherUserProfile', { user });
  };


  return (
    <TouchableOpacity style={styles.avatarContainer} onPress={handlePressItemFriend}>
     <View style={styles.avatarContainer}>
     {imageUri ? (
          <Image source={{ uri: imageUri }}  style={styles.avatar} />
        ) : (
          <FontAwesome name="user-circle-o" size={50} color="#AED0F6" />
        )}
          <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}> {lastName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 15,
        marginVertical: 5,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap:10
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
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
        width: 35,
        height: 35,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#AED0F6",
        justifyContent: "center",
        alignItems: "center",
      },
      avatarAnimalContainer: {
        width: 25,
        height: 25,
        borderRadius: 25,
        overflow: 'hidden',
        opacity: 0.5,
        marginTop:19
      },
      avatarAnimal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default ItemFriend;
