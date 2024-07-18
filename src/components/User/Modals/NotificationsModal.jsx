import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { getValueFromSecureStore } from "../../../helpers/ExpoSecureStore";
import {
  getNotificationsWebApi,
  updateAllNotificationsWebApiSeen,
} from "../../../api/Notifications.controller";
import env from "../../../../env.js";

const NotificationsModal = ({ visible, onClose }) => {
  const [authUser, setAuthUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getAuthUser = async () => {
      const response = await getValueFromSecureStore("user");
      setAuthUser(JSON.parse(response));
    };

    const getAllWebNotification = async () => {
      const response = await getNotificationsWebApi();
      setNotifications(response);
      console.log("Notificaciones " + JSON.stringify(response));
    };

    getAuthUser();
    getAllWebNotification();
  }, [flag]);

  const renderNotification = ({ item }) => {
    const imageUrl = item.perfil
      ? `${env.BACK_URL}/perfil_img/${item.perfil}`
      : `${env.BACK_URL}/quedada_img/${item.quedada}`;

    return (
      <View
        style={[
          styles.notification,
          { backgroundColor: item.visto ? "white" : "#E0F0FF" },
        ]}
      >
        <View style={styles.textContainer}>
          <Image style={styles.icon} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={async () => {
              await updateAllNotificationsWebApiSeen();
              setFlag(!flag);
              onClose();
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIconContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '98%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  notification: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    marginLeft: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
});

export default NotificationsModal;
