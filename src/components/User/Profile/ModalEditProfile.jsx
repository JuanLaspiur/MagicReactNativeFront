import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import { updateUserInfo } from '../../../api/User.controller';

const ModalEditProfile = ({ isVisible, onClose, user }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('');
  // const [hobbies, setHobbies] = useState(['Deportes', 'Pintura', 'Jardinería']);

  const guardarCambios = async () => {
    const data = {
      name: nombre,
      last_name: apellido,
      gender: sexo,
    };
    try {
      const response = await updateUserInfo(data, user._id);
      onClose();
      alert('Actualizado con éxito');
    } catch (err) {
      console.error('Error al guardar cambios', err);
    }
    onClose();
  };

  useEffect(()=>{
    setNombre(user?.name)
    setApellido(user?.last_name)
    setSexo(user?.gender)
  },[user])

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      style={styles.modal}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContent}>
        <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          style={styles.eclipse1}
        />
        <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          style={styles.eclipse2}
        />
        <Text style={styles.title}>Editar Perfil</Text>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={apellido}
          onChangeText={(text) => setApellido(text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={sexo}
          style={styles.input}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Selecciona Género" value="" />
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label="No binario" value="No binario" />
          <Picker.Item label="Prefiero no decirlo" value="Prefiero no decirlo" />
        </Picker>
      {/*
        <Text style={styles.label}>Hobbies:</Text>
        <TextInput
          style={styles.input}
          value={hobbies.join(', ')}
          onChangeText={(text) => setHobbies(text.split(', '))}
          placeholderTextColor="gray"
        />
      */}
        <TouchableOpacity style={styles.button} onPress={guardarCambios}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modal: {
    margin: 0,
    paddingHorizontal:13
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal:30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray', // Texto gris
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'gray', // Texto gris
  },
  input: {
    borderBottomWidth: 1, // Solo parte inferior del borde
    borderBottomColor: 'gray', // Color del borde inferior
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16, // Tamaño de fuente
    color: 'gray', // Texto gris
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
  },
});

export default ModalEditProfile;
