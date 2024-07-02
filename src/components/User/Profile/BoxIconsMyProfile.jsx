import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalEditProfile from './ModalEditProfile';
import { useNavigation } from '@react-navigation/native'; 

const BoxIconsMyProfile = ({user}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleEditProfile = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleMyFriends = () => {
    navigation.navigate('MyFriendsList', {user});
  };
  const askPremium = () => {
    alert('Solicitando plan premium..')
  }  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={40} color="gray" />
        <Text style={styles.text}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Ionicons name="arrow-down" size={40} color="gray" />
        <Text style={styles.text}>Eliminar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={handleMyFriends}>
        <Ionicons name="people-outline" size={40} color="gray" />
        <Text style={styles.text}>Mis amigos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}  onPress={askPremium}>
        <Ionicons name="diamond-outline" size={38} color="#AED0F6" />
        <Text style={{ marginBottom: -9, fontSize: 12, color: '#AED0F6' }}>Premium</Text>
      </TouchableOpacity>

      <ModalEditProfile user={user} isVisible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%', // Ajusta el tamaño según sea necesario
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default BoxIconsMyProfile;
