import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const QuedadasSimpleCard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  // Datos harcodeados para la quedada
  const nombreQuedada = "Nombre de la Quedada";
  const descripcionQuedada =
    "Descripción de la quedada. ¡Únete para más diversión y actividades exclusivas!";
  const fecha = "15 de julio de 2024"; // Fecha harcodeada
  const asistentes = 25; // Cantidad de asistentes harcodeada
  const zona = "Zona Norte"; // Zona harcodeada

  // Función para truncar la descripción a máximo 2 líneas
  const truncateDescription = (text, maxLines) => {
    const lines = text.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + "...";
    } else {
      return text;
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nombreQuedada}</Text>
          <Text style={styles.description}>{truncateDescription(descripcionQuedada, 2)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`${asistentes} asistentes`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
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
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 3,
  },
  description: {
    fontSize: 13,
    color: "white",
    lineHeight: 18, // Ajusta el interlineado según sea necesario
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
});

export default QuedadasSimpleCard;



