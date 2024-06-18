import React, { useState }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const YourInterestsTable = () => {
  const interests = {
    peliculas: ['Inception', 'The Shawshank Redemption', 'Interstellar'],
    artistaMusical: 'Queen',
    estiloMusical: 'Rock',
    deportes: ['Fútbol', 'Tenis', 'Baloncesto'],
  };

  // Función para manejar la acción de editar intereses

  return (
    <>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sus Intereses</Text>
         </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Películas Favoritas</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{interests.peliculas.join(', ')}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Artista y Estilo Musical Favorito</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{interests.artistaMusical} - {interests.estiloMusical}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Deportes Favoritos</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{interests.deportes.join(', ')}</Text>
        </View>
      </View>
    </View>
      </>
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
