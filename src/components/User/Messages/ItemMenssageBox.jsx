import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { useNavigation } from '@react-navigation/native';

const ItemMessageBox = ({ profileImage = require('../../../assets/Animals/ICONOS A COLOR-21.png'), name = 'John', lastName = 'Doe', lastMessage = 'Hey, how are you?', timestamp = 1660424800000 }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('ChatRoom')
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.messageContainer}>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
      <View style={styles.messageDetails}>
        <Text style={styles.nameText}>{name} {lastName}</Text>
        <Text style={styles.lastMessageText}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageDetails: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessageText: {
    fontSize: 14,
    color: '#666',
  },
  timestampText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default ItemMessageBox
