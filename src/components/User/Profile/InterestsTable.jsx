import React, { useState }  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalEditInterests from './ModalEditInterests';
import { capitalizeFirstLetter } from '../../../helpers/CapitalizeFirstLetterString';

const InterestsTable = ({user, setUser}) => {
  const [openModal, setOpenModal] = useState(false);
  const interests = {
    peliculas: ['Inception', 'The Shawshank Redemption', 'Interstellar'],
    artistaMusical: 'Queen',
    estiloMusical: 'Rock',
    deportes: ['Fútbol', 'Tenis', 'Baloncesto'],
  };

  const handleEditInterests = () => {
    setOpenModal(true)
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Mis Intereses</Text>
        <Ionicons
          name="create-outline"
          size={19}
          color="gray"
          style={styles.editIcon}
          onPress={handleEditInterests}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Películas Favoritas</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{user && user.peliculas && capitalizeFirstLetter(user.peliculas)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Artista y Estilo Musical Favorito</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{user && user.artista &&  capitalizeFirstLetter(user.artista)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryCell}>
          <Text style={styles.categoryText}>Deportes Favoritos</Text>
        </View>
        <View style={styles.dataCell}>
          <Text style={styles.dataText}>{user && user.deportes && capitalizeFirstLetter(user.deportes)}</Text>
        </View>
      </View>
      <ModalEditInterests user={user} setOpenModal={setOpenModal} openModal={openModal} setUser={setUser}/>
    </View>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA', 
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
    color: 'gray', 
  },
  editIcon: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    color: 'gray', 
  },
  dataCell: {
    flex: 2,
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingLeft: 10,
  },
  dataText: {
    fontSize: 16,
    color: 'gray', 
  },
});

export default InterestsTable;
