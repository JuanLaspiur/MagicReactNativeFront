import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import env from '../../../../env.js';
import { formatDate } from '../../../helpers/UpdateQuedadaDay.js';
import { asistirAQuedada } from '../../../api/Quedada.controller.js';
import { getValueFromSecureStore } from '../../../helpers/ExpoSecureStore.js';

const QuedadaPremiumCard = ({ quedada }) => {
  const navigation = useNavigation();
  const [authUser, setAuthUser] = useState(null);
  const [asistir, setAsistir] = useState(false);

  const getAuthUser = async () => {
    const data = await getValueFromSecureStore('user');
    setAuthUser(JSON.parse(data));
  };

  const handleAsistirPress = async () => {
    try {
      await asistirAQuedada(quedada._id);
      setAsistir(!asistir);
      alert(asistir ? 'Has cancelado tu asistencia a la quedada' : 'Asistirás a la quedada');
    } catch (error) {
      console.error('Error al cambiar la asistencia:', error);
    }
  };

  useEffect(() => {
    const checkAsistencia = () => {
      if (!quedada || !quedada.asistentes || !authUser) return;
      const userIsAsistente = quedada.asistentes.some(asistente => asistente.user_id === authUser._id);
      setAsistir(userIsAsistente);
    };

    if (!authUser) {
      getAuthUser();
    } else {
      checkAsistencia();
    }

  }, [quedada, authUser]);

  const handlePress = () => {
    navigation.navigate('QuedadaDetail', { quedada });
  };

  const nombreQuedada = quedada.name;
  const nombreYApellido = `${quedada.userInfo.name} ${quedada.userInfo.last_name ?? ''}`;
  const descripcionQuedada = quedada.description;
  const fecha = quedada.dateTime ? quedada.dateTime : '';
  const confirmados = quedada.asistentes.length;
  const maxParticipantes = quedada.limit;
  const zona = `Zona ${quedada.zone}`;
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const urlImagenQuedada = `${env.BACK_URL}/quedada_img/${quedada._id}`;
  const iconColor = 'white';

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: urlImagePerfil }} style={styles.avatar} />
        <Text style={styles.name}>{nombreYApellido}</Text>
      </View>
      <Image source={{ uri: urlImagenQuedada }} style={styles.image} />
      <Text style={styles.nombreQuedada}>{nombreQuedada}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Confirmados: ${confirmados}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
        <Text style={styles.infoText}>{zona}</Text>
      </View>
      {authUser && quedada && (quedada.user_id !== authUser._id )&& (quedada.status != 3)&&(
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: iconColor }]}
          onPress={handleAsistirPress}
        >
          <Ionicons name={asistir ? "flash-outline" : "flash-off-outline"} size={24} color="black" />
        </TouchableOpacity>
      )}
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
    padding: 10,
    alignSelf: "center",
    position: 'relative', 
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
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombreQuedada: {
    fontSize: 14,
    color: "#E0E0E0",
    marginBottom: 10,
    fontWeight: "400"
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 11,
    color: "#fff",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuedadaPremiumCard;

