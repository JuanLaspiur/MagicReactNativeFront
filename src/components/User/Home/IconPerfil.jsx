import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconPerfil = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={80} color="black" />
      <Text style={styles.text}>Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: 'black',
  },
});

export default IconPerfil;
