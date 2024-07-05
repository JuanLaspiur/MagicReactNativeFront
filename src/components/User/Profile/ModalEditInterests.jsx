import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { updateUserInfo } from '../../../api/User.controller'

const ModalEditInterests = ({ setOpenModal, openModal, user, setUser }) => {
  const [peliculasFavoritas, setPeliculasFavoritas] = useState(user.peliculas);
  const [artistaEstiloMusicalFavorito, setArtistaEstiloMusicalFavorito] = useState(user.artista);
  const [deportesFavoritos, setDeportesFavoritos] = useState(user.deportes);

  const handleGuardarCambios = async() => {
    const data = {
      peliculas:peliculasFavoritas,
      deportes: deportesFavoritos,
      artista: artistaEstiloMusicalFavorito
    }
    try{
      const response = await updateUserInfo(data, user._id);
         setOpenModal(false);
      alert('Actualizado con exito')
    }catch (err) {
       console.error(' Guardar cambios ')
    }
  };

  return (
    <Modal
    isVisible={openModal} 
    animationIn="slideInUp"
    animationOut="slideOutDown"
    backdropOpacity={0.5}
    style={styles.modal}
    onBackdropPress={setOpenModal} 
  >
     <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          style={styles.eclipse1}
        />
        <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          style={styles.eclipse2}
        />
    <View style={styles.modal}>
      <Text style={styles.titulo}>Edita tus intereses</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Películas Favoritas:</Text>
        <TextInput
          style={styles.textInput}
          value={peliculasFavoritas}
          onChangeText={setPeliculasFavoritas}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Artista y Estilo Musical Favorito:</Text>
        <TextInput
          style={styles.textInput}
          value={artistaEstiloMusicalFavorito}
          onChangeText={setArtistaEstiloMusicalFavorito}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Deportes Favoritos:</Text>
        <TextInput
          style={styles.textInput}
          value={deportesFavoritos}
          onChangeText={setDeportesFavoritos}
        />
      </View>

      <TouchableOpacity style={styles.button}onPress={handleGuardarCambios}>
          <Text style={styles.buttonText} >Guardar Cambios</Text>
        </TouchableOpacity>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    paddingHorizontal:13,
    backgroundColor:'white'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    margin:'auto'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderBottomWidth: 1, // Solo parte inferior del borde
    borderBottomColor: 'gray', 
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  eclipse1: {
    position:'absolute',
    top:0, 
    right:-170,
    opacity:0.5
  }, 
   eclipse2: {
    position:'absolute',
    top:40, 
    left:-170,
    opacity:0.8,
    transform: [{ rotate: '275deg' }],
  },
  button: {
    marginTop: 20,
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ModalEditInterests;
