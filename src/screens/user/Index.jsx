import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Importa los iconos que necesites

import Home from "./Home";
import Friends from "./Friends";
import Profile from "./Profile";
import MessagesBox from "./MessagesBox";

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
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
          name="Friends"
          component={Friends}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MessagesBox"
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
});

export default Index;
