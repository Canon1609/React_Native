import * as React from 'react';
import Screen01 from './src/pages/Screen01';
import Screen02 from './src/pages/Screen02';
import Admin from './src/pages/Admin';
import AddBike from './src/pages/AddBike';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
          <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
          <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
          <Stack.Screen name="AddBike" component={AddBike} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> 
  );
}

