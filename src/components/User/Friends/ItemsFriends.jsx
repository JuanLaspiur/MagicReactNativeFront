import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde @expo/vector-icons

function ItemsFriends({ name, lastName, age, avatarUrl }) {
  const handleAvatarPress = () => {
    Alert.alert('Llendo al perfil..');
    // Aquí podrías navegar a la pantalla de perfil u otra acción según tu aplicación
  };

  const handleMessagePress = () => {
    Alert.alert('Llendo al chat..');
    // Aquí podrías navegar a la pantalla de chat u otra acción según tu aplicación
  };

  return (
    <TouchableWithoutFeedback onPress={handleAvatarPress}>
      <View style={styles.itemContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            {avatarUrl ? (
              <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            ) : (
              <FontAwesome name="user-circle-o" size={50} color="#AED0F6" />
            )}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.lastName}>{lastName}</Text>
            <Text style={styles.age}>{age} años</Text>
          </View>
                 <View style={styles.avatarAnimalContainer}>
          <Image source={require('../../../assets/Animals/ICONOS A COLOR-13.png')} style={styles.avatarAnimal} />
        </View> 
        </View>
        <TouchableWithoutFeedback onPress={handleMessagePress}>
          <View style={styles.messageContainer}>
            <FontAwesome name="comment-o" size={25} color="#AED0F6" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Assuming the avatar is circular
  },
  infoContainer: {
    marginRight: 15, // Misma distancia que el avatar
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 16,
    color: '#666666',
  },
  age: {
    fontSize: 14,
    color: '#999999',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#AED0F6',
    marginLeft: 10,
  },
  avatarAnimalContainer: {
    marginLeft:20,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    opacity:0.5
  },
  avatarAnimal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

export default ItemsFriends;


