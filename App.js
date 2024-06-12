import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterCuatro from './src/screens/Auth/RegisterSteps/RegisterCuatro';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterCuatro/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
