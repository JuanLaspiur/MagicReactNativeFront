import React,  { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableWithoutFeedback ,TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import AppHeader from '../../components/User/AppHeader';
import ItemsFriends from '../../components/User/Friends/ItemsFriends';
import { Ionicons } from '@expo/vector-icons';
import { getSeguidores_seguidos } from '../../api/User.controller.js'
import { getValueFromSecureStore } from '../../helpers/ExpoSecureStore.js';

function Friends() { 
  const [modalVisible, setModalVisible] = useState(false);
  const [friends, setFriends] = useState([]);
  const [user, setUser] = useState([]);

  const handleFilterPress = () => {
    setModalVisible(true);
  };

  const fetchMyFriends = async() =>{
  console.log('Mi Id: '+ user._id)
  //  const data = await getSeguidores_seguidos(user._id)
  //  console.log('Mis amigos  '+ data)
  //  setFriends(data)
  }
  const getAuthUser = async() =>{
    const data = await getValueFromSecureStore('user')
    setUser(JSON.stringify(data))
    console.log('Juan  '+data)
    console.log('USER ID ' + data._id)
  }

  useEffect(()=>{
    getAuthUser();
    fetchMyFriends();
  },[friends])


  return (
    <View style={styles.container}>
      <AppHeader title="Amigos" />
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color="#CCCCCC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar amigos..."
          placeholderTextColor="#CCCCCC"
        />
        <TouchableOpacity onPress={handleFilterPress}>
          <Ionicons name="filter-outline" size={24} color="gray" style={styles.iconFilter} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ItemsFriends name="Juan" lastName="Pérez" age={25} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg'} />
        <ItemsFriends name="María" lastName="García" age={28} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen339bf125824a554545913556a90a43a7.jpg'} />
        <ItemsFriends name="Carlos" lastName="López" age={30} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen1107514e9bf4f1898b0f129c5b55616f.jpg'} />
        <ItemsFriends name="Juan" lastName="Pérez" age={25} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg'} />
        <ItemsFriends name="María" lastName="García" age={28} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen339bf125824a554545913556a90a43a7.jpg'} />
        <ItemsFriends name="Carlos" lastName="López" age={30} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen1107514e9bf4f1898b0f129c5b55616f.jpg'} />
        <ItemsFriends name="Juan" lastName="Pérez" age={25} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg'} />
        <ItemsFriends name="María" lastName="García" age={28} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen339bf125824a554545913556a90a43a7.jpg'} />
        <ItemsFriends name="Carlos" lastName="López" age={30} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen1107514e9bf4f1898b0f129c5b55616f.jpg'} />
        <ItemsFriends name="Juan" lastName="Pérez" age={25} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg'} />
        <ItemsFriends name="María" lastName="García" age={28} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen339bf125824a554545913556a90a43a7.jpg'} />
        <ItemsFriends name="Carlos" lastName="López" age={30} avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen1107514e9bf4f1898b0f129c5b55616f.jpg'} />

        
        
        {/* Agrega más ItemsFriends según sea necesario */}
      </ScrollView>
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse2}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse3}
      />

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false); // Manejar el cierre del modal al presionar fuera de él (en Android)
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>   
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Enviar Encuesta')}>
                <Text style={styles.optionText}>Solo mis seguidos</Text>
              </TouchableOpacity>
              {/* Agrega más opciones aquí según sea necesario */}
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Enviar Encuesta')}>
                <Text style={styles.optionText}>Solo mis seguidores</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Enviar Encuesta')}>
                <Text style={styles.optionText}>De mi zona</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  eclipse1: {
    position: "absolute",
    top: -10,
    right: -105,
    zIndex: -1,
    opacity: 0.2
  },
  eclipse2: {
    position: "absolute",
    height: 500,
    top: 90,
    left: -105,
    zIndex: -1,
    opacity: 0.2
  },
  eclipse3: {
    position: "absolute",
    height: 300,
    top: 50,
    left: 0,
    zIndex: -1,
    opacity: 0.2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginRight: 10,
  },
  iconFilter: {
    marginLeft:10,
    marginRight:2
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    fontSize: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderRadius: 10,
    backgroundColor:'#fff',
    padding:10,
    width: '90%',
    borderRadius:20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor: "#AED0F6",
    paddingHorizontal:10,
    borderRadius:20,
    margin:5
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  }
});

export default Friends;
