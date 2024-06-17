import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const BoxIconsMyProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
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
