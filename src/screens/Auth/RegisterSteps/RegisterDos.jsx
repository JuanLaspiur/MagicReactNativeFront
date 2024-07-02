import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';  // Necesario para la selección de imágenes
import DateTimePicker from '@react-native-community/datetimepicker'; // Importa DateTimePicker
import { useNavigation } from '@react-navigation/native';
function RegisterDos() {
  const navigation = useNavigation();
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
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Register')}>
      <Ionicons name="arrow-back" size={20} color="gray" />
      </TouchableOpacity>
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
      />
      <View style={styles.titles}>
        <Text style={styles.h1}>Registro de Usuario</Text>
        <Text style={styles.h6}>
          Bienvenido a Magic Day, una aplicación donde podrás encontrar todos los planes que necesites
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
       {/* Componente DateTimePicker para seleccionar fecha de nacimiento */}
        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.selectBornDate}>{dateOfBirth.toLocaleDateString()}</Text>
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
                <Picker
          selectedValue={gender}
          style={styles.inputTextColor}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Selecciona Género" value="" />
          <Picker.Item label="Hombre" value="Hombre" />
          <Picker.Item label="Mujer" value="Mujer" />
          <Picker.Item label='No binario' value="No binario"/>
          <Picker.Item label='Prefiero no decirlo' value="Prefiero no decirlo"/>
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterTres')}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity></View>
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
  },
  selectBornDate: {
    color: 'gray',
    marginTop:7
  },
  buttonContainer: {
    width:'100%',
    display:'flex',
    alignItems:'center'
  },
  button: {
    backgroundColor: '#66A3E8',
    padding: 12,
    borderRadius: 5,
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Para que esté por encima de otros elementos
  }
});
