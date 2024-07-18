import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { getValueFromSecureStore } from '../../../helpers/ExpoSecureStore';
import { getNotificationsWebApi, updateAllNotificationsWebApiSeen } from "../../../api/Notifications.controller";

const NotificationsModal = ({ visible, onClose, soonReload }) => {
    const [authUser, setAuthUser] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [flag, setFlag] = useState(false)



    useEffect(() => {
        const getAuthUser = async () => {
            const response = await getValueFromSecureStore("user");
            setAuthUser(JSON.parse(response));
        };

        const getAllWebNotification = async () => {
            const response = await getNotificationsWebApi();
            setNotifications(response);
            console.log('Notificaciones '+JSON.stringify(response))
        };

        getAuthUser();
        getAllWebNotification();
    }, [flag, soonReload]);

    const renderNotification = ({ item }) => (
        <View style={[
            styles.notification,
            { backgroundColor: item.visto ? 'white' : '#E0F0FF' } // Color más claro similar a #AED0F6
        ]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );
    

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={async()=>{
                
                       await updateAllNotificationsWebApiSeen()
                       setFlag(!flag)   
                       onClose()
                        }} style={styles.closeButton}>
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "98%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    closeButton: {
        alignSelf: "flex-end",
        padding: 10,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#007BFF",
    },
    notification: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    message: {
        fontSize: 14,
        color: "#555",
    },
    date: {
        fontSize: 12,
        color: "#999",
    },
});

export default NotificationsModal;
