import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';
import { Picker } from '@react-native-picker/picker';

function TypeFilter() {
  const [activeFilter, setActiveFilter] = useState(''); // Estado para almacenar el filtro activo

  const handleFilter = (filterType) => {
    // Función para manejar el filtro según el tipo seleccionado
    console.log(`Filtrar por: ${filterType}`);
    setActiveFilter(filterType); // Actualizar el estado con el filtro seleccionado
  };

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
        {/* Ejemplo de múltiples tarjetas FilterCardQuedada */}
        <FilterCardQuedada />
        <FilterCardQuedada />
        <FilterCardQuedada />
        {/* Puedes añadir más instancias de FilterCardQuedada según sea necesario */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '80%',
    borderRadius: 10, 
    borderWidth: 3,
    borderColor: '#AED0F6',
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default TypeFilter;
