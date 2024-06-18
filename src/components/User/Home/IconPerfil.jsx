import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FollowersBox from '../Profile/FollowersBox';

const IconPerfil = () => {
  const navigation = useNavigation();

  // Replace 'path/to/your/image.png' with the actual path to your image
  const imageUri = require('../../../assets/Animals/ICONOS A COLOR-05.png'); // Assuming the image is in the 'assets' folder

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Perfil')}
    >
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image round
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: 'gray',
  },
});

export default IconPerfil;

