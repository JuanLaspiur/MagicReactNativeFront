import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function MyStatus() {
  const initialStatus = '¡Hola! Magic Day';
  const [status, setStatus] = useState(initialStatus); // Estado inicial para el texto del estado
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [newStatus, setNewStatus] = useState(status); // Estado para almacenar el nuevo estado en el modal
  const maxCharacters = 30; // Máximo 30 caracteres permitidos

  // Función para abrir el modal
  const openModal = () => {
    setNewStatus(status); // Restaurar el estado actual al abrir el modal
    setModalVisible(true);
  };

  // Función para cerrar el modal sin aplicar cambios
  const closeModal = () => {
    setModalVisible(false);
  };

  // Función para aplicar los cambios al estado y cerrar el modal
  const applyChanges = () => {
    setStatus(newStatus.trim() || 'Sin estado'); // Aplicar el nuevo estado o 'Sin estado' si está vacío
    setModalVisible(false); // Cerrar el modal después de aplicar cambios
  };

  // Función para limitar la cantidad de caracteres y actualizar el estado
  const handleTextChange = (text) => {
    // Limitar la cantidad de caracteres
    if (text.length <= maxCharacters) {
      setNewStatus(text);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.statusText}>
          <Ionicons name="create-outline" size={15} color="gray" />
          {' '}
          Mi Estado: <Text style={styles.myStatusText}>{status}</Text>
        </Text>
      </TouchableOpacity>

      {/* Modal para editar el estado */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Estado</Text>
            <TextInput
              style={styles.input}
              value={newStatus}
              onChangeText={handleTextChange}
              placeholder="Escribe tu nuevo estado"
              maxLength={maxCharacters}
            />
            <Text style={styles.characterLimit}>{newStatus.length}/{maxCharacters} caracteres</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#E0E0E0' }]} onPress={closeModal}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#AED0F6' }]} onPress={applyChanges}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 10,
  },
  statusText: {
    paddingLeft: 25,
    fontSize: 15,
    color: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  myStatusText: {
    fontStyle: 'italic',
    color: '#AED0F6',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'gray',
  },
  input: {
    borderBottomWidth: 1, // Solo borde inferior
    borderBottomColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: 'gray',
  },
  characterLimit: {
    textAlign: 'right',
    color: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#AED0F6',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyStatus;

