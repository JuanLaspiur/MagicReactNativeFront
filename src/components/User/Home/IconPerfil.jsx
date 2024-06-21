import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FollowersBox from '../Profile/FollowersBox';
import { getValueFromSecureStore } from '../../../helpers/ExpoSecureStore';
import env from '../../../../env';

const IconPerfil = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getValueFromSecureStore('user');
        const userDataJSON = JSON.parse(userData);
        setUser(userDataJSON);
        // Aquí estableces correctamente la imagen después de setUser
        setImageUri(env.BACK_URL + '/perfil_img/' + userDataJSON._id);
      } catch (error) {
        console.error('Error al obtener el usuario desde SecureStore:', error);
      }
    };
    fetchUser(); // Llamar a la función de obtención al cargar el componente
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Perfil')}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      {/* Aquí necesitas verificar que user esté definido antes de acceder a sus propiedades */}
      <Text style={styles.text}>{user ? `${user.name} ${user.last_name}` : 'Cargando...'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image round
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: 'gray',
  },
});

export default IconPerfil;
