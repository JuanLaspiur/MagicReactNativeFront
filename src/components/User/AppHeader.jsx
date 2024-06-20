import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Para los iconos
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ title }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    switch (title) {
      case "QuedadaDetail":
        navigation.navigate("Index");
        break;
      case "Quedada B":
        navigation.navigate("Index");
        break;
      default:
        navigation.navigate("Index");
    }
  };
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("./../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse}
      />
      <Image
        source={require("./../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
      <Image
        source={require("./../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse3}
      />
    <TouchableOpacity style={title === 'Inicio' || title === 'Amigos' || title === 'MyPlansGestion' || title === 'Perfil' || title === 'Mensajes'? styles.hiddenContainer : styles.iconContainer }>
      <Ionicons
        name="arrow-back"
        size={24}
        color="gray"
        onPress={handlePress}
      />
    </TouchableOpacity>
      <Image
        source={require("./../../assets/Login/smallIcon.png")}
        resizeMode="contain"
        style={styles.logoHeader}
      />
      {/*   <Text style={styles.headerTitle}>{title}</Text> */}
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="log-out-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  logoHeader: {
    height: "80%",
  },
  eclipse: {
    position: "absolute",
    right: 70,
    height: 72,
    transform: [{ rotate: "305deg" }],
    zIndex: -1,
  },
  eclipse2: {
    position: "absolute",
    right: 100,
    height: 52,
    transform: [{ rotate: "105deg" }],
    zIndex: -1,
  },
  eclipse3: {
    position: "absolute",
    right: 56,
    height: 52,
    transform: [{ rotate: "-500deg" }],
    zIndex: -1,
  },
  iconContainer: {
    padding: 10,
  },
  hiddenContainer: {
    opacity: 0,
    padding: 10
},
});

export default AppHeader;
