import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import ItemParticipantsQuedadaDetail from './ItemParticipantsQuedadaDetail'; 
const { width: screenWidth } = Dimensions.get('window');

const ParticipantsCarrucel = ({ quedada }) => {
  const asistentes = quedada.asistentes;

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const asistentesChunks = chunkArray(asistentes, 4);

  return (
    <View style={[styles.container, { height: asistentes.length === 0 ? 52.5 : 'auto' }]}>

      <Text style={styles.h1}>Participantes</Text>
      <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={true} 
        autoplayTimeout={3} 
        showsPagination={true}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          width: 8,
          height: 8,
          borderRadius: 4,
        }}
        activeDotStyle={{
          backgroundColor: 'white',
          width: 8,
          height: 8,
          borderRadius: 4,
        }}
      >
        {asistentesChunks.map((chunk, index) => (
          <View key={index} style={styles.slide}>
            {chunk.map((asistente, i) => (
              <ItemParticipantsQuedadaDetail key={i} asistente={asistente} />
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
    height:'auto',
    minHeight:400,
    maxHeight: 600, 
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ParticipantsCarrucel;
