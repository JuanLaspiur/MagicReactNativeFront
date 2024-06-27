import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import ModalSendSurvey from './ModalSendSurvey';
import { useNavigation } from '@react-navigation/native'; 
import env from '../../../../env';
import { getAnimales } from '../../../api/User.controller.js'
import {obtenerNumerosDespuesGuion } from "../../../helpers/animalGetOnlyNumber.js"

function MessageHeader({user}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSurvey, setModalVisibleSurvey] = useState(false);
  const navigation = useNavigation(); 
  const avatarUrl = env.BACK_URL+'/perfil_img/'+user._id
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

  const handleAvatarPress = () => {
    navigation.navigate('OtherUserProfile', {user});
  };

  const handleMenuPress = () => {
    setModalVisible(true); 
  };

  const handleOptionPress = (option) => {
    setModalVisible(false);
    if (option === 'Enviar Encuesta') {
      setModalVisibleSurvey(true);
    }
  };

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

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleAvatarPress}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        </View>
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.lastname}>{user?.last_name}</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.avatarAnimal}>
          <Image   source={animalImages[numero]} style={styles.avatar} />
        </View>
        <TouchableOpacity onPress={handleMenuPress}>
          <Text style={styles.menuText}>...</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Enviar Encuesta')}>
                <Text style={styles.optionText}>Enviar Encuesta</Text>
              </TouchableOpacity>
              {/* Agrega más opciones aquí según sea necesario */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <ModalSendSurvey visible={modalVisibleSurvey} setModalVisibleSurvey={setModalVisibleSurvey} />
    </View>
  );
}

export default MessageHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#F7F7F7',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatarAnimal: {
    width: 35,
    height: 35,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 40,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastname: {
    fontSize: 16,
    color: '#666666',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 24,
    color: '#333333',
    marginRight: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
});
