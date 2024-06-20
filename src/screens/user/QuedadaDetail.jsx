import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import ParticipantsCarrucel from '../../components/User/Home/ParticipantsCarrucel';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración

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
          Esta es una descripción extensa de la quedada. toda la información importante. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum tempora laboriosam, cumque reiciendis id officiis consequatur magnam corporis quibusdam deleniti!
        </Text>
        <View style={styles.datos}>
          <Text style={styles.datosText}><Ionicons name="map-outline" size={14} color="white" /> Zona: Centro</Text>
          <Text style={styles.datosText}><Ionicons name="calendar-outline" size={14} color="white" /> Fecha: 12/04/2025</Text>
          <Text style={styles.datosText}><Ionicons name="flash-outline" size={14} color="white" /> Asistentes: 12</Text>
          <Text style={styles.datosText}><Ionicons name="dice-outline" size={14} color="white" /> Confirmados: 7</Text>
          <TouchableOpacity style={styles.asistenciaStatus} onPress={handleAsistirPress}>
            <View style={styles.circle}>
              <Ionicons name={asistir ? 'flash-outline' : 'flash-off-outline'} size={24} color="white" />
            </View>
            <Text style={styles.statusText}>
              {asistir ? 'Asistes' : 'No asistes'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Image
        source={require("../../assets/Login/Ellipse 2.png")}
        resizeMode="contain"
        style={styles.eclipseRosa1}
      />
      <Image
        source={require("../../assets/Login/Ellipse 2.png")}
        resizeMode="contain"
        style={styles.eclipseRosa2}
      />
      <ParticipantsCarrucel/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Denunciar quedada')}>
          <Text style={styles.buttonText}>Denunciar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: screenWidth * 0.6,
    borderRadius: 5,
    marginHorizontal: 'auto',
  },
  datos: {
    paddingHorizontal: 20,
    paddingTop:30,
    backgroundColor: '#AED0F6',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  datosText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  eclipseRosa1: {
    position: "absolute",
    top: 360,
    left: -100,
    width: 200,
    height: 200,
    opacity: 0.5,
    zIndex: -1
  },
  eclipseRosa2: {
    position: "absolute",
    bottom: 230,
    width: 200,
    height: 200,
    right: -50,
    opacity: 0.5,
    zIndex: -1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 14,
    marginBottom: 19
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    width: "46%",
    alignItems: 'center',
    justifyContent: 'center'
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
  asistenciaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    color: 'white',
  },
});

export default QuedadaDetail;
