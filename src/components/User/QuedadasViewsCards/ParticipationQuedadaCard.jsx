import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParticipationQuedadaCard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  // Datos harcodeados para la participación en la quedada
  const eventName = "Nombre del Evento";
  const eventDescription =
    "Descripción del evento. ¡Únete para más diversión y actividades exclusivas!";
  const fecha = "15/07/24"; // Fecha harcodeada en formato dd/mm/AA
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

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{eventName}</Text>
          <Text style={styles.description}>{truncateDescription(eventDescription, 120)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${confirmados}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
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
});

export default ParticipationQuedadaCard;

