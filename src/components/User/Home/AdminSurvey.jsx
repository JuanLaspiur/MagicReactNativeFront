import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getLasterAdminSurvey, getLasterAdminSurveyOptions } from "../../../api/SurveyAdmin.controller.js";

const AdminSurvey = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [pregunta, setPregunta] = useState('');

  useEffect(() => {
    const fetchLastSurvey = async () => {
      try {
        const lastSurvey = await getLasterAdminSurvey();
        setPregunta(lastSurvey.pregunta);
        const options = await getLasterAdminSurveyOptions(lastSurvey._id);
        setOpciones(options.data);

      } catch (error) {
        console.error('Error al cargar la encuesta:', error);
        // Manejo de errores aquí
      }
    };

    fetchLastSurvey();
  }, []);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleEnviarPress = () => {
    // Aquí puedes enviar la respuesta seleccionada
    console.log('Encuesta enviada');
  };

  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/Login/ic2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.question}>{pregunta}</Text>
      {opciones.length > 0 && opciones.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === option.texto && styles.selectedOption,
            index === opciones.length - 1 && !selectedOption && styles.bottomBorder
          ]}
          onPress={() => handleOptionPress(option.texto)}
        >
          <Text style={[styles.optionText, selectedOption === option.texto && styles.selectedOptionText]}>{option.texto}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.sendButton} onPress={handleEnviarPress}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6B8DBF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    opacity: 0.7
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  question: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#D6E7FF',
  },
  option: {
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 6,
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  optionText: {
    fontSize: 12,
    color: '#D6E7FF',
  },
  selectedOption: {
    backgroundColor: '#AED0F6',
    borderColor: '#AED0F6',
    width: '80%'
  },
  selectedOptionText: {
    color: '#6B8DBF',
  },
  sendButton: {
    backgroundColor: '#D6E7FF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 17,
    marginTop: 10,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#6B8DBF',
  },
});

export default AdminSurvey;

