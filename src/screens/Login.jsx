import React from "react";
import { Image, StyleSheet, View, Text, Dimensions} from "react-native";
const { height } = Dimensions.get('window');
const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Login/Ellipse 1.png")} style={styles.eclipse1} />
      <View style={styles.eclipse2}>  

      <Image source={require("../assets/Login/Ellipse 2.png")} resizeMode="contain"  style={styles.logo_circulo} />
      <Image source={require("../assets/Login/ic2.png")} resizeMode="contain"   style={styles.logo_logo} />
      </View>
      <Text>Soy el logín</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'red'
  },
  eclipse1: {
    position:'absolute',
    top:-29,
    right:-50
  },
  eclipse2: {
    position:'absolute',
    top:-50,
    left:0,
  },
  logo_circulo: {
    position:'relative',
    width:230,
    zIndex:-1},
  logo_logo: {
    position:'absolute',
    width:210, // por que cuando trato de hacer el width se corta la imagen en vez de achicarse?
    zIndex:9999
  }
});
export default Login;
