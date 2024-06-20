import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const QuedadaPremiumCard = () => {
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); // Estado local para confirmación

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  // Datos harcodeados para la quedada premium
  const nombreQuedada = "Plan Premium de la Quedada";
  const descripcionQuedada =
    "Este es el plan premium de la quedada. ¡Únete para más diversión y actividades exclusivas!";
  const fecha = "15/07/24"; // Fecha harcodeada en formato dd/mm/AA
  const confirmados = 50; // Cantidad de confirmados harcodeada
  const maxParticipantes = 100; // Máximo número de participantes harcodeado
  const zona = "Zona Sur"; // Zona harcodeada

  // Función para truncar la descripción si supera los 120 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  // Determinar el color del icono basado en el color del texto de la descripción
  const iconColor = styles.description.color || 'white'; // Color del texto de la descripción

  // Función para manejar la confirmación del usuario
  const handleConfirm = () => {
    setConfirmado(true); // Cambia el estado a confirmado
    // Aquí podrías agregar cualquier lógica adicional que necesites al confirmar
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://this-person-does-not-exist.com/img/avatar-genac16e7b8e809ebc4980e1cb3e4944fff.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Juan Pérez</Text>
      </View>
      <Image
        source={{ uri: "https://d2il8hfach02z9.cloudfront.net/uploads/event_photo/photo/5291/Facebook-Event-La-Quedada.jpg?v=1558109781" }}
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
    marginVertical: 10,
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

