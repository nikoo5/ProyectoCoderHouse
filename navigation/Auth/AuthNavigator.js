import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../../screens/AuthScreens/RegisterScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginUser"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="LoginUser" component={LoginScreen} />
      <AuthStack.Screen name="RegisterUser" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;