import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import AppHeader from "../../components/User/AppHeader";
import ParticipantsCarrucel from "../../components/User/Home/ParticipantsCarrucel";
import { Ionicons } from "@expo/vector-icons";
import env from "../../../env";
const { width: screenWidth } = Dimensions.get("window");
import { formatDate } from "../../helpers/UpdateQuedadaDay";
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";
import {
  asistirAQuedada,
  solicitarParticipacionPremium,
} from "../../api/Quedada.controller";
import { useNavigation } from "@react-navigation/native";
import RequestListModal from "../../components/User/Modals/RequestListModal";

const QuedadaDetail = ({ route }) => {
  const { quedada } = route.params;
  const [authUser, setAuthUser] = useState([]);
  const [asistir, setAsistir] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRequests, setModalRequests] = useState([]);
  
  const urlImagenQuedada = quedada.react
    ? env.BACK_URL + "/quedada_img/" + quedada._id + ".jpg"
    : env.BACK_URL + "/quedada_img/" + quedada._id;

  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const nombreYApellido = quedada.userInfo.name;

  const navigation = useNavigation();

  const getAuthUser = async () => {
    const data = await getValueFromSecureStore("user");
    setAuthUser(JSON.parse(data));
  };

  const isAsistir = () => {
    if (!quedada || !quedada.asistentes) {
      setAsistir(false);
      return;
    }
    const asistir = quedada.asistentes.some(
      (asistente) => asistente.user_id === authUser._id
    );
    setAsistir(asistir);
  };

  useEffect(() => {
    getAuthUser();
    isAsistir();
  }, []);

  const handleAsistirPress = async () => {
    if (quedada.privacy !== "Premium") {
      if (asistir) {
        alert("Cancelar quedada");
        const data = await asistirAQuedada(quedada._id);
      } else {
        alert("Asistir a la quedada");
        const data = await asistirAQuedada(quedada._id);
      }
      setAsistir(!asistir);
    } else {
      try {
        const response = await solicitarParticipacionPremium(quedada._id);
        const sendValue = response.send;

        switch (sendValue) {
          case 1:
            Alert.alert(
              "Solicitud Enviada",
              "Magic te enviará una notificación en caso de ser aceptado en la quedada premium."
            );
            break;
          case 2:
            Alert.alert(
              "Ya has solicitado participar en esta quedada. ",
              "Es una quedada premium debes esperar la respuesta del creador. Mágic te avisará en caso de ser aceptado"
            );
            break;
          case 3:
            Alert.alert("Quedada no encontrada.");
            break;
          default:
            Alert.alert(
              "Error",
              "Ha ocurrido un error al solicitar participación."
            );
            break;
        }
      } catch (error) {
        console.error("Error al cambiar la asistencia:", error);
      }
    }
  };

  const handleEditPress = async () => {
    navigation.navigate("EditQuedada", { quedada });
  };

  const handleInviteMorePeople = async () => {
    navigation.navigate("PremiumGatheringInvitations", { quedada });
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const handleViewRequests = () => {
    // Lógica para mostrar solicitudes en el modal
    setModalRequests(quedada.solicitudesDeParticipacion || []);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <AppHeader title="QuedadaDetail" />
      <Image source={{ uri: urlImagenQuedada }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.titulo}>{quedada.name}</Text>
        <Text style={styles.description}>
          {expanded
            ? quedada.description
            : truncateDescription(quedada.description, 300)}
        </Text>
        {quedada.description.length > 300 && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.verMas}>
              {expanded ? "Ver menos" : "Ver más"}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.datos}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: urlImagePerfil }} style={styles.avatar} />
            <Text style={styles.name}>{nombreYApellido}</Text>
          </View>
          <Text style={styles.datosText}>
            <Ionicons name="person-remove-outline" size={14} color="white " />{" "}
            Max: {quedada.limit}
          </Text>
          <Text style={styles.datosText}>
            <Ionicons name="map-outline" size={14} color="white" /> Zona:{" "}
            {quedada.zone}
          </Text>
          <Text style={styles.datosText}>
            <Ionicons name="calendar-outline" size={14} color="white" /> Fecha:{" "}
            {quedada.dateTime ||
              (!quedada.react && formatDate(quedada.dateTime))}
          </Text>
          <Text style={styles.datosText}>
            <Ionicons name="flash-outline" size={14} color="white" />{" "}
            Asistentes:{" "}
            {(quedada.asistentes ? quedada.asistentes.length : 0) +
              (quedada.solicitudesDeParticipacion
                ? quedada.solicitudesDeParticipacion.length
                : 0)}{" "}
          </Text>
          <Text style={styles.datosText}>
            <Ionicons name="dice-outline" size={14} color="white" />{" "}
            Confirmados: {quedada.asistentes.length}{" "}
          </Text>

          {/* if authUser._id != quedada.user_id*/}
          {authUser &&
            quedada &&
            authUser._id != quedada.user_id &&
            quedada.status != 3 && (
              <TouchableOpacity
                style={styles.asistenciaStatus}
                onPress={handleAsistirPress}
              >
                <View style={styles.circle}>
                  <Ionicons
                    name={asistir ? "flash-outline" : "flash-off-outline"}
                    size={24}
                    color="white"
                  />
                </View>
                <Text style={styles.statusText}>
                  {asistir ? "Asistes" : "No asistes"}
                </Text>
              </TouchableOpacity>
            )}

          {authUser &&
            quedada &&
            authUser._id === quedada.user_id &&
            quedada.status !== 3 && (
              <TouchableOpacity
                style={styles.asistenciaStatus}
                onPress={handleInviteMorePeople}
              >
                <View>
                  <Ionicons name="body-outline" size={24} color="white" />
                </View>
                <Text style={styles.statusText}>Agregar invitados</Text>
              </TouchableOpacity>
            )}

          {authUser &&
            quedada &&
            authUser._id === quedada.user_id &&
            quedada.status !== 3 && (
              <TouchableOpacity
                style={styles.asistenciaStatus}
                onPress={handleEditPress}
              >
                <View>
                  <Ionicons name="create-outline" size={24} color="white" />
                </View>
                <Text style={styles.statusText}>Editar</Text>
              </TouchableOpacity>
            )}

          {authUser &&
            quedada &&
            authUser._id === quedada.user_id &&
            quedada.status !== 3 &&
            quedada.solicitudesDeParticipacion.length > 0 && (
              <TouchableOpacity style={styles.asistenciaStatus} onPress={handleViewRequests}>
                <View>
                  <Ionicons name="eye-outline" size={24} color="white" />
                </View>
                <Text style={styles.statusText}>
                  Tienes {quedada.solicitudesDeParticipacion.length}
                  {quedada.solicitudesDeParticipacion.length === 1
                    ? "solicitud"
                    : "solicitudes"}
                </Text>
              </TouchableOpacity>
            )}

          {/* Finalizó lo quedada */}
          {quedada.status === 3 && (
            <Text style={styles.statusText}>Quedada finalizada</Text>
          )}
        </View>
      </View>
      <Image
        source={require("../../assets/Login/Ellipse 2.png")}
        resizeMode="contain"
        style={styles.eclipseRosa1}
      />
      <Image
        source={require("../../assets/Login/Ellipse 2.png")}
        resizeMode="contain"
        style={styles.eclipseRosa2}
      />
      <ParticipantsCarrucel quedada={quedada} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Denunciar quedada")}
        >
          <Text style={styles.buttonText}>Denunciar</Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar el modal cuando sea necesario */}
      <RequestListModal
        visible={modalVisible}
        requests={quedada.solicitudesDeParticipacion}
        onClose={() => setModalVisible(false)}
        quedada={quedada}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 20,
    justifyContent: "center",
    color: "gray",
  },
  name: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  titulo: {
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6,
    borderRadius: 5,
    marginHorizontal: "auto",
  },
  datos: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#AED0F6",
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  datosText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  eclipseRosa1: {
    position: "absolute",
    top: 360,
    left: -100,
    width: 200,
    height: 200,
    opacity: 0.5,
    zIndex: -1,
  },
  eclipseRosa2: {
    position: "absolute",
    bottom: 230,
    width: 200,
    height: 200,
    right: -50,
    opacity: 0.5,
    zIndex: -1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 14,
    marginBottom: 19,
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    width: "46%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  verMas: {
    color: "gray",
    marginTop: 10,
  },
  asistenciaStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 13,
    paddingHorizontal: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    color: "white",
  },
});

export default QuedadaDetail;

