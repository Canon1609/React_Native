import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Sửa lại từ @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Sửa lại từ @react-navigation/native-stack
import HomeScreen from "./HomeScreen"; // Import màn hình HomeScreen
import Screen_1a from './Screen_1a'; // Import màn hình Screen_1a

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen_1a" component={Screen_1a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
