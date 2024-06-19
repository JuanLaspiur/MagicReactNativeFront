import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BoxOptions = () => {
  const navigation = useNavigation();

  const navigateToCreateQuedada = () => {
  navigation.navigate('CreateQuedada')
  };

  const navigateToObservar = () => {
    // Define la navegación para Observar (si existe otro componente correspondiente)
  };

  const navigateToFiltrar = () => {
    // Define la navegación para Filtrar (si existe otro componente correspondiente)
  };

  const navigateToAmistad = () => {
// MyFriendsList
navigation.navigate('MyFriendsList')
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={navigateToCreateQuedada}>
        <Ionicons name="add-circle-outline" size={40} color="gray" />
        <Text style={styles.text}>Crear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={navigateToObservar}>
        <Ionicons name="eye-outline" size={40} color="gray" />
        <Text style={styles.text}>Observar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={navigateToFiltrar}>
        <Ionicons name="filter-outline" size={40} color="gray" />
        <Text style={styles.text}>Filtrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={navigateToAmistad}>
        <Ionicons name="people-outline" size={40} color="gray" />
        <Text style={styles.text}>Mis Amigos</Text>
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
    width: '20%',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default BoxOptions;
