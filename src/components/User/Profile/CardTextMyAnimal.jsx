import React, { useState, useEffect } from "react";
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
import { getAnimales } from "../../../api/User.controller.js";
import { obtenerNumerosDespuesGuion } from "../../../helpers/animalGetOnlyNumber.js";

const CardTextMyAnimal = ({user}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [animalsList, setAnimalsList] = useState([]);
  const [animal, setAnimal] = useState(null);
  const [numero, setNumero] = useState(obtenerNumerosDespuesGuion("../../../assets/Animals/ICONOS A COLOR-00.png"))
  
  const animalImages = [
    require("../../../assets/Animals/ICONOS A COLOR-00.png"),
    require("../../../assets/Animals/ICONOS A COLOR-01.png"),
    require("../../../assets/Animals/ICONOS A COLOR-02.png"),
    require("../../../assets/Animals/ICONOS A COLOR-03.png"),
    require("../../../assets/Animals/ICONOS A COLOR-04.png"),
    require("../../../assets/Animals/ICONOS A COLOR-05.png"),
    require("../../../assets/Animals/ICONOS A COLOR-06.png"),
    require("../../../assets/Animals/ICONOS A COLOR-07.png"),
    require("../../../assets/Animals/ICONOS A COLOR-08.png"),
    require("../../../assets/Animals/ICONOS A COLOR-09.png"),
    require("../../../assets/Animals/ICONOS A COLOR-10.png"),
    require("../../../assets/Animals/ICONOS A COLOR-11.png"),
    require("../../../assets/Animals/ICONOS A COLOR-12.png"),
    require("../../../assets/Animals/ICONOS A COLOR-13.png"),
    require("../../../assets/Animals/ICONOS A COLOR-14.png"),
    require("../../../assets/Animals/ICONOS A COLOR-15.png"),
    require("../../../assets/Animals/ICONOS A COLOR-16.png"),
    require("../../../assets/Animals/ICONOS A COLOR-17.png"),
    require("../../../assets/Animals/ICONOS A COLOR-18.png"),
    require("../../../assets/Animals/ICONOS A COLOR-19.png"),
    require("../../../assets/Animals/ICONOS A COLOR-20.png"),
    require("../../../assets/Animals/ICONOS A COLOR-21.png"),
    require("../../../assets/Animals/ICONOS A COLOR-22.png"),
    require("../../../assets/Animals/ICONOS A COLOR-23.png"),
    require("../../../assets/Animals/ICONOS A COLOR-24.png"),
    require("../../../assets/Animals/ICONOS A COLOR-25.png"),
    require("../../../assets/Animals/ICONOS A COLOR-26.png"),
    require("../../../assets/Animals/ICONOS A COLOR-27.png"),
    require("../../../assets/Animals/ICONOS A COLOR-28.png"),
    require("../../../assets/Animals/ICONOS A COLOR-29.png"),
    require("../../../assets/Animals/ICONOS A COLOR-30.png"),
    require("../../../assets/Animals/ICONOS A COLOR-31.png"),
    require("../../../assets/Animals/ICONOS A COLOR-32.png"),
    require("../../../assets/Animals/ICONOS A COLOR-33.png"),
    require("../../../assets/Animals/ICONOS A COLOR-34.png"),
    require("../../../assets/Animals/ICONOS A COLOR-35.png"),
    require("../../../assets/Animals/ICONOS A COLOR-36.png"),
    require("../../../assets/Animals/ICONOS A COLOR-37.png"),
    require("../../../assets/Animals/ICONOS A COLOR-38.png"),
    require("../../../assets/Animals/ICONOS A COLOR-39.png"),
    require("../../../assets/Animals/ICONOS A COLOR-40.png"),
    require("../../../assets/Animals/ICONOS A COLOR-41.png"),
    require("../../../assets/Animals/ICONOS A COLOR-42.png"),
    require("../../../assets/Animals/ICONOS A COLOR-43.png"),
    require("../../../assets/Animals/ICONOS A COLOR-44.png"),
    require("../../../assets/Animals/ICONOS A COLOR-45.png"),
    require("../../../assets/Animals/ICONOS A COLOR-46.png"),
    require("../../../assets/Animals/ICONOS A COLOR-47.png"),
  ];

  useEffect(() => {
    const getAllAnimals = async () => {
      try {
        const data = await getAnimales();
        setAnimalsList(data);
      } catch (error) {
        console.log("Error al obtener la lista de animales " + error);
      }
    };
    getAllAnimals();
  }, []);
  useEffect(() => {
    if (animalsList.length > 0 && user.animal) {
      let myAnimalInTheList = animalsList.find((item) => item._id === user.animal);
      setAnimal(myAnimalInTheList);
      if (myAnimalInTheList) {
        setNumero(obtenerNumerosDespuesGuion(myAnimalInTheList.img)); 
      } else if (user.animal_img) {
        setNumero(obtenerNumerosDespuesGuion(user.animal_img));
      }
    }
  }, [animalsList, user]);
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
          source={animalImages[numero]}
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
