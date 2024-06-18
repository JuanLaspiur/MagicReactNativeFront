import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BoxIconsYourProfile = () => {
  const [following, setFollowing] = useState(false); // Estado inicial: no siguiendo

  const toggleFollow = () => {
    setFollowing(!following); // Cambiar estado de seguimiento
  };

  const sendMessage = () => {
    Alert.alert('Llendo al chat'); // Mostrar alerta al presionar el ícono de mensajes
  };

  return (
    <View style={styles.container}>
      {/* Botón Seguir */}
      <TouchableOpacity style={styles.box} onPress={toggleFollow}>
        <Ionicons name={following ? "arrow-undo" : "dice"} size={40} color="gray" />
        <Text style={styles.text}>{following ? "Dejar de Seguir" : "Seguir"}</Text>
      </TouchableOpacity>

      {/* Botón Mensajes */}
      {following && (
        <TouchableOpacity style={styles.box} onPress={sendMessage}>
          <Ionicons name="paper-plane-outline" size={40} color="gray" />
          <Text style={styles.text}>Mensaje</Text>
        </TouchableOpacity>
      )}

      {/* Botón Sus Amistades */}
      <TouchableOpacity style={styles.box}>
        <Ionicons name="people-outline" size={40} color="gray" />
        <Text style={styles.text}>Sus Amistades</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%', // Ajusta el tamaño según sea necesario
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
});

export default BoxIconsYourProfile;
