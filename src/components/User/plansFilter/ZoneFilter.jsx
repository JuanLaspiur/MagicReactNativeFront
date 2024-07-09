import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';
import { getAllQuedadas } from '../../../api/Quedada.controller'

function ZoneFilter() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [quedadas, setQuedadas] = useState([]);

  const handleFilter = (filterType) => {
    console.log(`Filtrar por: ${filterType}`);
    setActiveFilter(filterType);
  };

  useEffect(() => {
    const fetchQuedadas = async () => {
      try {
        const response = await getAllQuedadas();
        setQuedadas(response);
      } catch (error) {
        console.error('Error fetching quedadas:', error);
      }
    };

    fetchQuedadas();
  }, []);

  const filteredQuedadas = quedadas.filter(quedada => {
    if (activeFilter === 'norte') {
      return quedada.zone === 'Norte';
    } else if (activeFilter === 'sur') {
      return quedada.zone === 'Sur';
    } else if (activeFilter === 'este') {
      return quedada.zone === 'Este';
    } else if (activeFilter === 'oeste') {
      return quedada.zone === 'Oeste';
    } else if (activeFilter === 'centro') {
      return quedada.zone === 'Centro';
    }
    return true;
  });

  return (
    <>
      <AppHeader title="Inicio" />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeFilter === 'norte' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => handleFilter('norte')}
          >
            <Text style={styles.buttonText}>Norte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeFilter === 'sur' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => handleFilter('sur')}
          >
            <Text style={styles.buttonText}>Sur</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeFilter === 'este' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => handleFilter('este')}
          >
            <Text style={styles.buttonText}>Este</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeFilter === 'oeste' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => handleFilter('oeste')}
          >
            <Text style={styles.buttonText}>Oeste</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeFilter === 'centro' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => handleFilter('centro')}
          >
            <Text style={styles.buttonText}>Centro</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredQuedadas.map(quedada => (
          <FilterCardQuedada quedada={quedada} key={quedada._id} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    minWidth: 40, // Ajuste de ancho mínimo para evitar desbordamientos
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  inactiveButton: {
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center', // Alinear el texto al centro
  },
  scrollView: {
    flex: 1,
  },
});

export default ZoneFilter;

