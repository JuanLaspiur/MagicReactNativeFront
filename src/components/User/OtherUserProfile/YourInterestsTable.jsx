import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { capitalizeFirstLetter } from '../../../helpers/CapitalizeFirstLetterString';
import { getUserById, getUserInfo } from '../../../api/User.controller'

const YourInterestsTable = ({user}) => {
const [perfilUser, setPerfilUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log(user._id)
        const response = await getUserById(user._id);
        setPerfilUser(response.data);
        console.log(JSON.stringify(perfilUser.peliculas), ' perfil user')
      } catch (error) {
        console.error('Error al obtener y parsear el usuario desde SecureStore:', error);
      }
    };
    getUser();
  }, []);  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sus Intereses</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Películas Favoritas</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{perfilUser?.peliculas  ? capitalizeFirstLetter(perfilUser.peliculas) : ' - sin info - '}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Artista y Estilo Musical Favorito</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{perfilUser?.artista ? capitalizeFirstLetter(perfilUser.artista) : ' - sin info - ' }</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Deportes Favoritos</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{perfilUser?.deportes ? capitalizeFirstLetter(perfilUser.deportes) : ' - sin info - '}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AED0F6",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginTop: 20,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin:'auto',
    color: '#fff', // Color gris para el texto del encabezado
  },
  editIcon: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 10,
  },
  categoryCell: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Color gris para el texto de categoría
  },
  dataCell: {
    flex: 2,
    alignItems: 'center', // Centrado verticalmente
    justifyContent: 'center', // Centrado verticalmente
    paddingLeft: 10,
  },
  dataText: {
    fontSize: 16,
    color: '#fff', // Color gris para el texto de datos
  },
});

export default YourInterestsTable;
