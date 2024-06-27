import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateAge } from '../../../helpers/calculator';

const ResumePerfil = ({user}) => {
  const perfil = {
    nombre: 'John',
    apellido: 'Doe',
    carma: 4.5,
    estrellas: 4, 
    sexo: 'Masculino',
    edad:30,
    intereses: ['Viajar', 'Leer', 'Cocinar'],
    hobbies: ['Deportes', 'Pintura', 'Jardinería'],
  };

  const renderEstrellas = (numEstrellas) => {
    const estrellasArray = [];
    for (let i = 0; i < numEstrellas; i++) {
      estrellasArray.push('★');
    }
    return estrellasArray.join(' ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}><Text style={styles.label}>Carma:</Text> {perfil.carma.toFixed(1)} / 5.0 </Text>
      <Text style={styles.text}><Text style={styles.label}>Estrellas:</Text> {renderEstrellas(perfil.estrellas)}</Text>
      <Text style={styles.text}><Text style={styles.label}>Genero:</Text> {user && user.gender && user.gender}</Text>
      <Text style={styles.text}><Text style={styles.label}>Edad:</Text> {user && user.birthdate && calculateAge(user.birthdate)} años</Text>
      <Text style={styles.text}><Text style={styles.label}>Descripción:</Text> {user && user.description ? user.description : 'No tengo descripción aún.'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20, // Color de fondo gris
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'gray'
  },
  label: {
    fontWeight: 'bold',
    color:'gray'
  },
  text: {
    color:'gray'
  }
});

export default ResumePerfil;
