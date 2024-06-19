import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Importamos ImagePicker desde Expo
import AppHeader from '../../components/User/AppHeader';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

// Imagen por defecto para mostrar si no se ha seleccionado ninguna imagen
const defaultImage = 'https://via.placeholder.com/200'; // URL de una imagen de ejemplo

function CreateQuedada() {
  const [image, setImage] = useState(null); // Estado para la imagen seleccionada
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date()); // Estado para la fecha
  const [maxParticipants, setMaxParticipants] = useState('');
  const [location, setLocation] = useState('');
  const [privacy, setPrivacy] = useState('public'); // Valor por defecto para la privacidad
  const [showDatePicker, setShowDatePicker] = useState(false); // Estado para mostrar/ocultar el DatePicker

  // Función para manejar la selección de imagen desde el dispositivo
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri); // Guardamos la URI de la imagen seleccionada
    }
  };

  // Función para manejar el cambio de fecha en el picker
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Ocultar el picker en iOS automáticamente
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Lógica para enviar los datos al servidor o manejarlos como necesites
    const quedadaData = {
      image,
      description,
      date,
      maxParticipants,
      location,
      privacy
    };
    console.log(quedadaData); // Solo para demostración, reemplaza con tu lógica real
    // Aquí podrías hacer la solicitud HTTP para crear la quedada
    // Resetear los estados después de enviar los datos si es necesario
    setImage(null);
    setDescription('');
    setDate(new Date());
    setMaxParticipants('');
    setLocation('');
    setPrivacy('public');
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Crear Quedada" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/Login/Grey-Wave-PNG-Image.png')} style={styles.imageBackground} />
        <Image source={require('../../assets/Login/pngwing.com.png')} style={styles.imageBackground2} />
        <Text style={styles.title}>Crear Quedada</Text>
        
        {/* Mostrar la imagen seleccionada o la imagen por defecto */}
        <Image source={{ uri: image || defaultImage }} style={styles.image} />

        {/* Botón para seleccionar una imagen */}
        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la descripción"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={7}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha:</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.dateButtonText}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {/* Mostrar el DateTimePicker si showDatePicker es true */}
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Máximo de Participantes:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el máximo de participantes"
            value={maxParticipants}
            onChangeText={setMaxParticipants}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ubicación:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la ubicación"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Privacidad:</Text>
          <Picker
            selectedValue={privacy}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setPrivacy(itemValue)}
          >
            <Picker.Item label="Selecciona privacidad" value="" />
            <Picker.Item label="Público" value="public" />
            <Picker.Item label="Privado" value="private" />
            <Picker.Item label="Premium" value="premium" />
          </Picker>
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: '#AED0F6' }]}
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Text style={styles.submitButtonText}>Crear Quedada</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    textAlign: 'center',
    color:'#D1D1D1',
    textShadowColor: 'white', // Color gris para la sombra del texto
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 2,
  }
  ,
  imageBackground: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.2,
    bottom: 0,
  },
  imageBackground2: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.2,
    top: -50,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#D1D1D1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transitionProperty: 'opacity',
    transitionDuration: '0.3s',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateButtonText: {
    color: '#333',
  },
  submitButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transitionProperty: 'opacity',
    transitionDuration: '0.3s',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CreateQuedada;
