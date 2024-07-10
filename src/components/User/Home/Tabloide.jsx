import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { getAllTabloides } from '../../../api/Tabloide.controller';
import env from '../../../../env';

const { width: screenWidth } = Dimensions.get('window');

const CardsPremiumCarrucel = ({num}) => {
  const [tabloidesList, setTabloidesList] = useState([]);

  useEffect(() => {
    const fetchGetAllTabloides = async () => {
      try {
        const response = await getAllTabloides();
        // Filter tabloides where tabloide.up === true nro_posicion
        let filteredTabloides = response.filter(tabloide => tabloide.up === true);
        filteredTabloides.filter(tabloide => tabloide.nro_posicion == num )
        setTabloidesList(filteredTabloides);
      } catch (error) {
        console.error('Error fetching tabloides: ', error);
      }
    };
    fetchGetAllTabloides();
  }, []);

  const prototipeUri = env.BACK_URL + '/tabloide_img/';

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop autoplay autoplayTimeout={8}>
        {tabloidesList.map((tabloide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: prototipeUri + tabloide.img }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 170,
  },
  slide: {
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    width: screenWidth - 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  h1: {
    fontSize: 20,
    color: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default CardsPremiumCarrucel;
