import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResumePerfil = () => {
  // Supongamos que estos son los datos del perfil (solo como ejemplo)
  const perfil = {
    nombre: 'John',
    apellido: 'Doe',
    carma: 4.5, // Puntaje de carma
    estrellas: 4, // Número de estrellas basado en el puntaje (ejemplo)
    sexo: 'Masculino',
    intereses: ['Viajar', 'Leer', 'Cocinar'],
    hobbies: ['Deportes', 'Pintura', 'Jardinería'],
  };

  // Función para crear las estrellas basadas en el número proporcionado
  const renderEstrellas = (numEstrellas) => {
    const estrellasArray = [];
    for (let i = 0; i < numEstrellas; i++) {
      estrellasArray.push('★'); // Utilizando el carácter de estrella (★)
    }
    return estrellasArray.join(' '); // Unir estrellas en un solo string separado por espacio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}><Text style={styles.label}>Nombre:</Text> {perfil.nombre} {perfil.apellido}</Text>
      <Text style={styles.text}><Text style={styles.label}>Carma:</Text> {perfil.carma.toFixed(1)} / 5.0</Text>
      <Text style={styles.text}><Text style={styles.label}>Estrellas:</Text> {renderEstrellas(perfil.estrellas)}</Text>
      <Text style={styles.text}><Text style={styles.label}>Sexo:</Text> {perfil.sexo}</Text>
      <Text style={styles.text}><Text style={styles.label}>Hobbies:</Text> {perfil.hobbies.join(', ')}</Text>
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
