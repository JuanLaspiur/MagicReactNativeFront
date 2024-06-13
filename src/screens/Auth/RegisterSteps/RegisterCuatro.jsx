import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";
import TermsAndConditionsModal from "../../../components/Register/TermsAndConditionsModal";

function RegisterCuatro() {
  const [city, setCity] = useState("");
  const [isSpanish, setIsSpanish] = useState(false);
  const [madridZone, setMadridZone] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false); 

  const handleFinishRegistration = () => {
    setShowTermsModal(true);
  };

  const handleCloseModal = () => {
    setShowTermsModal(false); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/Login/smallIcon.png")}
        resizeMode="contain"
        style={styles.logoApp}
      />
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse1}
      />
      <Image
        source={require("../../../assets/Login/Ellipse 1.png")}
        resizeMode="contain"
        style={styles.eclipse2}
      />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => alert("Salir")}
      >
        <Ionicons name="arrow-back" size={20} color="gray" />
      </TouchableOpacity>
      <View style={styles.titles}>
        <Text style={styles.h1}>Última etapa de registro</Text>
        <Text style={styles.h6}>
          ¡Ya falta poco para ser parte de la comunidad de Mágic!
        </Text>
      </View>
      <ScrollView style={styles.inputsConainer}>
        <TextInput style={styles.input} placeholder="País de Nacimiento" />
        <TextInput
          style={styles.input}
          placeholder="Teléfono de contacto"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="Cargo o profesión" />
        <TextInput style={styles.input} placeholder="Película favorita" />
        <TextInput style={styles.input} placeholder="Deportes favoritos" />
        <TextInput style={styles.input} placeholder="Hobbies" />
        <Text style={styles.h6bis}>Información geográfica</Text>
        <CheckBox
          title="He nacido en España (No obligatorio)."
          checked={isSpanish}
          onPress={() => setIsSpanish(!isSpanish)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          style={{ color: "gray" }}
        />
        {isSpanish && (
          <>
            <Text style={styles.h6}>Comunidad Autónoma Natal</Text>
            <Picker
              selectedValue={city}
              style={[styles.pickerSelect]}
              onValueChange={(itemValue, itemIndex) => {
                setCity(itemValue);
              }}
            >
              <Picker.Item
                style={styles.pickerItem}
                label="Comunidad Autónoma Natal"
                value=""
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Madrid"
                value="Madrid"
              />
            </Picker>
          </>
        )}
        <Text style={styles.h6}>Ciudad Actual</Text>
        <Picker
          selectedValue={city}
          style={styles.pickerSelect}
          onValueChange={(itemValue, itemIndex) => {
            if (itemValue !== "") {
              setCity(itemValue);
            }
          }}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="Ciudad Actual"
            value=""
          />
          <Picker.Item style={styles.pickerItem} label="Madrid" value="Madrid" />
        </Picker>
        <Text style={styles.h6}>Zona de Madrid</Text>
        <Picker
          selectedValue={madridZone}
          style={styles.pickerSelect}
          onValueChange={(itemValue, itemIndex) => setMadridZone(itemValue)}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="Zona de Madrid"
            value=""
          />
          <Picker.Item style={styles.pickerItem} label="Norte" value="Norte" />
          <Picker.Item style={styles.pickerItem} label="Sur" value="Sur" />
          <Picker.Item
            style={styles.pickerItem}
            label="Centro"
            value="Centro"
          />
          <Picker.Item style={styles.pickerItem} label="Este" value="Este" />
          <Picker.Item style={styles.pickerItem} label="Oeste" value="Oeste" />
        </Picker>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFinishRegistration} // Llamar a la función al hacer clic
          >
            <Text style={styles.buttonText}>¡Finalizar registro!</Text>
          </TouchableOpacity>
        </View>

        {/* Modal de términos y condiciones */}
        <TermsAndConditionsModal
          isVisible={showTermsModal}
          onClose={handleCloseModal} // Pasar la función para cerrar el modal
        />
      </ScrollView>
    </View>
  );
}

export default RegisterCuatro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  eclipse1: {
    position: "absolute",
    top: -99,
    right: -30,
  },
  eclipse2: {
    position: "absolute",
    top: -60,
    left: 150,
  },
  titles: {
    paddingTop: 35,
    alignItems: "center",
  },
  h1: {
    fontSize: 19,
    marginVertical: 10,
    marginTop: 30,
    color: "gray",
  },
  h6: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 20,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 5,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  inputsConainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#8F8F8F", // Gris claro
    padding: 7,
    marginBottom: 10,
    width: "100%",
  },
  logoApp: {
    width: 50,
    height: 50,
    marginHorizontal: "auto",
    marginTop: 50,
    zIndex: 99999,
    marginBottom: -20,
  },
  h6bis: {
    color: "gray",
    marginTop: 30,
    marginHorizontal: "auto",
    fontSize: 12,
  },
  pickerSelect: {
    color: "gray",
    marginTop: 10,   
  },
  pickerItem: {
    fontSize:13
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginTop: 15,
  },
  checkboxText: {
    fontWeight: "normal",
    fontSize: 10,
  },
  h6: {
    fontSize: 10,
    fontWeight: "normal",
    color:'gray',
    marginTop:20,
    marginBottom:-15
  },
  buttonContainer: {
    width:'100%',
    display:'flex',
    alignItems:'center',
    paddingVertical:10
  },
  button: {
    backgroundColor: '#66A3E8',
    padding: 12,
    borderRadius: 5,
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
