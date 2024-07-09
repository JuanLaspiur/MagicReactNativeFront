import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';
import { Picker } from '@react-native-picker/picker';
import { getAllQuedadas } from '../../../api/Quedada.controller'

function TypeFilter() {
  const [activeFilter, setActiveFilter] = useState(''); // Estado para almacenar el filtro activo
  const [quedadas, setQuedadas] = useState([]);

  const handleFilter = (filterType) => {
    // Función para manejar el filtro según el tipo seleccionado
    console.log(`Filtrar por: ${filterType}`);
    setActiveFilter(filterType); // Actualizar el estado con el filtro seleccionado
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
  return (
    <>
      <AppHeader title="Inicio" />
      <View style={styles.container}>
        <Picker
          selectedValue={activeFilter}
          style={styles.picker}
          onValueChange={(itemValue) => handleFilter(itemValue)}
        >
          <Picker.Item label="Seleccionar filtro" value="" />
          <Picker.Item label="Planes Nocturnos" value="planesNocturnos" />
          <Picker.Item label="Cañas" value="cañas" />
          <Picker.Item label="Cultura" value="cultura" />
        </Picker>
      </View>
      <ScrollView style={styles.scrollView}>
        {quedadas.map(quedada => (
          <FilterCardQuedada quedada={quedada} key={quedada._id} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: '80%',
    borderRadius: 10, 
    borderWidth: 3,
    borderColor: '#AED0F6',
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 10,
  },
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

export default TypeFilter;
