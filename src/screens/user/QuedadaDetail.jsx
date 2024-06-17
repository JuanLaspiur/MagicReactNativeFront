import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import ItemParticipantsQuedadaDetail from '../../components/User/Home/ItemParticipantsQuedadaDetail';

const { width: screenWidth } = Dimensions.get('window');

const QuedadaDetail = () => {
  const [asistir, setAsistir] = useState(false); // Estado inicial: no asistiendo

  const handleAsistirPress = () => {
    if (asistir) {
      // Si ya se ha confirmado asistencia, aquí puedes agregar la lógica para cancelarla
      alert('Cancelar asistencia');
    } else {
      // Si no se ha confirmado asistencia, aquí puedes agregar la lógica para asistir
      alert('Asistir a la quedada');
    }
    // Cambiar el estado opuesto
    setAsistir(!asistir);
  };

  return (
    <ScrollView style={styles.container}>
      <AppHeader title="QuedadaDetail" />
      <Image
        source={{ uri: 'https://d2il8hfach02z9.cloudfront.net/uploads/event_photo/photo/5291/Facebook-Event-La-Quedada.jpg?v=1558109781' }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.description}>
          Esta es una descripción extensa de la quedada. Aquí puedes poner todos los detalles necesarios para que los asistentes sepan qué esperar. Puedes incluir información sobre el lugar, la hora, las actividades planificadas, y cualquier otra cosa relevante. Esta descripción puede ser tan larga como sea necesario para cubrir toda la información importante.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAsistirPress}>
          <Text style={styles.buttonText}>{asistir ? 'No asistir' : 'Asistir'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Denunciar quedada')}>
          <Text style={styles.buttonText}>Denunciar</Text>
        </TouchableOpacity>
      </View>
      <ItemParticipantsQuedadaDetail/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width:'100vw',
    height: screenWidth * 0.6, // Ajusta la relación de aspecto de la imagen
    borderRadius: 5,
    marginHorizontal: 14
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 14
  },
  button: {
    backgroundColor: "gray", // Color azul para el botón de asistir
    padding: 10,
    borderRadius: 5,
    width: "46%",
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  card: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default QuedadaDetail;
