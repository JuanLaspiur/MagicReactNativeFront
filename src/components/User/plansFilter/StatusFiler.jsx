import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';
import { getAllQuedadas } from '../../../api/Quedada.controller'

function StatusFilter() {
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
    if (activeFilter === 'activos') {
      return quedada.status !== 3; // Activos: quedada.status !== 3
    } else if (activeFilter === 'terminados') {
      return quedada.status === 3; // Terminados: quedada.status === 3
    }
    return true; // Todos
  });

  return (
    <>
      <AppHeader title="Inicio" />
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            activeFilter === 'activos' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleFilter('activos')}
        >
          <Text style={styles.buttonText}>Activos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeFilter === 'terminados' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleFilter('terminados')}
        >
          <Text style={styles.buttonText}>Terminados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeFilter === 'todos' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleFilter('todos')}
        >
          <Text style={styles.buttonText}>Todos</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  inactiveButton: {
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
});

export default StatusFilter;
