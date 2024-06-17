import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

function MessageHeader() {
  // Aquí se define la URL de una imagen harcodeada para el avatar
  const avatarUrl = 'https://this-person-does-not-exist.com/img/avatar-gend32b61b99a67970d6a04e51c560b3a41.jpg'; // Reemplaza con la URL de la imagen de tu avatar

  const handleAvatarPress = () => {
    Alert.alert('Yendo al perfil...');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleAvatarPress}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </View>
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text style={styles.name}>John</Text>
        <Text style={styles.lastname}>Doe</Text>
      </View>
      <View style={styles.avatarAnimal}>
      <Image source={require('../../../assets/Animals/ICONOS A COLOR-13.png')} style={styles.avatar} />
      </View>
    </View>
  );
}

export default MessageHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#F7F7F7',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatarAnimal: {
    width: 38,
    height: 38,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastname: {
    fontSize: 16,
    color: '#666666',
  },
});
