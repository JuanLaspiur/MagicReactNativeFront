import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import ParticipationQuedadaCardBlue from '../QuedadasViewsCards/profile/ParticipationQuedadaCardBlue'; // Ajusta la ruta según tu estructura de proyecto

const { width: screenWidth } = Dimensions.get('window');

const YourParticipationQuedadas = () => {
  const [filter, setFilter] = useState('todos'); // Estado para el filtro seleccionado

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Su participación en Planes de Otros</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, filter === 'terminados' && styles.activeButton]}
          onPress={() => setFilter('terminados')}
        >
          <Text style={styles.buttonText}>Planes Terminados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filter === 'activos' && styles.activeButton]}
          onPress={() => setFilter('activos')}
        >
          <Text style={styles.buttonText}>Activos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, filter === 'todos' && styles.activeButton]}
          onPress={() => setFilter('todos')}
        >
          <Text style={styles.buttonText}>Todos</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={true} // Cambia a true para que el carrusel se mueva automáticamente
        autoplayTimeout={3} // Ajusta el tiempo de espera entre slides (en segundos)
        showsPagination={true}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 8, height: 8, borderRadius: 4 }}
        activeDotStyle={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4 }}
      >
        <View style={styles.slide}>
          <ParticipationQuedadaCardBlue />
          <ParticipationQuedadaCardBlue />
          <ParticipationQuedadaCardBlue />
        </View>
        <View style={styles.slide}>
          <ParticipationQuedadaCardBlue />
          <ParticipationQuedadaCardBlue />
          <ParticipationQuedadaCardBlue />
        </View>
        {/* Agrega más vistas según sea necesario */}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5, // Menor distancia vertical entre componentes
  },
  wrapper: {
    height: 300, // Ajusta esta altura según sea necesario
  },
  h1: {
    fontSize: 18,
    color: 'gray',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10, 
  },
  button: {
    paddingVertical: 10, // Se ha ajustado el padding vertical
    paddingHorizontal: 10, // Se ha ajustado el padding horizontal
    backgroundColor: "#AED0F6",
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "#C3C3C3",
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'column',
  },
});

export default YourParticipationQuedadas;

