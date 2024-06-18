import React from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde @expo/vector-icons
import { useNavigation } from '@react-navigation/native';

function ItemsFriends({ name, lastName, age, avatarUrl }) {
  const navigation = useNavigation();

  const handleAvatarPress = () => {
    navigation.navigate('OtherUserProfile')
    // Aquí podrías navegar a la pantalla de perfil u otra acción según tu aplicación
  };

  const handleMessagePress = () => {
    Alert.alert('Llendo al chat..');
    // Aquí podrías navegar a la pantalla de chat u otra acción según tu aplicación
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleAvatarPress}>
      <View style={styles.avatarContainer}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <FontAwesome name="user-circle-o" size={50} color="#AED0F6" />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{`${lastName} - ${age} años`}</Text>
        </View>
        <View style={styles.avatarAnimalContainer}>
          <Image source={require('../../../assets/Animals/ICONOS A COLOR-13.png')} style={styles.avatarAnimal} />
        </View>
      </View>
      <TouchableOpacity onPress={handleMessagePress} style={styles.messageContainer}>
        <FontAwesome name="comment-o" size={25} color="#AED0F6" />
      </TouchableOpacity>
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
    width: 30,
    height: 30,
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

export default ItemsFriends;
