import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import env from '../../../../env.js';

// Function to format date
const formatDate = (dateTimeString) => {
  // Split the dateTimeString by spaces and commas to get parts
  const parts = dateTimeString.split(' ');

  // Extract day, month, and year from the parts
  const day = parts[1];
  const month = getMonthNumber(parts[2]); // Convert month name to number
  const year = parts[3];

  // Return formatted date
  return `${day}/${month}/${year}`;
};
// Function to get month number from month abbreviation
const getMonthNumber = (monthAbbreviation) => {
  const monthMap = {
    'ene.': '01', 'feb.': '02', 'mar.': '03', 'abr.': '04',
    'may.': '05', 'jun.': '06', 'jul.': '07', 'ago.': '08',
    'sep.': '09', 'oct.': '10', 'nov.': '11', 'dic.': '12'
  };
  return monthMap[monthAbbreviation];
};


const QuedadasSimpleCard = ({ quedada }) => {
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); 

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  const nombreQuedada = quedada.name.charAt(0).toUpperCase() + quedada.name.slice(1).toLowerCase();
  const asistentes = quedada.asistentes.length; 
  const zona = "Zona " + quedada.zone; 
  const maxParticipantes = quedada.limit;
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const iconColor = 'white'; 
  const handleConfirm = () => {
    setConfirmado(true); 
  };
  const fecha = quedada.dateTime && formatDate(quedada.dateTime);

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.content}>
        <Image
          source={{ uri: urlImagePerfil }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nombreQuedada}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${asistentes}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
      {/* Conditional rendering of the icon */}
      {confirmado ? (
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <Ionicons name="flash-outline" size={24} color="black" />
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: iconColor }]}
          onPress={handleConfirm}
        >
          <Ionicons name="flash-off-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#AED0F6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    marginVertical: 10,
    alignSelf: "center",
    position: 'relative', // To contain the icon with absolute position
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight:25
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 3,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  infoText: {
    fontSize: 12,
    color: "white",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuedadasSimpleCard;
