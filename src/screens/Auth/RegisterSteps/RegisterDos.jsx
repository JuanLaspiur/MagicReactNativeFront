import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';  // Necesario para la selección de imágenes
import DateTimePicker from '@react-native-community/datetimepicker'; // Importa DateTimePicker

function RegisterDos() {
  const [profileImage, setProfileImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
      />
      <View style={styles.titles}>
        <Text style={styles.h1}>Registro de Usuario</Text>
        <Text style={styles.h6}>
          Bienvenido a Magic Day, una aplicacion donde podras encontrar todos los planes que necesites
        </Text>
      </View>
      <View style={styles.selectPerfilImageContainer}>
        <TouchableOpacity style={styles.selectPerfilImage} onPress={selectImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.addPhotoText}>Añadir Foto</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.h4}>Datos del Usuario</Text>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Apellido" />

        <Picker
          selectedValue={gender}
          style={styles.inputTextColor}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Selecciona Género" value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Femenino" value="femenino" />
        </Picker>

        {/* Componente DateTimePicker para seleccionar fecha de nacimiento */}
        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
          <Text>{dateOfBirth.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || dateOfBirth;
              setShowDatePicker(false);
              setDateOfBirth(currentDate);
            }}
          />
        )}
      </View>
    </View>
  );
}

export default RegisterDos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  eclipse1: {
    position: "absolute",
    top: -90,
    right: -105,
  },
  titles: {
    paddingTop: 35,
    alignItems: 'center',
  },
  h1: {
    fontSize: 19,
    marginVertical: 10,
    marginTop: 30,
    color: 'gray',
  },
  h6: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  selectPerfilImageContainer: {
    alignItems: 'center',
  },
  selectPerfilImage: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  addPhotoText: {
    color: 'gray',
    fontSize: 12,
  },
  userInfo: {
    paddingTop: 20,
    paddingHorizontal: 17,
  },
  h4: {
    color: 'gray',
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F', // Gris claro
    padding: 7,
    marginBottom: 10,
    width: '100%',
  },
  inputTextColor: {
    color:'gray'
  }
});
