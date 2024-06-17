import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const QuedadaDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://d2il8hfach02z9.cloudfront.net/uploads/event_photo/photo/5291/Facebook-Event-La-Quedada.jpg?v=1558109781' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Asistir" onPress={() => alert('Asistir a la quedada')} />
        <Button title="Denunciar" onPress={() => alert('Denunciar quedada')} />
      </View>
      <View style={styles.card}>
        <Text style={styles.description}>
          Esta es una descripción extensa de la quedada. Aquí puedes poner todos los detalles necesarios para que los asistentes sepan qué esperar. Puedes incluir información sobre el lugar, la hora, las actividades planificadas, y cualquier otra cosa relevante. Esta descripción puede ser tan larga como sea necesario para cubrir toda la información importante.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: screenWidth,
    height: screenWidth * 0.6, // Ajusta la relación de aspecto de la imagen
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#AED0F6',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default QuedadaDetail;
