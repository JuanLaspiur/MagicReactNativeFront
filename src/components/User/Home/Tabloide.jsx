import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  'https://media.diariouno.com.ar/p/e92d88225a9534a98479c9cae2f9a43a/adjuntos/298/imagenes/000/516/0000516123/zzzznacg2noticias-argentinas-baires-julio-20-un-grupo-jovenes-brinda-esta-tarde-un-bar-porteno-celebrar-el-dia-del-amigofoto-na-damian-dopaciozzzz.jpg'
];

const CardsPremiumCarrucel = () => {
  return (
    <View style={styles.container}>
        <Swiper style={styles.wrapper} loop={true} autoplay={true} autoplayTimeout={8}>
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
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
