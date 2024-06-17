import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

function ChatRoom() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Room</Text>
    </View>
  );
}

export default ChatRoom;

const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
      borderColor:'gray',
      margin:'auto',
      opacity:0.5,
      paddingLeft:5
    },
    text: {
        marginLeft: 10,
        color: "gray",
        fontSize: 18,
    
      },
    });