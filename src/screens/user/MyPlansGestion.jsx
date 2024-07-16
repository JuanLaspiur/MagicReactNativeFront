import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import ConfirmQuedadaCard from '../../components/User/MyPlansGestion/ConfirmQuedadaCard';
import ConfirmOKQuedadaCard from '../../components/User/MyPlansGestion/ConfirmOKQuedadaCard';
import { quedadasPorConfirmarAsistencia, quedadasAsistenciaAsistenciaConfirmada } from '../../api/Quedada.controller.js';
import { getValueFromSecureStore } from '../../helpers/ExpoSecureStore.js';
const MyPlansGestion = () => {
  const [confirmedQuedadas, setConfirmedQuedadas] = useState([]);
  const [quedadasToConfirm, setQuedadasToConfirm] = useState([]);
  const [authUser, setAuthUser] = useState([])
  const [reloadComponent, setReloadComponent] = useState(false);

  const reload = () => {
    setReloadComponent(!reloadComponent);
  };

  useEffect(() => {
    const getAuthUser = async()=> {
    const user = await getValueFromSecureStore('user')
    setAuthUser(JSON.parse(user))    
    }
    const fetchGetQuedadasSinConfirmar = async () => {
      try {
        const response = await quedadasPorConfirmarAsistencia();
         setQuedadasToConfirm(response);
      } catch (error) {
        console.error("Error fetching quedadas por confirmar:", error);
      }
    };

    const fetchGetQuedadasConfirmadas = async () => {
      try {
        const response = await quedadasAsistenciaAsistenciaConfirmada();
        setConfirmedQuedadas(response);
      } catch (error) {
        console.error("Error fetching quedadas confirmadas:", error);
      }
    };
    getAuthUser();
    fetchGetQuedadasSinConfirmar();
    fetchGetQuedadasConfirmadas();
  }, [reloadComponent]);

  return (
    <>
      <AppHeader title="My Plans Gestion" />
      
      {/* Primera sección: Asistencia por confirmar */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="flash-outline" size={45} color="#B76193" />
          <Text style={styles.sectionTitle}>Asistencia por confirmar:</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {quedadasToConfirm.length > 0 ? (
            quedadasToConfirm.map((quedada, index) => (
              <ConfirmQuedadaCard key={index} quedada={quedada} reload={reload} authUser={authUser} />
            ))
          ) : (
            <Text style={styles.placeholderText}>No hay quedadas por confirmar</Text>
          )}
        </ScrollView>
      </View>
      
      {/* Segunda sección: Asistencias confirmadas */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="dice-outline" size={45} color="#AED0F6" />
          <Text style={styles.sectionTitle}>Asistencias confirmadas:</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {confirmedQuedadas.length > 0 ? (
            confirmedQuedadas.map((quedada, index) => (
              <ConfirmOKQuedadaCard key={index} quedada={quedada} reload={reload} authUser={authUser} />
            ))
          ) : (
            <Text style={styles.placeholderText}>No hay asistencias confirmadas</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'gray',
    marginLeft: 10,
  },
  scrollContainer: {
    maxHeight: 200, // Establece una altura máxima para el ScrollView
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Borde de ejemplo
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});

export default MyPlansGestion;
