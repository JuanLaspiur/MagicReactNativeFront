import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FilterCardQuedada() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  const nombreEvento = "Nombre del Evento";
  const descripcionEvento =
    "Descripción del evento. ¡Únete para más diversión y actividades exclusivas!";
  const fecha = "20/07/2024"; // Fecha harcodeada
  const confirmados = 30; // Cantidad de confirmados harcodeada
  const maxParticipantes = 50; // Máximo número de participantes harcodeado

  // Función para truncar la descripción si supera los 100 caracteres
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
          <Text style={styles.name}>{nombreEvento}</Text>
          <Text style={styles.description}>{truncateDescription(descripcionEvento, 100)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${confirmados}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    marginVertical: 8,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#999999',
  },
});

export default FilterCardQuedada;

