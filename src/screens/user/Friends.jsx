import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/User/AppHeader';

function Friends() {
  return (
    <View style={styles.container}>
            <AppHeader title="Amigos" />
      <Text style={styles.title}>Friends</Text>
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
export default Friends