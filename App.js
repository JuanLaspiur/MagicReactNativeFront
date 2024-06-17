import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Components
import Login from './src/screens/Auth/Login.jsx';
// ..... register
import Register from './src/screens/Auth/RegisterSteps/Register.jsx';
import RegisterDos from './src/screens/Auth/RegisterSteps/RegisterDos.jsx';
import RegisterTres from './src/screens/Auth/RegisterSteps/RegisterTres.jsx';
import RegisterCuatro from './src/screens/Auth/RegisterSteps/RegisterCuatro.jsx';
// ..... user 
import Index from './src/screens/user/Index.jsx';
import Home from './src/screens/user/Home.jsx';
import QuedadaDetail from './src/screens/user/QuedadaDetail.jsx';
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          {/* User Register */}
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterDos" component={RegisterDos} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterTres" component={RegisterTres} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterCuatro" component={RegisterCuatro} options={{ headerShown: false }} />
          {/* User Home */}
          <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="QuedadaDetail" component={QuedadaDetail} options={{ headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    // Puedes ajustar el color de fondo según tus preferencias
  },
});
