import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Import ScrollView
import AppHeader from '../../components/User/AppHeader';
import ItemMessage from '../../components/User/Messages/ItemMenssageBox'; // Assuming ItemMessage is in a separate file

const MessagesBox = () => {
  return (
    <ScrollView style={styles.container}>
      <AppHeader title="Mensajes" />
      <View style={styles.messageListContainer}>
      <ItemMessage/>
      <ItemMessage/>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
    },
    title: {
      fontSize: 24,
    },
  });
  

export default MessagesBox