import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ItemFriend({ name, lastName, user }) {
  const navigation = useNavigation();  

  const handlePressItemFriend = () => {
    navigation.navigate('OtherUserProfile', { user });
  };

  return (
    <TouchableOpacity onPress={handlePressItemFriend}>
      <View style={styles.container}>
        <Text>Nombre: {name}</Text>
        <Text>Apellido: {lastName}</Text>
      </View>
    </TouchableOpacity>
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
