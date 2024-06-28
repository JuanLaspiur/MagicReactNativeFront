// ItemFriend.jsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ItemFriend({ name, lastName, user }) {
  return (
    <View style={styles.container}>
      <Text>Nombre: {name}</Text>
      <Text>Apellido: {lastName}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ItemFriend;