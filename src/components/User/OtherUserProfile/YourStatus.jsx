import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function YourStatus() {
  const initialStatus = '¡Hola! Magic Day';
  const [status, setStatus] = useState(initialStatus); // Estado inicial para el texto del estado

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Estado: <Text style={styles.myStatusText}>{status}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 10,
  },
  statusText: {
    paddingLeft: 25,
    fontSize: 15,
    color: 'gray',
  },
  myStatusText: {
    fontStyle: 'italic',
    color: '#AED0F6',
  },
});

export default YourStatus;
