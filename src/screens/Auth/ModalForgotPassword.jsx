import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button,TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { handlePasswordRecover } from "../../api/User.controller";
const ModalForgotPassword = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = async() => {
    const response =  await handlePasswordRecover(email)
    console.log('response ' + response)
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.title}>Recuperar Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Introduce tu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handlePasswordRecovery}>
            <Text style={styles.loginButtonText}  >Recuperar Contraseña</Text>
          </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  }, 
   loginButton: {
    display:'flex',
    backgroundColor: "#007AFF", // Azul
    padding: 10,
    borderRadius: 5,
    width: "100%",    
    justifyContent:"center",
    alignItems:'center'
  }, loginButtonText: {
    color: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default ModalForgotPassword;


