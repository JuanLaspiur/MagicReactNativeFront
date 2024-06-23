import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import QuedadasSimpleCard from '../QuedadasViewsCards/QuedadasSimpleCard';
import { getQuedadasByUserId } from '../../../api/Quedada.controller';

const MyQuedadas = ({ user }) => {
  const [filter, setFilter] = useState('todos');
  const [quedadas, setQuedadas] = useState([]);

  useEffect(() => {
    const fetchMyQuedadas = async () => {
      try {
        const data = await getQuedadasByUserId(user._id);
        setQuedadas(data);
      } catch (error) {
        console.error('Error al obtener quedadas:', error);
      }
    };

    fetchMyQuedadas();
  }, []);

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const groupedQuedadas = chunkArray(quedadas, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Mis planes organizados</Text>
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
        {groupedQuedadas.length > 0 ? (
          groupedQuedadas.map((group, index) => (
            <View key={index} style={styles.slide}>
              {group.map(quedada => (
                <QuedadasSimpleCard key={quedada._id} quedada={quedada} />
              ))}
            </View>
          ))
        ) : (
          <View style={styles.slide}>
            <Text style={styles.noDataText}>No hay quedadas para mostrar</Text>
          </View>
        )}
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
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#D3D3D3',
  },
  buttonText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  noDataText: {
    paddingHorizontal: 14,
    color: 'gray',
  },
});

export default MyQuedadas;
