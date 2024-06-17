import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardText = ({ text, icon }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../../../assets/Animals/ICONOS A COLOR-06.png') } style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>¡Nueva Mágic App! Compartela con tus amigos, conocé gente linda, armá juntadas.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEA', // Color de fondo gris claro
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginHorizontal: 11,
    elevation: 2,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Esta línea asegura que el contenedor se expanda para ajustarse al contenido del texto
  },
  text: {
    fontSize: 16,
    color: '#333', // Color del texto
  },
});

export default CardText;

