import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../AppHeader';
import FilterCardQuedada from '../QuedadasViewsCards/FilterCardQuedada';
import { Picker } from '@react-native-picker/picker';
import { getAllQuedadas, getQuedadaCategories } from '../../../api/Quedada.controller';

function TypeFilter() {
  const [activeFilter, setActiveFilter] = useState('');
  const [quedadas, setQuedadas] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleFilter = (filterType) => {
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

    const fetchCategories = async () => {
      try {
        const data = await getQuedadaCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
    fetchQuedadas();
  }, []);

  const filteredQuedadas = quedadas.filter(quedada => {
    if (activeFilter === '') {
      return true;
    }
    return quedada.category === activeFilter;
  });

  return (
    <>
      <AppHeader title="TypeFilter" />
      <View style={styles.container}>
        <Picker
          selectedValue={activeFilter}
          style={styles.picker}
          onValueChange={(itemValue) => handleFilter(itemValue)}
        >
          <Picker.Item label="Seleccionar filtro" value="" />
          {categories.map(category => (
            <Picker.Item key={category._id} label={category.name} value={category._id} />
          ))}
        </Picker>
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
