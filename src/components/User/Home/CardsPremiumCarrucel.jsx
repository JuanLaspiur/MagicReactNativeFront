import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadaPremiumCard from '../QuedadasViews/QuedadaPremiumCard'; // Ajusta la ruta según tu estructura de proyecto

const { width: screenWidth } = Dimensions.get('window');

const CardsPremiumCarrucel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Panes premium</Text>
      <Swiper style={styles.wrapper} loop={true} autoplay={true} autoplayTimeout={8}>
        <View style={styles.slide}>
          <QuedadaPremiumCard />
        </View>
        <View style={styles.slide}>
          <QuedadaPremiumCard />
        </View>
        <View style={styles.slide}>
          <QuedadaPremiumCard />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width:'110%',
  },
  wrapper: {
    height:370
  },
  h1: {
    fontSize:20, 
    color:'gray',
    paddingHorizontal:15,
    paddingVertical:15
  }
});

export default CardsPremiumCarrucel;
