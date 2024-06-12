import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

function RegisterCuatro() {
  return (
    <View style={styles.container}>
                <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          resizeMode="contain"
          style={styles.eclipse1}
        />
                       <Image
          source={require("../../../assets/Login/Ellipse 1.png")}
          resizeMode="contain"
          style={styles.eclipse2}
        />
             <TouchableOpacity style={styles.closeButton} onPress={() => alert('Salir')}>
        <Ionicons name="arrow-back" size={20} color="gray" />
      </TouchableOpacity>    
      <View style={styles.titles}>
        <Text style={styles.h1}>Última etapa de registro</Text>
        <Text style={styles.h6}>
            ¡Ya falta poco para ser parte de la comunidad de Mágic!
        </Text>
      </View>
    <View style={styles.inputsConainer}>
    <TextInput style={styles.input} placeholder="País de Nacimiento" />
  <TextInput 
    style={styles.input} 
    placeholder="Teléfono de contacto" 
    keyboardType="numeric" // Para aceptar solo números
  />
  <TextInput style={styles.input} placeholder="Cargo o profesión" />
  <TextInput style={styles.input} placeholder="Película favorita" />
  <TextInput style={styles.input} placeholder="Deportes favoritos" />
  <TextInput 
    style={[styles.input, { height: 100 }]} // Hacer el campo más grande para "Hobbies"
    placeholder="Hobbies"
    multiline // Permitir varias líneas de texto
  />
    </View>
        <Text></Text></View>
  )
}

export default RegisterCuatro
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: '100vh',
      alignItems: 'center',
    },
    eclipse1: {
        position: "absolute",
        top: -99,
        right: -30,
      },
      eclipse2: {
        position: "absolute",
        top: -60,
        left: 150,
      },  titles: {
        paddingTop: 35,
        alignItems: 'center',
      },
      h1: {
        fontSize: 19,
        marginVertical: 10,
        marginTop: 30,
        color: 'gray',
      },
      h6: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 20,
      },
      closeButton: {
        position: 'absolute',
        top: 40,
        left: 5,
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      },
      inputsConainer: {
        width:'80%',
},
input: {
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F', // Gris claro
    padding: 7,
    marginBottom: 10,
    width: '100%',
  },
  inputTextColor: {
    color:'gray'
  }})