import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Components
import Login from "./src/screens/Auth/Login.jsx";
// ..... register
import IndexRegister from "./src/screens/Auth/RegisterSteps/IndexRegister.jsx";
import RegisterDos from "./src/screens/Auth/RegisterSteps/RegisterDos.jsx";
import RegisterTres from "./src/screens/Auth/RegisterSteps/RegisterTres.jsx";
import RegisterCuatro from "./src/screens/Auth/RegisterSteps/RegisterCuatro.jsx";
// ..... home
import Index from "./src/screens/user/Index.jsx";
import Home from "./src/screens/user/Home.jsx";
import QuedadaDetail from "./src/screens/user/QuedadaDetail.jsx";
import CreateQuedada from "./src/screens/user/CreateQuedada.jsx";
import PremiumGatheringInvitations from "./src/screens/user/PremiumGatheringInvitations.jsx";
import EditQuedada from "./src/screens/user/EditQuedada.jsx";
import MyFriendsList from "./src/screens/user/MyFriendsList.jsx";
import FilterPlans from "./src/screens/user/FilterPlans.jsx";
// ..... home  ... filterplans
import StatusFilter from "./src/components/User/plansFilter/StatusFiler.jsx";
import ZoneFilter from "./src/components/User/plansFilter/ZoneFilter.jsx";
import MyFriendsFilter from "./src/components/User/plansFilter/MyFriendsFilter.jsx";
import TypeFilter from "./src/components/User/plansFilter/TypeFilter.jsx";
// .... messagges
import ChatRoom from "./src/screens/user/ChatRoom.jsx";
import ChatRoomQuedada from "./src/screens/user/ChatRoomQuedada.jsx";
// .... other person profile
import OtherUserProfile from "./src/screens/user/OtherUserProfile.jsx";
import YourFriends from "./src/components/User/OtherUserProfile/YourFriends.jsx";


import { saveToSecureStore } from "./src/helpers/ExpoSecureStore.js"; // Other user friends List
// ... INDEX
import env from "./env.js";
import { getUserById } from "./src/api/User.controller.js";
const Stack = createStackNavigator();
// env

export default function App() {

return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          {/* User Register */}
          <Stack.Screen
            name="IndexRegister"
            component={IndexRegister}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterDos"
            component={RegisterDos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterTres"
            component={RegisterTres}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterCuatro"
            component={RegisterCuatro}
            options={{ headerShown: false }}
          />
          {/* User Home */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QuedadaDetail"
            component={QuedadaDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateQuedada"
            component={CreateQuedada}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="PremiumGatheringInvitations"
          component={PremiumGatheringInvitations}
          options={{ headerShown: false }}
          />
           <Stack.Screen
            name="EditQuedada"
            component={EditQuedada}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyFriendsList"
            component={MyFriendsList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FilterPlans"
            component={FilterPlans}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StatusFilter"
            component={StatusFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ZoneFilter"
            component={ZoneFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyFriendsFilter"
            component={MyFriendsFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TypeFilter"
            component={TypeFilter}
            options={{ headerShown: false }}
          />

          {/* User Messagges  MyPlansGestion  */}
          <Stack.Screen
            name="ChatRoom"
            component={ChatRoom}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="ChatRoomQuedada"
            component={ChatRoomQuedada}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OtherUserProfile"
            component={OtherUserProfile}
            options={{ headerShown: false }}
          />
          {/* YourFriends */}
          <Stack.Screen
            name="YourFriends"
            component={YourFriends}
            options={{ headerShown: false }}
          />

          {/* INDEX  Index */}
          <Stack.Screen
            name="Index"
            component={Index}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
