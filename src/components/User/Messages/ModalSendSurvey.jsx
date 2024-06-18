import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ModalSendSurvey({ visible, setModalVisibleSurvey }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);

  const handleAddOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    } else {
      Alert.alert("Máximo de 4 opciones alcanzado");
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleOptionChange = (text, index) => {
    const newOptions = [...options];
    newOptions[index] = text;
    setOptions(newOptions);
  };

  const handleSendSurvey = () => {
    let surveyContent = `Pregunta: ${question}\n\nOpciones:\n`;
    options.forEach((option, index) => {
      surveyContent += `${index + 1}. ${option}\n`;
    });
    Alert.alert("Encuesta enviada", surveyContent);
    setModalVisibleSurvey(false); // Cerrar el modal después de enviar la encuesta
  };

  const onClose = () => {
    setModalVisibleSurvey(false); // Cerrar el modal al presionar cancelar o fuera de él
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={[styles.modalTitle, { color: "#CCCCCC" }]}>
                Enviar Encuesta
              </Text> 
               <Image
                    source={require("../../../assets/Login/Ellipse 1.png")}
                    style={styles.eclipse1}
                  />
                         <Image
                    source={require("../../../assets/Animals/ICONOS A COLOR-10.png")}
                    style={styles.eclipse2}
                  />
              <TextInput
                style={styles.input}
                placeholder="Ingrese la pregunta"
                value={question}
                onChangeText={(text) => setQuestion(text)}
              />
              {options.map((option, index) => (
                <View key={index} style={styles.optionContainer}>
                  <View style={styles.optionInputWrapper}>
                    <TextInput
                      style={styles.optionInput}
                      placeholder={`Opción ${index + 1}`}
                      value={option}
                      onChangeText={(text) => handleOptionChange(text, index)}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => handleRemoveOption(index)}
                    style={styles.removeButton}
                  >
                    <Ionicons
                      name="close-circle-outline"
                      size={24}
                      color="#757575"
                    />
                  </TouchableOpacity>
                
                </View>
              ))}
              {options.length < 4 && (
                <TouchableOpacity
                  onPress={handleAddOption}
                  style={[styles.iconButton, { backgroundColor: "#757575" }]}
                >
                  <Ionicons
                    name="add-outline"
                    size={24}
                    color="#FFFFFF"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[styles.sendButton, { backgroundColor: "#757575" }]}
                onPress={handleSendSurvey}
              >
                <Text style={styles.sendButtonText}>Enviar Encuesta</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  eclipse1: {
    position: "absolute",
    top: 0,
    zIndex:-1,
    opacity:0.2
  },
   eclipse2: {
    position: "absolute",
    width:70,
    height:70,
    top: 0,
    right:0,
    zIndex:-1,
    opacity:0.2
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionInputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    flex: 1,
  },
  optionInput: {
    paddingVertical: 8, // Espacio adicional en la parte superior e inferior
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "center", // Centrar el botón de agregar
  },
  sendButton: {
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: "#CCCCCC",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 9,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  removeButton: {
    marginLeft: 10,
    padding: 5,
  },
  icon: {
    fontSize: 24,
  },
});

export default ModalSendSurvey;
