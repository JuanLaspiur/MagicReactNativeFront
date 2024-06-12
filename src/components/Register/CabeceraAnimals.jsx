import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";

function CabeceraAnimals() {
  return (
    <View  style={styles.container}>
    <Image
      source={require("../../assets/Login/Ellipse 2.png")}
      style={styles.eclipse2}
      resizeMode="contain"
    />
    <View style={styles.animalsContainer}>
    <Image
      source={require("../../assets/Animals/ICONOS A COLOR-02.png")}
      style={styles.animals1}
      resizeMode="contain"
    />
         <Image
      source={require("../../assets/Animals/ICONOS A COLOR-05.png")}
      style={styles.animals2}
      resizeMode="contain"
    />
        <Image
      source={require("../../assets/Animals/ICONOS A COLOR-15.png")}
      style={styles.animals3}
      resizeMode="contain"
    /></View>

  </View>
  )
}

export default CabeceraAnimals

const styles = StyleSheet.create({
  eclipse2: {
    position: "absolute",
    top: -120,
    left: -50,
    width:150
  },
  animalsContainer: {
    width:'35%',
    display:'flex',
    flexDirection:'row',
    position:'absolute',
    top:-35,
    left:32,
    height:120,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  animals1: {
     width: 75, // por que cuando trato de hacer el width se corta la imagen en vez de achicarse?
    marginTop:50
    },
  animals2: {
    width: 60,
  },
  animals3: {
    width: 70,
    marginTop:100
  }
})