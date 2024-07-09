import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import env from '../../../../env';
function FilterCardQuedada({quedada}) {
  const navigation = useNavigation();
  const [confirmado, setConfirmado] = useState(false); // Estado local para confirmación

  const handlePress = () => {
    navigation.navigate('QuedadaDetail', {quedada});
  };

  const nombreEvento = quedada?.name;
  const descripcionEvento = quedada?.description;
  const fecha = quedada?.date; // Fecha harcodeada
  const asistentes = quedada.asistentes?.length;
  const maxParticipantes = quedada?.limit; // Máximo número de participantes harcodeado
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  // Función para truncar la descripción si supera los 100 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  // Determinar el color del icono basado en el color del texto de la descripción
  const iconColor = styles.description.color || '#666666'; // Color del texto de la descripción

  // Función para manejar la confirmación del usuario
  const handleConfirm = () => {
    setConfirmado(true);
   
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: urlImagePerfil }} 
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nombreEvento}</Text>
          <Text style={styles.description}>{truncateDescription(descripcionEvento, 100)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{fecha}</Text>
        <Text style={styles.infoText}>{`Asistentes: ${asistentes}`}</Text>
        <Text style={styles.infoText}>{`Max: ${maxParticipantes}`}</Text>
      </View>
      {/* Renderizado condicional del icono */}
      {confirmado ? (
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <Ionicons name="flash-outline" size={24} color="white" />
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.iconContainer, { backgroundColor: iconColor }]}
          onPress={handleConfirm}
        >
          <Ionicons name="flash-off-outline" size={24} color="white" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    marginVertical: 8,
    alignSelf: 'center',
    position: 'relative', // Para contener el icono con posición absoluta
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#999999',
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

export default FilterCardQuedada;


