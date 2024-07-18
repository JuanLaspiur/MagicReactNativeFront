import React, { useEffect, useState } from 'react';
import { Platform, Alert, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// Configuración de las notificaciones
const configureNotifications = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  };

  const registerForPushNotificationsAsync = async () => {
    // Configuración de canales de notificación (solo para Android)
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
        icon: "notification-icon.png",
      });
    }
  
    if (Device.isDevice) {
      try {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          throw new Error("Permission not granted to get push token for push notification!");
        }
  
        const projectId = "c5debf7a-6f8c-4451-8176-441a0074df30";
  
        const pushTokenString = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
        console.log("Expo push token:", pushTokenString);
        return pushTokenString;
      } catch (error) {
        alert(error)
        console.error("Error registering for push notifications:", error);
        return null;
      }
    } else {
      console.warn("Must use physical device for push notifications");
      return null;
    }
  };

 function ExpoPushToken() {
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(null);


    useEffect(() => {
        // Inicializar Firebase
       // initializeFirebase();
    
        // Configurar notificaciones
        configureNotifications();
    
        // Registro para notificaciones push
        registerForPushNotificationsAsync()
          .then((token) => setExpoPushToken(token ?? ""))
          .catch((error) => console.error("Error registering for push notifications:", error));
    
   
      }, []);
    
      // Actualizar el token de Expo cuando cambia
     // useEffect(() => {
     //   setterExpoPushToken(expoPushToken);
     // }, [expoPushToken]);
    

  return null; 
}
export default ExpoPushToken;