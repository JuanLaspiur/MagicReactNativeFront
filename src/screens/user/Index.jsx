import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Importa los iconos que necesites
import { useNavigation } from "@react-navigation/native";

import Home from "./Home";
import Friends from "./Friends";
import Profile from "./Profile";
import MessagesBox from "./MessagesBox";

const Tab = createBottomTabNavigator();

const Index = () => {
  const navigation = useNavigation();

  const handleExitApp = () => {
    alert('Saliendo');
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#AED0F6", // Color de la opción seleccionada
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Amigos"
          component={Friends}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Exit"
          component={() => null} // Componente vacío porque no necesitas renderizar nada
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="exit-outline" size={size} color={color} />
            ),
            tabBarButton: ({ onPress }) => (
              <TouchableOpacity
                style={styles.exitButton}
                onPress={handleExitApp} // Función para salir de la app
              >
                <Ionicons name="exit-outline" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Mensajes"
          component={MessagesBox}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="mail-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  exitButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgrey",
    paddingLeft: 3,
  },
});

export default Index;
