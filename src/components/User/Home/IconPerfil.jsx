import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IconPerfil = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Perfil')}
    >
      <Ionicons name="person-circle-outline" size={80} color="gray" />
      <Text style={styles.text}>Perfil</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:18
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: 'gray',
  },
});

export default IconPerfil;
