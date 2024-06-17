import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
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
    </View>
  );
}

const styles = StyleSheet.create({
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


