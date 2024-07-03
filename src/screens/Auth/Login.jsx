import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { login } from "../../api/Login.controller";
const { height } = Dimensions.get("window");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  const handleLogin = async() => {
    //const credentials = { email, password };
    const response = await login(email, password);
   // console.log(credentials)
   // navigation.navigate('Index')
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Login/Ellipse 1.png")}
        style={styles.eclipse1}
      />
      <View style={styles.eclipse2}>
        <Image
          source={require("../../assets/Login/Ellipse 2.png")}
          resizeMode="contain"
          style={styles.logo_circulo}
        />
        <Image
          source={require("../../assets/Login/ic2.png")}
          resizeMode="contain"
          style={styles.logo_logo}
        />
      </View>
      <View style={styles.container_inicio_session}>
        <View style={styles.container_inicia_session_gooogle}>
          <TouchableOpacity style={styles.google_boton}>
            <Image
              source={require("../../assets/Login/logo_google_negro.png")}
              resizeMode="contain"
              style={styles.icono_google}
            />
            <Text style={{ fontWeight: 600, color: "gray" }}>
              Inicia Sesión con Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_inicio_session_mail}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}  >Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_crear_recuperar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", fontSize: 11, marginBottom: 7 }}>
              ¿Olvidaste tu contraseña?{"    "}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#007AFF",
                  fontWeight: "700",
                  marginLeft: 5,
                  fontSize: 11,
                  paddingTop: 1,
                }}
              >
                Presiona aquí
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", fontSize: 13 }}>
              ¿No tienes cuenta aún?{"    "}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#007AFF", fontWeight: 700, fontSize: 13 }} onPress={() => navigation.navigate('IndexRegister')}>
                Crea una cuenta
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "gray", marginTop: 65, fontSize: 12 }}>
            Magic day versión 1.2.0
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  eclipse1: {
    position: "absolute",
    top: -29,
    right: -50,
  },
  eclipse2: {
    position: "absolute",
    top: -50,
    left: 0,
  },
  logo_circulo: {
    position: "relative",
    width: 230,
    zIndex: -1,
  },
  logo_logo: {
    position: "absolute",
    width: 210,
  },
  container_inicia_session_gooogle: {
    display: "flex",
    alignItems: "center",
    marginTop: 240,
    height: 60,
  },
  google_boton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 10,
    // borderColor: 'gray',
    // borderWidth: 1,
    // backgroundColor:'rgba(143, 143, 143, 0.1)'
  },
  icono_google: {
    width: 20,
    marginRight: 12,
  },
  container_inicio_session_mail: {
    width: 300,
    display: "flex",
    alignItems: "center",
  },
  // inputs
  inputContainer: {
    display: "flex",
    marginTop: 5,
    alignItems: "center",
    width: "100%",
    height: 140,
  },/*
  input: {
    borderWidth: 1,
    borderColor: "#8F8F8F", // Gris claro con transparencia
    borderRadius: 5,
    padding: 7,
    marginBottom: 10,
    width: "100%",
  }, */
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F', // Gris claro
    padding: 7,
    marginBottom: 10,
    width: '100%',
  },  
  loginButton: {
    display:'flex',
    backgroundColor: "#007AFF", // Azul
    padding: 10,
    borderRadius: 5,
    width: "100%",    
    justifyContent:"center",
    alignItems:'center'
  },
  loginButtonText: {
    color: "#fff",
  },
  container_crear_recuperar: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: "80%",
    height: 100,
    top: 540,
  },
});
export default Login;
