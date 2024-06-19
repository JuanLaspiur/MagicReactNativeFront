import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function FilterPlans() {
  const navigation = useNavigation();

  const handleFilter = (filterType) => {
    switch (filterType) {
      case 'estado':
        navigation.navigate('StatusFilter', { filterType: 'estado' });
        break;
      case 'zona':
        navigation.navigate('ZoneFilter', { filterType: 'zona' });
        break;
      case 'amistad':
        navigation.navigate('MyFriendsFilter', { filterType: 'amistad' });
        break;
      case 'tipo':
        navigation.navigate('TypeFilter', { filterType: 'tipo' });
        break;
      default:
        console.log(`Filtrar por: ${filterType}`);
        break;
    }
  };

  return (
    <>
      <AppHeader title="PlansFilter" />

      <Image
        source={require('./../../assets/Login/Ellipse 1.png')}
        resizeMode="contain"
        style={styles.eclipse}
      />
      <Image
        source={require('./../../assets/Login/Ellipse 1.png')}
        resizeMode="contain"
        style={styles.eclipse2}
      />

      <View style={styles.container}>
        {/* Contenedor del ícono de filtro */}
        <View style={styles.filterIcon}>
          <Ionicons name="filter-outline" size={40} color="gray" />
          <Text style={styles.filterText}>Filtro</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleFilter('estado')}
          >
            <Text style={styles.buttonText}>Filtro por Estado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleFilter('zona')}
          >
            <Text style={styles.buttonText}>Filtro por Zona</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleFilter('amistad')}
          >
            <Text style={styles.buttonText}>Filtro por Amistad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleFilter('tipo')}
          >
            <Text style={styles.buttonText}>Filtro por Tipo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#AED0F6',
    width: '98%',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -20,
  },
  filterText: {
    color: 'gray',
    fontSize: 22,
    marginLeft: 10,
  },
  eclipse: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    height: 200,
    zIndex: -1,
  },
  eclipse2: {
    position: 'absolute',
    bottom: 0,
    right: 85,
    transform: [{ rotate: '75deg' }],
    opacity: 0.2,
    width: 150,
    height: 150,
    zIndex: -1,
  },
});

export default FilterPlans;
