import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import SignUpScreen from '../screens/SignUpScreen';
import GoogleScreen from '../screens/GoogleScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Google" component={GoogleScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
