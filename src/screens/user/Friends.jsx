import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome desde @expo/vector-icons
import AppHeader from '../../components/User/AppHeader';
import ItemsFriends from '../../components/User/Friends/ItemsFriends';

function Friends() {
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
      </View>
      <ScrollView style={styles.scrollContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  eclipse1: {
    position: "absolute",
    top: -10,
    right: -105,
    zIndex:-1,
    opacity:0.2
  }, 
   eclipse2: {
    position: "absolute",
    height: 500,
    top: 90,
    left: -105,
    zIndex:-1,
    opacity:0.2
  },
  eclipse3: {
    position: "absolute",
    height: 300,
    top: 50,
    left: 0,
    zIndex:-1,
    opacity:0.2
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
});

export default Friends;


