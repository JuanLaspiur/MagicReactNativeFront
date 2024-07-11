import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppHeader from "../../components/User/AppHeader";
import MessageHeader from "../../components/User/Messages/MessageHeader";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {
  sendMessageBychatID,
  sendImageMessage,
  getChatBychatID,
  getSurveyOptionsBySurveyID,
  sendMySurveyVote
} from "../../api/Chat.controller";
import { getValueFromSecureStore } from "../../helpers/ExpoSecureStore";
import env from "../../../env";
import ModalImageTouchable from "../../components/User/Messages/ModalImageTouchable";

const ChatRoom = ({ route }) => {
  const { user, chat, mensajes } = route.params;
  const [authUser, setAuthUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [flag, setFlag] = useState(false);
  const [surverID, setSurverID] = useState('');
  const [surverAsk, setSurverAsk] = useState('');
  const [surveyOptions, setSurveyOptions] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // encuesta
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Se necesita permiso para acceder a la galería de imágenes.");
      }
    })();

    const getAuthUser = async () => {
      const data = await getValueFromSecureStore("user");
      setAuthUser(JSON.parse(data));
    };
    getAuthUser();

    if (chat.message) {
      setMessages(chat.messages);
    } else {
      setMessages(chat.messages);
      faundMessagesByChatId(chat._id);
    }
  }, [flag, surverID]);

  useEffect(()=>{
    if(surverID.length > 0){
      sendSurveyMessage()
    }
  }, [surverID])

  const faundMessagesByChatId = async (id) => {
    try {
      const response = await getChatBychatID(id);
      setMessages(response.data.messages);
    } catch (err) {
      console.log("Error al obtener el chat", err);
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === "") return;
    const currentTime = getCurrentTime();
    const newMessage = {
      text: inputText,
      time: currentTime,
      isMine: true,
    };
    setMessages([...messages, newMessage]);

    const sendMessaje = {
      message: inputText,
      user_id: authUser._id,
      chat_id: chat._id,
    };

    try {
      await sendMessageBychatID(sendMessaje, chat._id);
    } catch (err) {
      console.log(err);
    }
    setInputText("");
  };

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const file = result.assets[0].uri;
      const base64Image = await imageToBase64(result.assets[0].uri);
      try {
         await sendImageMessage(chat._id, base64Image);
         setFlag(!flag);
      } catch (err) {
        console.error("Error al enviar la imagen:", err);
      }
    }
  };

  const imageToBase64 = async (imageUri) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return `data:image/jpeg;base64,${base64}`;
    } catch (error) {
      throw new Error("Error al convertir la imagen a base64");
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const setterSurveyIDAndAsk = (id, ask) => {
    setSurverID(id);
    setSurverAsk(ask);
  };

  const sendSurveyMessage = async () => {
    const options = await getSurveyOptionsBySurveyID(surverID);
    setSurveyOptions(options);
    setSurverID('');
  };

  const handleSendMySurveyVote = async (option) => {
    const response = await sendMySurveyVote(option._id, authUser._id);
  };

  const handleSeeImageDetail = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Chat" />
      <MessageHeader user={user} setterSurveyIDAndAsk={setterSurveyIDAndAsk} />
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages &&
          messages.length > 0 &&
          messages.map((message, index) =>
            !message.img ? (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  message.isMine || message.user_id === authUser._id
                    ? styles.myMessageContainer
                    : styles.otherMessageContainer,
                ]}
              >
                <View>
                  <Text style={styles.messageText(message.isMine)}>
                    {message.text}
                  </Text>
                </View>
                <View style={styles.messageInfo}>
                  <Text style={styles.messageOwner}>
                    {message.isMine || message.user_id === authUser._id
                      ? "Tú"
                      : `${message.full_name}`}
                  </Text>
                  <Text style={styles.messageTime}>{message.stamp}</Text>
                </View>
              </View>
            ) : (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  message.user_id === authUser._id
                    ? styles.myMessageContainer
                    : styles.otherMessageContainer,
                ]}
              >
                <TouchableOpacity onPress={() => handleSeeImageDetail(`${env.BACK_URL}/chat_img/${message.image}`)}>
                  <Image
                    source={{ uri: `${env.BACK_URL}/chat_img/${message.image}` }}
                    style={{ width: 180, height: 180 }}
                  />
                </TouchableOpacity>
              </View>
            )
          )}
        <ModalImageTouchable
          visible={modalVisible}
          uri={selectedImage}
          onClose={closeModal}
        />
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={handleImagePicker}
          style={styles.iconContainer}
        >
          <FontAwesome name="image" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <FontAwesome name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  messagesContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  messageBubble: {
    flexDirection: "column", // Cambiado a column para apilar los elementos
    maxWidth: "80%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  myMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#AED0F6",
  },
  otherMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#D3D3D3",
  },
  messageContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  messageInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 3,
    gap: 2,
  },
  messageOwner: {
    fontSize: 10,
    color: "gray",
  },
  messageText: (isMine) => ({
    fontSize: 16,
    color: isMine ? "#FFFFFF" : "#000000",
  }),
  messageTime: {
    fontSize: 10,
    color: "gray",
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#AED0F6",
  },
  iconContainer: {
    padding: 10,
  }
});
