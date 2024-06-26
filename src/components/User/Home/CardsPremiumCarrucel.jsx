import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadaPremiumCard from '../QuedadasViewsCards/QuedadaPremiumCard';
import { getAllQuedadasPremium } from '../../../api/Quedada.controller';

const { width: screenWidth } = Dimensions.get('window');

const CardsPremiumCarrucel = () => {
  const [quedadas, setQuedadas] = useState([]);

  useEffect(() => {
    const fetchQuedadas = async () => {
      try {
        const response = await getAllQuedadasPremium();
        setQuedadas(response); 
      } catch (error) {
        console.error('Error fetching quedadas:', error);
      }
    };

    fetchQuedadas();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Panes premium</Text>
      <Swiper style={styles.wrapper} loop={true} autoplay={true} autoplayTimeout={8}>
        {quedadas.length > 0 && (
          quedadas.map((quedada, index) => (
            <View key={index} style={styles.slide}>
              <QuedadaPremiumCard quedada={quedada} />
            </View>
          ))
        ) }
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '110%',
  },
  wrapper: {
   maxHeight: 350
  },
  h1: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default CardsPremiumCarrucel;
