import React from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const QuedadasSimpleCard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
     navigation.navigate('QuedadaDetail')
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Nombre de la Quedada</Text>
          <Text style={styles.description}>
            Descripción de la quedada. ¡Únete para más diversión y actividades exclusivas!
          </Text>
        </View>
      </View>
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
    padding: 15,
    marginVertical: 10,
    alignSelf: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "white",
  },
});

export default QuedadasSimpleCard;
