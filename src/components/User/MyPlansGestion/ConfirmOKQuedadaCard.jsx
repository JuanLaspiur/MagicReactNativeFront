import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import { useNavigation } from '@react-navigation/native';

const ConfirmOKQuedadaCard = ({quedada, reload, authUser}) => {


  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.rowContainer}> 
        <Ionicons name="dice-outline" size={24} color="white" />
        <Text style={styles.cardText}>{quedada.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#AED0F6',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
  },
});

export default ConfirmOKQuedadaCard;
