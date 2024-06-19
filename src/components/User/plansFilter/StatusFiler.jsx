import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';

function StatusFilter() {
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#AED0F6',
  },
  activeButton: {
    backgroundColor: '#AED0F6',
  },
  inactiveButton: {
    backgroundColor: '#E0E0E0', // Color más apagado para botones no seleccionados
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default StatusFilter;
