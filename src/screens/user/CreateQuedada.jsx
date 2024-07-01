import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppHeader from "../../components/User/AppHeader";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import {
  getQuedadaCategories,
  createQuedadaBack,
} from "../../api/Quedada.controller";
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";
import * as FileSystem from "expo-file-system";

const defaultImage = "https://via.placeholder.com/200";

function CreateQuedada() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [maxParticipants, setMaxParticipants] = useState("");
  const [location, setLocation] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [zone, setZone] = useState("Norte");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [quedadaName, setQuedadaName] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [user, setUser] = useState({});
  
  useEffect(() => {
    fetchGetCategories();
    getAuthUser();
  }, []);

  const getAuthUser = async () => {
    const data = await getValueFromSecureStore("user");
    setUser(JSON.parse(data));
  };

  const fetchGetCategories = async () => {
    try {
      const data = await getQuedadaCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
  };

  const handleSubmit = async () => {
    try {
         const imageData = await FileSystem.readAsStringAsync(image, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const formattedDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes()
      ).toISOString();

      const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")} ${time
        .getHours()
        .toString()
        .padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;

      const dataToSend = {
        name: quedadaName,
        description: description,
        date: formattedDate,
        dateTime: formattedDateTime,
        limit: parseInt(maxParticipants), 
        zone: zone,
        location: location,
        category: category,
        privacy: privacy,
        user_id: user._id,
        image: imageData, 
      };

      console.log("Datos del formulario:");
      console.log(dataToSend);

      const response = await createQuedadaBack(dataToSend);

      
    } catch (error) {
      console.error("Error al crear la quedada:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Crear Quedada" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: image || defaultImage }} style={styles.image} />

        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre Quedada:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresá nombre de la Quedada"
            value={quedadaName}
            onChangeText={setQuedadaName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Ingresa la descripción"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha y Hora:</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => {
              setShowDatePicker(true);
              setShowTimePicker(false);
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.dateButtonText}>
              {`${date.toLocaleDateString()} ${time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}`}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => {
              setShowTimePicker(true);
              setShowDatePicker(false);
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.dateButtonText}>Seleccionar Hora</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Máximo de Participantes:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el máximo de participantes"
            value={maxParticipants}
            onChangeText={setMaxParticipants}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Zona:</Text>
          <Picker
            selectedValue={zone}
            style={styles.input}
            onValueChange={(itemValue) => setZone(itemValue)}
          >
            <Picker.Item label="Selecciona zona" value="" />
            <Picker.Item label="Norte" value="Norte" />
            <Picker.Item label="Sur" value="Sur" />
            <Picker.Item label="Este" value="Este" />
            <Picker.Item label="Oeste" value="Oeste" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ubicación:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la ubicación"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Categoría:</Text>
          <Picker
            selectedValue={category}
            style={styles.input}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Selecciona categoría" value="" />
            {categories.map((cat) => (
              <Picker.Item key={cat._id} label={cat.name} value={cat._id} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Privacidad:</Text>
          <Picker
            selectedValue={privacy}
            style={styles.input}
            onValueChange={(itemValue) => setPrivacy(itemValue)}
          >
            <Picker.Item label="Selecciona privacidad" value="" />
            <Picker.Item label="Público" value="Público" />
            {user && user.quedadasPriv && (
              <Picker.Item label="Privado" value="Privado" />
            )}
            {user && user.premium && (
              <Picker.Item label="Premium" value="Premium" />
            )}
          </Picker>
        </View>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: "#AED0F6" }]}
          onPress={handleSubmit}
          activeOpacity={0.7}
        >
          <Text style={styles.submitButtonText}>Crear Quedada</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#D1D1D1",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateButtonText: {
    color: "#333",
  },
  submitButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CreateQuedada;
