import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import { useNavigation } from '@react-navigation/native';
import { confirmarAQuedada } from '../../../api/Quedada.controller';

const ConfirmQuedadaCard = ({quedada, reload, authUser}) => {
    const navigation = useNavigation();


  const handleIconOKPress = async() => {
    const response = await confirmarAQuedada(authUser._id, quedada._id, true)
    alert(JSON.stringify(response))
    reload()
  // authUser={authUser}
  };

  return (
    <TouchableOpacity style={styles.card} >
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{quedada.name}</Text>
       {/* <TouchableOpacity onPress={handleIconCancelPress}>
        <Ionicons name="flash-off-outline" size={24} color="black" /> 
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleIconOKPress}>
          <Ionicons name="dice-outline" size={28} color="#AED0F6" />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAEAEA',
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
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
});

export default ConfirmQuedadaCard;

