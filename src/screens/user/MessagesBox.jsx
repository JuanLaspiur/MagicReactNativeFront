import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/User/AppHeader';

function MessagesBox() {
  return (
    <View style={styles.container}>
            <AppHeader title="Mensajes" />
    <Text style={styles.title}>Messages Box</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
  

export default MessagesBox