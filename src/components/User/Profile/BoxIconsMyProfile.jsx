import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalEditProfile from './ModalEditProfile';

const BoxIconsMyProfile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Función para abrir el modal de edición de perfil
  const handleEditProfile = () => {
    setIsModalVisible(true);
  };

  // Función para cerrar el modal de edición de perfil
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botón para abrir el modal de edición de perfil */}
      <TouchableOpacity style={styles.box} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={40} color="gray" />
        <Text style={styles.text}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="arrow-down" size={40} color="gray" />
        <Text style={styles.text}>Darse de baja</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="people-outline" size={40} color="gray" />
        <Text style={styles.text}>Amistad</Text>
      </TouchableOpacity>

      {/* Modal de edición de perfil */}
      <ModalEditProfile isVisible={isModalVisible} onClose={handleCloseModal} />
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
