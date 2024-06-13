import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function Friends() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
export default Friends