import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración

const ParticipationQuedadaCard = ({quedada}) => {
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); // Estado local para confirmación

  const handlePress = () => {
    navigation.navigate('QuedadaDetail',{quedada});
  };

  // Datos harcodeados para la participación en la quedada
  const eventName = quedada.name;
  const eventDescription = quedada.description;
  const fecha = quedada.date; // Fecha harcodeada en formato dd/mm/AA
  const confirmados = 30; // Cantidad de confirmados harcodeada
  const maxParticipantes = 50; // Máximo número de participantes harcodeado
  const zona = "Zona Centro"; // Zona harcodeada

  // Función para truncar la descripción si supera los 120 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  // Determinar el color del icono basado en el color del texto de la descripción
  const iconColor = styles.description.color || '#666666'; // Color del texto de la descripción

  // Función para manejar la confirmación del usuario
  const handleConfirm = () => {
    setConfirmado(true); // Cambia el estado a confirmado
    // Aquí podrías agregar cualquier lógica adicional que necesites al confirmar
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
       {/* <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.avatar}
        /> */}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{eventName}</Text>
          <Text style={styles.description}>{truncateDescription(eventDescription, 50)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${confirmados}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
      {/* Renderizado condicional del icono */}
      {confirmado ? (
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <Ionicons name="flash-outline" size={24} color="white" />
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: iconColor }]}
          onPress={handleConfirm}
        >
          <Ionicons name="flash-off-outline" size={24} color="white" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#F2F2F2', // Light gray background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10, // Reduced padding compared to the original
    marginVertical: 8, // Adjusted margin for spacing
    alignSelf: 'center',
    position: 'relative', // Para contener el icono con posición absoluta
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16, // Adjusted font size for event name
    fontWeight: 'bold',
    color: '#333333', // Darker text color
    marginBottom: 5,
    marginRight:10
  },
  description: {
    fontSize: 12, // Adjusted font size for description
    color: '#666666', // Slightly darker text color
    maxHeight: 36, // Limit height of description
    overflow: 'hidden', // Hide overflow text
    marginBottom: 5, // Adjusted bottom margin
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5, // Adjusted top margin
  },
  infoText: {
    fontSize: 12,
    color: '#666666',
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

export default ParticipationQuedadaCard;

