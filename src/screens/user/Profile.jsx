import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/User/AppHeader';

const Profile = () => {
  return (
    <View style={styles.container}>
            <AppHeader title="Perfil" />
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
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

export default Profile;
