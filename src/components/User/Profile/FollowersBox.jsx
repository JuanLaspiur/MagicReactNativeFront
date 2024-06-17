import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importar FontAwesome desde Expo

const FollowersBox = () => {
  // Supongamos que estos son los datos de seguidores y seguidos
  const followersCount = 100;
  const followingCount = 50;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome name="users" size={24} color="gray" />
        <Text style={styles.text}>Seguidores {followersCount}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="user" size={24} color="gray" />
        <Text style={styles.text}>Siguiendo {followingCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor:'gray',
    margin:'auto',
    opacity:0.5,
    paddingLeft:5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,

  },
  text: {
    marginLeft: 10,
    color: "gray",
    fontSize: 18,

  },
});

export default FollowersBox;
