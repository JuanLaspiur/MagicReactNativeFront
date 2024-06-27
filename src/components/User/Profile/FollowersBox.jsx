import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { getSeguidores_seguidos } from "../../../api/User.controller";

const FollowersBox = ({user}) => {
  const [currentFollowers, setCurrentFollowers] = useState(0);
  const [currentFollowing, setCurrentFollowing] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0)
  // const followersCount = 100;
 // const followingCount = 50;
  const startOffset = 20; // Iniciar la animación desde 20 números antes o desde 0 si es menor a 20

  const followersAnimatedValue = useRef(new Animated.Value(0)).current;
  const followingAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const getMyFollowers = async () => {
      try {
        const data = await getSeguidores_seguidos(user._id, 1);
        console.log('Tienes tantos seguidores: ' + data.length);
        setFollowersCount(data.length);
      } catch (error) {
        console.log('Error al obtener seguidores:', error);
      }
    };
    
    const getMyFollowing = async () => {
      try {
        const data = await getSeguidores_seguidos(user._id, 2);
        setFollowingCount(data.length);
      } catch (error) {
        console.log('Error al obtener seguidos:', error);
      }
    };
    

    const animateFollowers = () => {
      let count = Math.max(0, followersCount - startOffset); 
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

  //  animateFollowers();
  //  animateFollowing();
    getMyFollowers();
    getMyFollowing();
  }, [followingCount, followersCount]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="people-outline" size={32} color="gray" />
        <Text style={styles.label}>Seguidores</Text>
        <Animated.Text style={[styles.number, { fontSize: 24 }]}>
          {followersCount}
        </Animated.Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="person-outline" size={32} color="gray" />
        <Text style={styles.label}>Siguiendo</Text>
        <Animated.Text style={[styles.number, { fontSize: 24 }]}>
          {followingCount}
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


