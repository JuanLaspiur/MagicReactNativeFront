import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import env from '../../../../env.js';

const formatDate = (dateTimeString) => {
  if (!dateTimeString) return ''; // Handle case where dateTimeString is not defined
  const parts = dateTimeString.split(' ');

  // Extract day, month, and year from the parts
  const day = parts[1];
  const month = getMonthNumber(parts[2]); // Convert month name to number
  const year = parts[3].slice(-2); // Get last two digits of the year

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


const QuedadaPremiumCard = ({quedada}) => {
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); // Estado local para confirmación

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  // Datos harcodeados para la quedada premium
  const nombreQuedada = "Plan Premium de la Quedada";
  const descripcionQuedada = quedada.description 
  const fecha = quedada.dateTime ? formatDate(quedada.dateTime) : '';
  const confirmados = quedada.asistentes.length; // Cantidad de confirmados harcodeada
  const maxParticipantes = quedada.limit; // Máximo número de participantes harcodeado
  const zona = "Zona " + quedada.zone; 
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const urlImagenQuedada=`${env.BACK_URL}/quedada_img/${quedada._id}`;
  // Función para truncar la descripción si supera los 120 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  const iconColor = 'white'; 

  const handleConfirm = () => {
    setConfirmado(true); // Cambia el estado a confirmado
    // Aquí podrías agregar cualquier lógica adicional que necesites al confirmar
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: urlImagePerfil }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Juan Pérez</Text>
      </View>
      <Image
        source={{ uri: urlImagenQuedada }}
        style={styles.image}
      />
      <Text style={styles.description}>{truncateDescription(descripcionQuedada, 120)}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${confirmados}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
      {/* Renderizado condicional del icono */}
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
    padding: 10,
    alignSelf: "center",
    position: 'relative', // Para contener el icono con posición absoluta
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 12,
    color: "white",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuedadaPremiumCard;

