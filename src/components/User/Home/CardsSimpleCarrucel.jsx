import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadasSimpleCard from '../QuedadasViewsCards/QuedadasSimpleCard'; 
import { getAllQuedadas } from '../../../api/Quedada.controller';

const { width: screenWidth } = Dimensions.get('window');

const CardsSimpleCarrucel = () => {
  const [quedadas, setQuedadas] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false); 


  useEffect(() => {
    const fetchQuedadas = async () => {
      try {
        let response = await getAllQuedadas(); 
        response = response.filter(quedada => quedada.privacy !== "Premium");
        setQuedadas(response); 
       } catch (error) {
        console.error('Error fetching quedadas:', error);
      }
    };

    fetchQuedadas();
  }, [quedadas]);

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

  const quedadasChunks = chunkArray(quedadas, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Planes</Text>
        <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={true} 
        autoplayTimeout={3}
        showsPagination={true}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 8, height: 8, borderRadius: 4 }}
        activeDotStyle={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4 }}
      >
        {quedadasChunks.map((chunk, index) => (
          <View style={styles.slide} key={index}>
            {chunk.map(quedada => (
              <QuedadasSimpleCard quedada={quedada} key={quedada._id} />
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  wrapper: {
    maxHeight: 550
  },
  h1: {
    fontSize: 16,
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
