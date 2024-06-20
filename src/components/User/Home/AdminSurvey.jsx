import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AdminSurvey = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleEnviarPress = () => {
    console.log('Encuesta enviada');
  };

  return (
    <View style={styles.card}>
      <Image
        source={require('../../../assets/Login/ic2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.question}>¿Qué te pareció la nueva funcionalidad?</Text>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'Muy buena' && styles.selectedOption, !selectedOption && styles.bottomBorder]}
        onPress={() => handleOptionPress('Muy buena')}
      >
        <Text style={[styles.optionText, selectedOption === 'Muy buena' && styles.selectedOptionText]}>Muy buena</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'Regular' && styles.selectedOption, !selectedOption && styles.bottomBorder]}
        onPress={() => handleOptionPress('Regular')}
      >
        <Text style={[styles.optionText, selectedOption === 'Regular' && styles.selectedOptionText]}>Regular</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'Mala' && styles.selectedOption, !selectedOption && styles.bottomBorder]}
        onPress={() => handleOptionPress('Mala')}
      >
        <Text style={[styles.optionText, selectedOption === 'Mala' && styles.selectedOptionText]}>Mala</Text>
      </TouchableOpacity>
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
    marginHorizontal:55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
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
    width:'80%'
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

