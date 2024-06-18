import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importar Ionicons desde Expo

const FollowersBox = () => {
  const [currentFollowers, setCurrentFollowers] = useState(0);
  const [currentFollowing, setCurrentFollowing] = useState(0);

  const followersCount = 100;
  const followingCount = 50;
  const startOffset = 20; // Iniciar la animación desde 20 números antes o desde 0 si es menor a 20

  const followersAnimatedValue = useRef(new Animated.Value(0)).current;
  const followingAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateFollowers = () => {
      let count = Math.max(0, followersCount - startOffset); // Iniciar desde 20 números antes o desde 0 si es menor a 20
      const interval = setInterval(() => {
        count++;
        setCurrentFollowers(count);
        if (count >= followersCount) {
          clearInterval(interval);
        }
      }, 20); // Ajustar el intervalo según la velocidad deseada

      Animated.timing(followersAnimatedValue, {
        toValue: followersCount,
        duration: (followersCount - count) * 20, // Ajustar la duración total
        useNativeDriver: false,
      }).start();
    };

    const animateFollowing = () => {
      let count = Math.max(0, followingCount - startOffset); // Iniciar desde 20 números antes o desde 0 si es menor a 20
      const interval = setInterval(() => {
        count++;
        setCurrentFollowing(count);
        if (count >= followingCount) {
          clearInterval(interval);
        }
      }, 20); // Ajustar el intervalo según la velocidad deseada

      Animated.timing(followingAnimatedValue, {
        toValue: followingCount,
        duration: (followingCount - count) * 20, // Ajustar la duración total
        useNativeDriver: false,
      }).start();
    };

    animateFollowers();
    animateFollowing();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="people-outline" size={32} color="gray" />
        <Text style={styles.label}>Seguidores</Text>
        <Animated.Text style={[styles.number, { fontSize: 24 }]}>
          {currentFollowers}
        </Animated.Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="person-outline" size={32} color="gray" />
        <Text style={styles.label}>Siguiendo</Text>
        <Animated.Text style={[styles.number, { fontSize: 24 }]}>
          {currentFollowing}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,

  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    marginLeft: 10,
    color: "#9C9C9C",
    fontSize: 14, // Tamaño de fuente más pequeño para los textos estáticos
  },
  number: {
    marginLeft: 10,
    color: "gray",
    fontSize: 24, // Tamaño de fuente más grande para los números animados
  },
});

export default FollowersBox;


