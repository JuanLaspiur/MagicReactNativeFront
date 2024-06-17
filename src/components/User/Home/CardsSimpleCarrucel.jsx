import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadasSimpleCard from '../QuedadasViewsCards/QuedadasSimpleCard'; // Ajusta la ruta según tu estructura de proyecto

const { width: screenWidth } = Dimensions.get('window');

const CardsSimpleCarrucel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Planes</Text>
      <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={false}
        showsPagination={true}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 8, height: 8, borderRadius: 4 }}
        activeDotStyle={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4 }}
      >
        <View style={styles.slide}>
          <QuedadasSimpleCard />
          <QuedadasSimpleCard />
          <QuedadasSimpleCard />
        </View>
        <View style={styles.slide}>
          <QuedadasSimpleCard />
          <QuedadasSimpleCard />
          <QuedadasSimpleCard />
        </View>
        {/* Agrega más vistas según sea necesario */}
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
