import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { getUserById } from '../../../api/User.controller'; 
import env from '../../../../env'
const ItemParticipantsQuedadaDetail = ({ asistente }) => {
  const [usuario, setUsuario] = useState(null);
  const [asistenciaConfirmada, setAsistenciaConfirmada] = useState(asistente.asistencia);

  useEffect(() => {
    const fetchUserData = async () => {
      try {  
        const userData = await getUserById(asistente.user_id);
        setUsuario(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [asistente._id]);

 
  return (
    <TouchableOpacity style={styles.card} >
      <View style={styles.avatarContainer}>{usuario && usuario._id &&
        <Image
          source={{ uri: `${env.BACK_URL}/perfil_img/${usuario._id}` }}
          style={styles.avatar}
        />}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{usuario ? `${usuario.name} ${usuario.last_name}` : "Nombre del Participante"}</Text>
          <Text style={styles.description}>
            Edad: {usuario ? usuario.age : "44"}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={asistenciaConfirmada ? styles.statusConfirmed : styles.statusUnconfirmed}>
          {asistenciaConfirmada ? "Asistencia confirmada" : "Asistencia no confirmada"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#EAEAEA", 
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
    marginBottom: 10,
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#333", 
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#333", 
  },
  statusContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  statusConfirmed: {
    color: "#4FDE1C",
    fontSize: 14,
    fontWeight: "bold",
    opacity:0.9
  },
  statusUnconfirmed: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    opacity:0.4
  },
});

export default ItemParticipantsQuedadaDetail;
