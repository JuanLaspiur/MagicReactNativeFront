import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../components/User/AppHeader';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tu configuración
import ConfirmQuedadaCard from '../../components/User/MyPlansGestion/ConfirmQuedadaCard';
import ConfirmOKQuedadaCard from '../../components/User/MyPlansGestion/ConfirmOKQuedadaCard';
const MyPlansGestion = () => {
  return (
    <>
      <AppHeader title="MyPlansGestion" />
      
      {/* Primera sección: Asistencia por confirmar */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="flash-outline" size={45} color="#B76193" />
          <Text style={styles.sectionTitle}>Asistencia por confirmar:</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {/* Contenido scrollable */}
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
          <ConfirmQuedadaCard/>
        </ScrollView>
      </View>
      
      {/* Segunda sección: Asistencias confirmadas */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="dice-outline" size={45} color="#AED0F6" />
          <Text style={styles.sectionTitle}>Asistencias confirmadas:</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
          <ConfirmOKQuedadaCard/>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop:10,
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
