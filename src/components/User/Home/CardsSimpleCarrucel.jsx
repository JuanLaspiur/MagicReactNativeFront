import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadasSimpleCard from '../QuedadasViewsCards/QuedadasSimpleCard'; // Ajusta la ruta según tu estructura de proyecto
import { getAllQuedadas } from '../../../api/Quedada.controller';

const { width: screenWidth } = Dimensions.get('window');

const CardsSimpleCarrucel = () => {
  const [quedadas, setQuedadas] = useState([]);

  useEffect(() => {
    const fetchQuedadas = async () => {
      try {
        const response = await getAllQuedadas(); // Obtener las quedadas desde la API
        setQuedadas(response); // Actualizar el estado con las quedadas obtenidas
      } catch (error) {
        console.error('Error fetching quedadas:', error);
        // Manejo de errores: podrías mostrar un mensaje de error o manejarlo de otra manera
      }
    };

    fetchQuedadas();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para dividir las quedadas en grupos de tres
  const chunkArray = (myArray, chunk_size) => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  // Dividir las quedadas en grupos de tres
  const quedadasChunks = chunkArray(quedadas, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Planes</Text>
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
        {quedadasChunks.map((chunk, index) => (
          <View style={styles.slide} key={index}>
            {chunk.map(quedada => (
              <QuedadasSimpleCard quedada={quedada} key={quedada.id} />
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  wrapper: {
    height: 405, // Ajusta esta altura según sea necesario
  },
  h1: {
    fontSize: 20,
    color: 'gray',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'column',
  },
});

export default CardsSimpleCarrucel;
