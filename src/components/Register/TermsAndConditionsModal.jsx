import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";

function TermsAndConditionsModal({ isVisible, onClose }) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={() => onClose(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Términos y Condiciones</Text>
        <ScrollView style={styles.modalContent}>
          {/* Aquí colocarías el contenido de tus términos y condiciones */}
          <Text style={styles.modalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fringilla massa nec dui scelerisque, et malesuada augue cursus. Sed
            non quam vel justo varius venenatis vel nec ante. Phasellus eget
            velit eget ligula consectetur condimentum.
          </Text>
        </ScrollView>
        <Button title="Cerrar" onPress={() => onClose(false)} />
      </View>
    </Modal>
  );
}

function RegisterCuatro() {
  const [city, setCity] = useState("");
  const [isSpanish, setIsSpanish] = useState(false);
  const [madridZone, setMadridZone] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleFinishRegistration = () => {
    // Aquí puedes colocar lógica adicional antes de mostrar el modal
    setShowTermsModal(true);
  };

  return (
    <View style={styles.container}>
      {/* Contenido actual del registro */}
      {/* ... */}

      {/* Modal de Términos y Condiciones */}
      <TermsAndConditionsModal
        isVisible={showTermsModal}
        onClose={(isVisible) => setShowTermsModal(isVisible)}
      />

      {/* Botón para finalizar el registro */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFinishRegistration}
        >
          <Text style={styles.buttonText}>¡Finalizar registro!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterCuatro;

const styles = StyleSheet.create({
  // Estilos del modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalContent: {
    maxHeight: 300,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
  },

  // Otros estilos del componente RegisterCuatro
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#66A3E8",
    padding: 12,
    borderRadius: 5,
    marginTop: 50,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
