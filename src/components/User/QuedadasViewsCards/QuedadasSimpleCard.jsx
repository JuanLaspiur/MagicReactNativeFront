import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import env from '../../../../env.js';
import { formatDate } from '../../../helpers/UpdateQuedadaDay.js'

const QuedadasSimpleCard = ({ quedada }) => {
  // functions
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); 

  const handlePress = () => {
    navigation.navigate('QuedadaDetail', {quedada});
  };
  const handleConfirm = () => {
    setConfirmado(true); 
  };
// atributes
  const nombreQuedada = quedada.name.charAt(0).toUpperCase() + quedada.name.slice(1).toLowerCase();
  const asistentes = quedada.asistentes.length; 
  const zona = "Zona " + quedada.zone; 
  const maxParticipantes = quedada.limit;
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const iconColor = 'white'; 
  const fecha = quedada.dateTime ? formatDate(quedada.dateTime) : '';
  const nombrePersona = `${quedada.userInfo.name} ${quedada.userInfo.last_name ?? ''}`;

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.content}>
        <Image
          source={{ uri: urlImagePerfil }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nombreQuedada}</Text>
          {quedada.userInfo.birthdate !== null && (
            <Text style={styles.edadText}>{nombrePersona}</Text>
          )}
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${asistentes}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
      {/* Conditional rendering of the icon */}
      <TouchableOpacity
        style={[styles.iconContainer, { backgroundColor: iconColor }]}
        onPress={handleConfirm}
      >
        <Ionicons name={confirmado ? "flash-outline" : "flash-off-outline"} size={24} color="black" />
      </TouchableOpacity>
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
    position: 'relative', // To contain the icon with absolute position
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
    color: "#E0E0E0",
    marginBottom: 3,
  },
  edadText: {
    fontSize: 12,
    color: "#fff",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  infoText: {
    fontSize: 11,
    color: "#fff",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuedadasSimpleCard;
