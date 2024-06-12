import React, { useState } from 'react';
import { Image ,StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Register = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <View style={styles.container}>
            <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
      />
      
      <Text style={styles.label}>Datos de Cuenta</Text>
      <TextInput style={styles.input} placeholder="Correo Electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <TextInput style={styles.input} placeholder="Repetir contraseña" secureTextEntry />
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
      <TouchableOpacity style={styles.button} onPress={() => alert('Siguiente')}>
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
});

export default Register;
