import React from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const QuedadaPremiumCard = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('QuedadaDetail')
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Ionicons name="person-circle-outline" size={50} color="white" />
        <Text style={styles.name}>Juan Pérez</Text>
      </View>
      <Image
        source={{ uri: "https://d2il8hfach02z9.cloudfront.net/uploads/event_photo/photo/5291/Facebook-Event-La-Quedada.jpg?v=1558109781" }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Este es el plan premium de la quedada. ¡Únete para más diversión y actividades exclusivas!
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#AED0F6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});

export default QuedadaPremiumCard;

