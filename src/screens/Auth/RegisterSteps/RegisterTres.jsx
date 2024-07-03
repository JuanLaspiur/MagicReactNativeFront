import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import CabeceraAnimals from "../../../components/Register/CabeceraAnimals";
import { useNavigation } from '@react-navigation/native';
import { getAnimales, updateUserInfo } from '../../../api/User.controller';

const animalImages = [
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

function RegisterTres({onDataChange, returnGoback}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(animalImages[0]);
  const [animalId, setAnimalId] = useState(null);
  const [list, setList] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchAnimalsList();
  }, []);

  const fetchAnimalsList = async () => {
    try {
      const response = await getAnimales();
      setList(response);
    } catch (error) {
      console.error('Animal list error:', error);
    }
  };

  const handleAnimalSelect = (imageIndex) => {
    setSelectedAnimal(animalImages[imageIndex]);
    const selectedAnimalId = list[imageIndex]?._id;

    if (selectedAnimalId) {
      setAnimalId(selectedAnimalId);
   
      console.warn('Animal no encontrado en la lista');
    }

    setModalVisible(false);
  };

  const handleContinue = ()=> {
   onDataChange(animalId)
  }



  return (
    <View style={styles.container}>
      <CabeceraAnimals />
      <TouchableOpacity style={styles.closeButton} onPress={returnGoback}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.containerInputs}>
        <Text style={styles.h1}>Selecciona tu animal</Text>
        {selectedAnimal && (
          <Image source={selectedAnimal} style={styles.avatar} />
        )}
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Icon name="paw" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Animal</Text>
        </TouchableOpacity>
      </View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={animalImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleAnimalSelect(index)}>
                  <Image source={item} style={styles.animalImage} />
                </TouchableOpacity>
              )}
              numColumns={3}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSiguiente} onPress={handleContinue}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterTres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: '100vh',
  },
  containerInputs: {
    width: '100%',
    height: 100,
    marginTop: 200,
    display:'flex',
    alignItems:'center'
  },
  h1: {
    fontSize: 19,
    marginVertical: 10,
    marginTop: 19,
    color: 'gray',
  },
  button: {
    backgroundColor: '#A1A1A1',
    padding: 8,
    borderRadius: 5,
    marginTop: 18,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 5,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '95%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  animalImage: {
    width: 70,
    height: 70,
    margin: 10,
  },
  closeModalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#A1A1A1',
    borderRadius: 5,
  },
  closeModalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }, 
   buttonContainer: {
    position:'absolute',
    bottom:40,
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonSiguiente: {
    backgroundColor: '#66A3E8',
    padding: 12,
    borderRadius: 5,
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  }
});
