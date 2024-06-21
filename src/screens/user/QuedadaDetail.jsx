import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import ParticipantsCarrucel from '../../components/User/Home/ParticipantsCarrucel';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import env from '../../../env';
const { width: screenWidth } = Dimensions.get('window');
import { formatDate } from '../../helpers/UpdateQuedadaDay'

const QuedadaDetail = ({ route }) => {
  const { quedada } = route.params;
  const [asistir, setAsistir] = useState(false); // Estado inicial: no asistiendo
  const [expanded, setExpanded] = useState(false); // Estado para expandir la descripción
  const urlImagenQuedada = env.BACK_URL+'/quedada_img/'+quedada._id;
  const urlImagePerfil = `${env.BACK_URL}/perfil_img/${quedada.user_id}`;
  const nombreYApellido = quedada.userInfo.name+' '+quedada.userInfo.last_name;
  const handleAsistirPress = () => {
    if (asistir) {
      alert('Cancelar asistencia');
    } else {
      alert('Asistir a la quedada');
    }
    // Cambiar el estado opuesto
    setAsistir(!asistir);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  alert(JSON.stringify(quedada))
  // Función para truncar la descripción si es más larga de 300 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppHeader title="QuedadaDetail" />
      <Image
        source={{ uri: urlImagenQuedada }}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.titulo}>{quedada.name}</Text>
        <Text style={styles.description}>
          {expanded ? quedada.description : truncateDescription(quedada.description, 300)}
        </Text>
        {quedada.description.length > 300 && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.verMas}>{expanded ? 'Ver menos' : 'Ver más'}</Text>
          </TouchableOpacity>
        )}
  
        <View style={styles.datos}>
          <View style={styles.avatarContainer}>
        <Image
          source={{ uri: urlImagePerfil }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{nombreYApellido}</Text>
      </View>
          <Text style={styles.datosText}><Ionicons name="person-remove-outline" size={14} color="white " /> Max: {quedada.limit}</Text>
          <Text style={styles.datosText}><Ionicons name="map-outline" size={14} color="white" /> Zona: {quedada.zone}</Text>
          <Text style={styles.datosText}><Ionicons name="calendar-outline" size={14} color="white" /> Fecha: {quedada.dateTime && formatDate(quedada.dateTime)}</Text>
          <Text style={styles.datosText}><Ionicons name="flash-outline" size={14} color="white" /> Asistentes: {( quedada.asistentes ? quedada.asistentes.length : 0 )+ ( quedada.solicitudesDeParticipacion ?  quedada.solicitudesDeParticipacion.length : 0)} </Text>
          <Text style={styles.datosText}><Ionicons name="dice-outline" size={14} color="white" /> Confirmados: {quedada.asistentes.length} </Text>
          <TouchableOpacity style={styles.asistenciaStatus} onPress={handleAsistirPress}>
            <View style={styles.circle}>
              <Ionicons name={asistir ? 'flash-outline' : 'flash-off-outline'} size={24} color="white" />
            </View>
            <Text style={styles.statusText}>
              {asistir ? 'Asistes' : 'No asistes'}
            </Text>
          </TouchableOpacity>
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
      <ParticipantsCarrucel/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Denunciar quedada')}>
          <Text style={styles.buttonText}>Denunciar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  }, 
   avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom:20,
    justifyContent:'center',
    color:'gray'
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
    fontWeight:'700'
  },
  image: {
    width: '100%',
    height: screenWidth * 0.6,
    borderRadius: 5,
    marginHorizontal: 'auto',
  },
  datos: {
    paddingHorizontal: 20,
    paddingTop:30,
    backgroundColor: '#AED0F6',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  datosText: {
    color: '#fff',
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
    zIndex: -1
  },
  eclipseRosa2: {
    position: "absolute",
    bottom: 230,
    width: 200,
    height: 200,
    right: -50,
    opacity: 0.5,
    zIndex: -1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 14,
    marginBottom: 19
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    width: "46%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  card: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  verMas: {
    color: 'gray',
    marginTop: 10,
  },
  asistenciaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    color: 'white',
  },
});

export default QuedadaDetail;
