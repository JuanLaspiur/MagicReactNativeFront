import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BoxOptions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="add-circle-outline" size={40} color="gray" />
        <Text style={styles.text}>Crear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="eye-outline" size={40} color="gray" />
        <Text style={styles.text}>Observar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="filter-outline" size={40} color="gray" />
        <Text style={styles.text}>Filtrar</Text>
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
    width: '100%',// Color de fondo opcional
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%', // Ajusta el tamaño según sea necesario
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default BoxOptions;
