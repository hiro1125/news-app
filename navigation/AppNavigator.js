import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ニュース"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="詳細画面" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
