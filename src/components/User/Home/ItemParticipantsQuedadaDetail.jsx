import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const ItemParticipantsQuedadaDetail = () => {
  const [asistenciaConfirmada, setAsistenciaConfirmada] = useState(false);

  const handlePress = () => {
    Alert.alert(
      "Confirmación de asistencia",
      asistenciaConfirmada ? "¿Deseas cancelar tu asistencia?" : "¿Deseas confirmar tu asistencia?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Confirmar",
          onPress: () => setAsistenciaConfirmada(!asistenciaConfirmada)
        }
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Nombre del Participante</Text>
          <Text style={styles.description}>
            Edad: 44
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={asistenciaConfirmada ? styles.statusConfirmed : styles.statusUnconfirmed}>
          {asistenciaConfirmada ? "Asistencia confirmada" : "Asistencia no confirmada"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#EAEAEA", // Cambiado a gris
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    marginVertical: 10,
    alignSelf: "center",
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
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333", // Color de texto cambiado a gris oscuro
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#333", // Color de texto cambiado a gris oscuro
  },
  statusContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  statusConfirmed: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusUnconfirmed: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    opacity:0.4
  },
});

export default ItemParticipantsQuedadaDetail;
