import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

const ModalEditProfile = ({ isVisible, onClose }) => {
  // Estado local para almacenar los datos editables del perfil
  const [perfilEditable, setPerfilEditable] = useState({
    nombre: 'John',
    apellido: 'Doe',
    sexo: '',
    intereses: ['Viajar', 'Leer', 'Cocinar'],
    hobbies: ['Deportes', 'Pintura', 'Jardinería'],
  });

  // Función para actualizar el estado cuando se edita un campo
  const handleChange = (key, value) => {
    setPerfilEditable({
      ...perfilEditable,
      [key]: value,
    });
  };

  // Función para guardar los cambios en el perfil
  const guardarCambios = () => {
    // Aquí puedes implementar la lógica para guardar los cambios
    // Por ejemplo, enviar los datos a la API, etc.
    onClose(); // Cierra el modal después de guardar los cambios
  };

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
          value={perfilEditable.nombre}
          onChangeText={(text) => handleChange('nombre', text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={perfilEditable.apellido}
          onChangeText={(text) => handleChange('apellido', text)}
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={perfilEditable.sexo}
          style={styles.input}
          onValueChange={(itemValue) => handleChange('sexo', itemValue)}
        >
          <Picker.Item label="Selecciona Género" value="" />
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label="No binario" value="No binario" />
          <Picker.Item label="Prefiero no decirlo" value="Prefiero no decirlo" />
        </Picker>

        <Text style={styles.label}>Intereses:</Text>
        <TextInput
          style={styles.input}
          value={perfilEditable.intereses.join(', ')}
          onChangeText={(text) => handleChange('intereses', text.split(', '))}
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Hobbies:</Text>
        <TextInput
          style={styles.input}
          value={perfilEditable.hobbies.join(', ')}
          onChangeText={(text) => handleChange('hobbies', text.split(', '))}
          placeholderTextColor="gray"
        />

        <TouchableOpacity style={styles.button} onPress={guardarCambios}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
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
