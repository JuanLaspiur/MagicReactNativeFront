import React from 'react';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppHeader from '../../components/User/AppHeader';

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
        <Text style={styles.title}>Inicio</Text>
        <View style={styles.content}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar tincidunt enim, et maximus odio tristique nec. In hac habitasse platea dictumst. Vestibulum porta euismod ex ut pellentesque. Curabitur non felis in dui varius tincidunt. Fusce id velit quis neque bibendum laoreet sit amet eget sem.
          </Text>
          {/* Aquí puedes agregar más contenido que deseas que sea scrollable */}
        </View>
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
    alignItems: 'center',
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
