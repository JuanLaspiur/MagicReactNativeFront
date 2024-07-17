import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { getUserByIdSinData } from '../../../api/User.controller'; // Ajusta esta importación si es necesario
import env from '../../../../env';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener esta dependencia instalada

const RequestListModal = ({ visible, onClose, requests }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (visible) {
      const fetchUsers = async () => {
        let fetchedUsers = [];
        for (const id of requests) {
          try {
            const user = await getUserByIdSinData(id);
            fetchedUsers.push(user);
          } catch (error) {
            console.error('Error fetching user with ID', id, ':', error);
          }
        }
        setUsers(fetchedUsers); 
      };

      fetchUsers();
    }
  }, [visible, requests]);

  const handleAccept = (userId) => {
    Alert.alert(
      'Request Accepted',
      `User ID: ${userId}`,
      [{ text: 'OK' }]
    );
  };

  const handleReject = (userId) => {
    Alert.alert(
      'Request Rejected',
      `User ID: ${userId}`,
      [{ text: 'OK' }]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: `${env.BACK_URL}/perfil_img/${item._id}` }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name} {item.last_name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleAccept(item._id)} style={styles.actionButton}>
            <Ionicons name="checkmark-outline" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleReject(item._id)} style={styles.actionButton}>
            <Ionicons name="ban-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Lista de Solicitudes</Text>
          {users.length > 0 ? (
            <FlatList
              data={users}
              renderItem={renderItem}
              keyExtractor={item => item._id}
            />
          ) : (
            <Text style={styles.modalText}>No hay solicitudes.</Text>
          )}
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginHorizontal: 10,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RequestListModal;
