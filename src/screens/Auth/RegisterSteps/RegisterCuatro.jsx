import React, { useState, useEffect } from "react";
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
import { useNavigation } from '@react-navigation/native';
import { getCities, getCommunities } from "../../../api/User.controller";

function RegisterCuatro({ onDataChange }) {
  const [communitiesList, setCommunitiesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [favoriteSports, setFavoriteSports] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState(null); 
  const [selectedCity, setSelectedCity] = useState('Madrid'); 
  const [madridZone, setMadridZone] = useState("");
  const [isSpanish, setIsSpanish] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [allData, setAllData] = useState([])

  const navigation = useNavigation();

  const handleFinishRegistration = () => {
    if (!country || !phone || !profession || !favoriteMovie || !favoriteSports || !hobbies) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }
    if (isSpanish) {
      const defaultCommunity = communitiesList.find(community => community.id === 1);
      setSelectedCommunity(defaultCommunity);
    }
    const data = {
      country,
      phone,
      profession,
      favoriteMovie,
      favoriteSports,
      hobbies,
      selectedCommunity,
      selectedCity,
      madridZone
    };
    setAllData(data)
    setShowTermsModal(true);
  };

  const handleCloseModal = () => {
    setShowTermsModal(false);
  };

  useEffect(() => {
    const fetchBornCommunities = async () => {
      try {
        const response = await getCommunities();
        if (Array.isArray(response)) {
          setCommunitiesList(response);
        } else {
          console.error("Se esperaba un array para las comunidades.");
        }
      } catch (error) {
        console.log('Error al obtener las comunidades ', error);
      }
    };

    const fetchCities = async () => {
      try {
        const response = await getCities();
        if (Array.isArray(response)) {
          setCitiesList(response);
        } else {
          console.error("Se esperaba un array para las ciudades.");
        }
      } catch (error) {
        console.log('Error al obtener las ciudades ', error);
      }
    };

    fetchBornCommunities();
    fetchCities();
  }, []);

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
        onPress={() => navigation.navigate('RegisterTres')}
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
        <TextInput
          style={styles.input}
          placeholder="País de Nacimiento"
          value={country}
          onChangeText={setCountry}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono de contacto"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Cargo o profesión"
          value={profession}
          onChangeText={setProfession}
        />
        <TextInput
          style={styles.input}
          placeholder="Película favorita"
          value={favoriteMovie}
          onChangeText={setFavoriteMovie}
        />
        <TextInput
          style={styles.input}
          placeholder="Deportes favoritos"
          value={favoriteSports}
          onChangeText={setFavoriteSports}
        />
        <TextInput
          style={styles.input}
          placeholder="Hobbies"
          value={hobbies}
          onChangeText={setHobbies}
        />
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
              selectedValue={selectedCommunity}
              style={[styles.pickerSelect]}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedCommunity(itemValue);
              }}
            >
              <Picker.Item
                style={styles.pickerItem}
                label="Comunidad Autónoma Natal"
                value=""
              />
              {communitiesList.map((community, index) => (
                <Picker.Item
                  key={index}
                  style={styles.pickerItem}
                  label={community.name}
                  value={community.name}
                />
              ))}
            </Picker>
          </>
        )}
        <Text style={styles.h6}>Ciudad Actual</Text>
        <Picker
          selectedValue={selectedCity}
          style={styles.pickerSelect}
          onValueChange={(itemValue, itemIndex) => {
            if (itemValue !== "") {
              setSelectedCity(itemValue);
            }
          }}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="Ciudad Actual"
            value=""
          />
          {citiesList.map((city, index) => (
            <Picker.Item
              key={index}
              style={styles.pickerItem}
              label={city.name}
              value={city.name}
            />
          ))}
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
          <Picker.Item style={styles.pickerItem} label="Centro" value="Centro" />
          <Picker.Item style={styles.pickerItem} label="Este" value="Este" />
          <Picker.Item style={styles.pickerItem} label="Oeste" value="Oeste" />
        </Picker>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFinishRegistration} 
          >
            <Text style={styles.buttonText}>¡Finalizar registro!</Text>
          </TouchableOpacity>
        </View>

        <TermsAndConditionsModal
          isVisible={showTermsModal}
          onClose={handleCloseModal} 
          onDataChange={onDataChange}
          allData={allData}
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
