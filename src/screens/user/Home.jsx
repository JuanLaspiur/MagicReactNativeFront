import React from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import IconPerfil from '../../components/User/Home/IconPerfil';
import BoxOptions from '../../components/User/Home/BoxOptions';
import CardsPremiumCarrucel from '../../components/User/Home/CardsPremiumCarrucel'
import CardText from '../../components/User/Home/CardText';
import CardsSimpleCarrucel from '../../components/User/Home/CardsSimpleCarrucel';

const Home = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Inicio" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('./../../assets/Login/Ellipse 1.png')}
          resizeMode="contain"
          style={styles.eclipse}
        />
             <IconPerfil/>
             <BoxOptions/>
             <CardsPremiumCarrucel/>
             <CardText/>
             <CardsSimpleCarrucel/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  eclipse: {
    position: 'absolute',
    top: -120,
    right: 0,
    width: 200,
    height: 200,
  },
});

export default Home;
