import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParticipationQuedadaCardBlue = () => {
  const navigation = useNavigation();
  const [quedada, setQuedada] = useState(null);

  useEffect(() => {
    const fetchQuedada = async () => {
      try {
        const response = await getQuedadaById('6670884ffe2bc567972f31de'); // Llamada a la API para obtener la quedada por ID
        setQuedada(response); // Actualiza el estado con los datos de la quedada obtenidos
      } catch (error) {
        console.error('Error al obtener la quedada:', error);
        // Manejo de errores aquí
      }
    };

    fetchQuedada();
  }, []); // Se ejecuta cada vez que quedadaId cambia

  const handlePress = () => {
    navigation.navigate('QuedadaDetail', {quedada});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Event Name</Text>
          <Text style={styles.description}>
            Event description. Join for more fun and exclusive activities!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: "#AED0F6", // Light blue background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10, // Reduced padding compared to the original
    marginVertical: 8, // Adjusted margin for spacing
    alignSelf: 'center',
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
    fontSize: 16, // Adjusted font size for event name
    fontWeight: 'bold',
    color: '#fff', // Darker text color
    marginBottom: 5,
  },
  description: {
    fontSize: 14, // Adjusted font size for description
    color: '#fff', // Slightly darker text color
  },
});

export default ParticipationQuedadaCardBlue;
