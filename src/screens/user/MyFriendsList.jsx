import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppHeader from '../../components/User/AppHeader';
import ItemsFriendsList from '../../components/User/MyFriendsList/ItemsFriendsList';
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";
import { seguidoresQueMeSiguen } from '../../api/User.controller';
import env from '../../../env';

function MyFriendsList() {
  const [authUser, setAuthUser] = useState(null); 
  const [idList, setIdList] = useState([]); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getValueFromSecureStore('user');
        const parsedUser = JSON.parse(userData);
        setAuthUser(parsedUser);

        const followers = await seguidoresQueMeSiguen(parsedUser._id);
        setIdList(followers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    
    fetchData(); 
  }, []); 

  return (
    <View style={styles.container}>
      <AppHeader title="Mis Amigos" />
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color="#CCCCCC" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar en mis amigos ..."
          placeholderTextColor="#CCCCCC"
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.misamigosh4}>Seguidores que sigués</Text>
        {idList.map((item) => (
          <ItemsFriendsList
            key={item.seguidor_id} 
            name="Juan" 
            lastName="Pérez"
            age={25}
            avatarUrl={'https://this-person-does-not-exist.com/img/avatar-gen112654a904a47dbfcd8e1db3f820aaf9.jpg'}
            userID={item.seguidor_id} 
          />
        ))}
      </ScrollView>

      <Image
        source={require("../../assets/Login/pngwing.com (3).png")}
        style={styles.eclipse1}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/pngwing.com (2).png")}
        style={styles.eclipse2}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse3}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    textShadowColor: '#D1D1D1',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
  misamigosh4: {
    color:'gray',
    position:'static',
    fontSize:16
  },
  icon: {
    marginRight: 10,
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
    minHeight:'100vh',
    padding: 15,
    paddingTop: 10,
    paddingBottom:20
  },
  eclipse1: {
    position: 'absolute',
    top: -10,
    right: -105,
    zIndex: -1,
    opacity: 0.1,
  },
  eclipse2: {
    position: 'absolute',
    height: 500,
    top: 90,
    left: -105,
    zIndex: -1,
    opacity: 0.1,
  },
  eclipse3: {
    position: 'absolute',
    height: 300,
    top: 50,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
  },
});

export default MyFriendsList;
