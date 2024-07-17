import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import ModalSendSurvey from './ModalSendSurvey';
import { useNavigation } from '@react-navigation/native'; 
import env from '../../../../env';

function MessageQuedadaHeader({quedada, setterSurveyIDAndAsk}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleSurvey, setModalVisibleSurvey] = useState(false);
    const navigation = useNavigation(); 
    const avatarUrl = env.BACK_URL+'/quedada_img/'+quedada._id

  return (
    <View style={styles.header}>
    <TouchableOpacity >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>
    </TouchableOpacity>
    <View style={styles.userInfo}>
      <Text style={styles.name}>{quedada?.name}</Text>

    </View>
    <View style={styles.menuContainer}>
         <TouchableOpacity>
        <Text style={styles.menuText}>...</Text>
      </TouchableOpacity>
    </View>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Enviar Encuesta')}>
              <Text style={styles.optionText}>Enviar Encuesta</Text>
            </TouchableOpacity>
            {/* Agrega más opciones aquí según sea necesario */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>

    <ModalSendSurvey visible={modalVisibleSurvey} setModalVisibleSurvey={setModalVisibleSurvey} setterSurveyIDAndAsk={setterSurveyIDAndAsk} />
  </View>
  )
}

export default MessageQuedadaHeader;


const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
      backgroundColor: '#F7F7F7',
    },
    avatarContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      overflow: 'hidden',
      marginRight: 10,
    },
    avatarAnimal: {
      width: 35,
      height: 35,
      borderRadius: 25,
      overflow: 'hidden',
      marginRight: 40,
    },
    avatar: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    userInfo: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    lastname: {
      fontSize: 16,
      color: '#666666',
    },
    menuContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuText: {
      fontSize: 24,
      color: '#333333',
      marginRight: 10,
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    option: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    optionText: {
      fontSize: 18,
      color: '#333333',
    },
  });