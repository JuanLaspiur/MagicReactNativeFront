import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import ModleSelectAnimals from "../Profile/ModleSelectAnimals";
const CardTextMyAnimal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleEditPress = () => {
    setModalVisible(true);
  };
  return (
    <>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>
            ¡Este es tu Animal Totem Seleccionado!
          </Text>
        </View>
        <Image
          source={require("../../../assets/Animals/ICONOS A COLOR-04.png")}
          style={styles.icon}
        />
        <TouchableOpacity onPress={handleEditPress} style={styles.editIcon}>
          <Ionicons name="create-outline" size={19} color="gray" />
        </TouchableOpacity>
      </View>
      <ModleSelectAnimals
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Alineación de los elementos
    backgroundColor: "#EAEAEA", // Color de fondo gris claro
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginHorizontal: 11,
    elevation: 2,
  },
  textContainer: {
    flex: 1, // Esta línea asegura que el contenedor se expanda para ajustarse al contenido del texto
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold", // Texto en negrilla
    marginBottom: 5,
    color: "gray", // Color del texto
  },
  text: {
    fontSize: 14,
    color: "gray", // Color del texto
  },
  icon: {
    width: 70,
    height: 70,
  },
  editIcon: {
    paddingLeft: 10,
    paddingBottom: 40,
    borderRadius: 20,
  },
});

export default CardTextMyAnimal;
