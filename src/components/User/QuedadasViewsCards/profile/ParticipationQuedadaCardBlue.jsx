import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParticipationQuedadaCardBlue = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('QuedadaDetail');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Event Name</Text>
          <Text style={styles.description}>
            Event description. Join for more fun and exclusive activities!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: "#AED0F6", // Light blue background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10, // Reduced padding compared to the original
    marginVertical: 8, // Adjusted margin for spacing
    alignSelf: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16, // Adjusted font size for event name
    fontWeight: 'bold',
    color: '#fff', // Darker text color
    marginBottom: 5,
  },
  description: {
    fontSize: 14, // Adjusted font size for description
    color: '#fff', // Slightly darker text color
  },
});

export default ParticipationQuedadaCardBlue;
