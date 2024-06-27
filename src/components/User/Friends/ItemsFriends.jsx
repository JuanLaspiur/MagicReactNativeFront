import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getUserById } from '../../../api/User.controller'
import env from '../../../../env.js'

import { getAnimales } from "../../../api/User.controller.js";
import { obtenerNumerosDespuesGuion } from "../../../helpers/animalGetOnlyNumber.js";


function ItemsFriends({ name, lastName, age, avatarUrl, userID }) {
  const [user, setUser] = useState([]);
  const [imageUri, setImageUri] = useState('');
  const navigation = useNavigation();

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

  

 const obtenerUsuario = async() => {
  const response  = await getUserById(userID)
  setUser(response.data)
}  
const handleAvatarPress = () => {
    navigation.navigate('OtherUserProfile')
  };

  const handleMessagePress = () => {
    Alert.alert('Llendo al chat..');
  };


  useEffect(()=>{
    setImageUri(env.BACK_URL + '/perfil_img/' + user._id);
    obtenerUsuario()
    const getAllAnimals = async () => {
      try {
        const data = await getAnimales();
        setAnimalsList(data);
      } catch (error) {
        console.log("Error al obtener la lista de animales " + error);
      }
    };
    getAllAnimals();
  },[])

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
    <TouchableOpacity style={styles.card} onPress={handleAvatarPress}>
      <View style={styles.avatarContainer}>
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse1}
      />
            <Image
        source={require("../../../assets/Login/Ellipse 2.png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
          <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
              <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse3}
      />
        {avatarUrl ? (
          <Image source={{ uri: imageUri }}  style={styles.avatar} />
        ) : (
          <FontAwesome name="user-circle-o" size={50} color="#AED0F6" />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>{`${user.last_name === null ? '           ' : user.last_name} - ${user.age} años`}</Text>
        </View>
        <View style={styles.avatarAnimalContainer}>
          <Image     source={animalImages[numero]} style={styles.avatarAnimal} />
        </View>
      </View>
      <TouchableOpacity onPress={handleMessagePress} style={styles.messageContainer}>
        <Ionicons name="paper-plane-outline" size={22} color="#AED0F6" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eclipse1: {
    position:'absolute',
    height:'140%',
    opacity:0.2,
    left:-40
  },
  eclipse2: {
    position:'absolute',
    height:'140%',
    opacity:0.1,
    left:-20
  },  
  eclipse3: {
    position:'absolute',
    height:'140%',
    opacity:0.2,
    left:-70
  },
  card: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    marginVertical: 5,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap:10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666666",
  },
  messageContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AED0F6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarAnimalContainer: {
    width: 25,
    height: 25,
    borderRadius: 25,
    overflow: 'hidden',
    opacity: 0.5,
    marginTop:19
  },
  avatarAnimal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ItemsFriends;
