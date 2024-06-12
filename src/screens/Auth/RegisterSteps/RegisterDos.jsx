import React, { useState } from 'react';
import { Image ,StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

function RegisterDos() {
  return (
    <View style={styles.container}>          
    <Image
    source={require("../../../assets/Login/Ellipse 1.png")}
    style={styles.eclipse1}
  />
  <View style={styles.titles}>
    <Text style={styles.h1} >Registro de Usuario</Text>
    <Text style={styles.h6}>Bienvenido a Magic Day, una aplicacion donde podras encontrar todos los planes que necesites</Text>
    </View>
    </View>
  )
}

export default RegisterDos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      padding: 20,
     
    },
    eclipse1: {
        position: "absolute",
        top: -90,
        right: -105,
      },
      titles: {
       paddingTop:35,
      },
      h1: {
        fontSize:19, 
        marginVertical:10,
        marginTop:30,
        color:'gray',
      },
      h6: {
       color:'gray',
       fontSize:12
      }
    })