import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getUserById } from '../../../api/User.controller'
import env from "../../../../env";

function ItemsFriendsList({ name, lastName, age, avatarUrl, userID }) {
  const navigation = useNavigation();
  const [user , setUser] = useState({})
  const [imageUri, setImageUri] = useState('');

  const handleAvatarPress = () => {
    navigation.navigate('OtherUserProfile')
  };

  const handleMessagePress = async() => {
    const response = await getUserById(userID)
    setUser(response.data)

  };

  useEffect(()=>{
    setImageUri(env.BACK_URL + '/perfil_img/' + userID);
    handleMessagePress()

  },[])



  return (
    <TouchableOpacity style={styles.card} onPress={handleAvatarPress}>
      <View style={styles.avatarContainer}>
      <Image
        source={require("../../../assets/Login/pngwing.com (3).png")}
        resizeMode="contain"
        style={styles.eclipse1}
      />
            <Image
       source={require("../../../assets/Login/pngwing.com (3).png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
        <Image   source={{ uri: imageUri }} style={styles.avatar} />
        
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>{`${user.last_name} - ${user.age} años`}</Text>
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
    opacity:0.1,
    left:-250
  },
  eclipse2: {
    position:'absolute',
    height:'140%',
    opacity:0.1,
    left:-300
  },  
  eclipse3: {
    position:'absolute',
    height:'140%',
    opacity:0.1,
    left:-350
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

export default ItemsFriendsList;
