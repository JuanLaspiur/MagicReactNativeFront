import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUserById } from '../../../api/User.controller'
import { getChatBychatID } from '../../../api/Chat.controller';
import env from '../../../../env';
import { getAnimales } from '../../../api/User.controller.js'
import {obtenerNumerosDespuesGuion } from "../../../helpers/animalGetOnlyNumber.js"


const ItemMessageBox = ({ message, profileImage = require('../../../assets/Animals/ICONOS A COLOR-21.png'), name = 'John', lastName = 'Doe', timestamp = 1660424800000 }) => {
  const navigation = useNavigation();
  const [user , setUser] = useState(null)
  const [ chat , setChat ] = useState([])
  const [ mensajes , setMensajes ] = useState([])
  const [lastMessage, setLastMessage] = useState('Hey, how are you?'); 
  const [imageUri, setImageUri] = useState('');

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
    const fetchUserById = async () => {
      try {
        const response = await getUserById(message.otro_id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchChatById = async () => {
      try {
        const response = await getChatBychatID(message._id);
        setChat(response.data);
        // Actualizar el estado del último mensaje
        if (response.data && response.data.messages && response.data.messages.length > 0) {
          const lastMessageText = response.data.messages[response.data.messages.length - 1].text;
          setLastMessage(lastMessageText);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const getAllAnimals = async () => {
      try {
        const data = await getAnimales();
        setAnimalsList(data);
      } catch (error) {
        console.log("Error al obtener la lista de animales " + error);
      }
    };

    const myAnimal = async ()=> {
      if (animalsList.length > 0 && user.animal) {
        let myAnimalInTheList = animalsList.find((item) => item._id === user.animal);
        setAnimal(myAnimalInTheList);
        if (myAnimalInTheList) {
          setNumero(obtenerNumerosDespuesGuion(myAnimalInTheList.img)); 
        } else if (user.animal_img) {
          setNumero(obtenerNumerosDespuesGuion(user.animal_img));
        }
      }
    }

    getAllAnimals();
    fetchUserById();
    fetchChatById();
    setImageUri(env.BACK_URL + '/perfil_img/' + message.otro_id);
    myAnimal()
  }, [user]);

  const handlePress = () => {
    navigation.navigate('ChatRoom',{user, chat, mensajes});
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.messageContainer}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: imageUri }} style={styles.profileImage} />
      </View>
      <View style={styles.messageDetails}>
      <Text style={styles.nameText}>{user?.name} {user?.last_name}</Text>
      { /*  <Text style={styles.status}>{lastMessage}</Text> */ }
        <Text style={styles.lastMessageText}>{lastMessage}</Text>
      </View>
      <Image source={animalImages[numero]} style={styles.profileAnimal} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileAnimal: {
    width: 0,
    height: 30,
    borderRadius: 25,
  },
  messageDetails: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#AED0F6', // Celeste
  },
  lastMessageText: {
    fontSize: 14,
    color: '#666',
  },
  timestampText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default ItemMessageBox;
