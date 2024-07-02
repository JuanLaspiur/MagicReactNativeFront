import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !repeatPassword) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!isChecked1) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Si pasa todas las validaciones, navega a la siguiente pantalla
    navigation.navigate('RegisterDos');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Login')}>
        <Ionicons name="arrow-back" size={20} color="gray" />
      </TouchableOpacity>
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
      />
      
      <Text style={styles.label}>Datos de Cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />
      <View style={styles.checkRealContainer}>
        <CheckBox
          title="Al registrarme en la presente aplicación, acepto el aviso legal, los términos y condiciones y la política de privacidad."
          checked={isChecked1}
          onPress={() => setIsChecked1(!isChecked1)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
        <CheckBox
          title="Acepto recibir información electrónica de MagicDay sobre eventos y planes creados por usuarios. (No Obligatorio)"
          checked={isChecked2}
          onPress={() => setIsChecked2(!isChecked2)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  eclipse1: {
    position: "absolute",
    top: -90,
    right: -50,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F', // Gris claro
    padding: 7,
    marginBottom: 10,
    width: '80%',
  },
  checkRealContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontWeight: 'normal',
    fontSize: 10,
  },
  button: {
    position:'absolute',
    bottom:40,
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

export default Register;
