import React, { useState, useEffect } from "react";
import { View, Modal, FlatList, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { getAnimales } from '../../../api/User.controller'


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

const ModleSelectAnimals = ({modalVisible, setModalVisible}) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [ list, setList ] = useState([])

  const fetchAnimalsList = async() => {
    const response =  await getAnimales()
    setList(response)
  } 
  const handleAnimalSelect = (imageIndex) => {
    const animalId = imageIndex -27; 
    
    const selectedAnimal = list.find(animal => animal.id === animalId);
    
    if (selectedAnimal) {
      console.log('ID Animal seleccionado:', selectedAnimal._id);
      setSelectedAnimal(selectedAnimal._id);
    } else {
      console.warn('Animal no encontrado en la lista');
    }
  
    // setModalVisible(false);
  };

  useEffect(()=>{
    fetchAnimalsList()
  },[])

  return (
    <View style={styles.container}>
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
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleAnimalSelect(item)}>
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
   </View>
  );
};

export default ModleSelectAnimals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  selectedAnimalContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  selectedAnimalText: {
    fontSize: 16,
    color: 'gray',
  },
  selectedAnimalImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
