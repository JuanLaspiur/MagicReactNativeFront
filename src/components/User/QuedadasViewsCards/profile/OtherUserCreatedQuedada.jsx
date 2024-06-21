import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { getQuedadaById } from "../../../../api/Quedada.controller";

const OtherUserCreatedQuedada = () => {
  const navigation = useNavigation();
  const [quedada, setQuedada] = useState(null);

  useEffect(() => {
    const fetchQuedada = async () => {
      try {
        const response = await getQuedadaById('6670884ffe2bc567972f31de'); // Llamada a la API para obtener la quedada por ID
        setQuedada(response); // Actualiza el estado con los datos de la quedada obtenidos
      } catch (error) {
        console.error('Error al obtener la quedada:', error);
        // Manejo de errores aquí
      }
    };

    fetchQuedada();
  }, []); // Se ejecuta cada vez que quedadaId cambia

  const handlePress = () => {
    navigation.navigate('QuedadaDetail', { quedada });
  };

  if (!quedada) {
    return null; // Puedes mostrar un spinner u otra interfaz mientras se carga la quedada
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: quedada.imagen }} // Ajusta el campo según la estructura de la quedada obtenida
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{quedada.nombre}</Text> {/* Ajusta el campo según la estructura de la quedada obtenida */}
          <Text style={styles.description}>{quedada.descripcion}</Text> {/* Ajusta el campo según la estructura de la quedada obtenida */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#E8E8E8", // Color gris claro
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
    fontSize: 18,
    fontWeight: "bold",
    color: "gray", // Cambia el color del texto según sea necesario
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray", // Cambia el color del texto según sea necesario
  },
});

export default OtherUserCreatedQuedada;
