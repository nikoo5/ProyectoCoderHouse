import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../../screens/AuthScreens/RegisterScreen";
import { HeaderStyle } from "../../constants/Styles";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginUser"
      screenOptions={() => HeaderStyle}
    >
      <AuthStack.Screen
        name="LoginUser"
        options={{ headerShown: false, title: "Login" }}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name="RegisterUser"
        options={{ headerShown: true, title: "Registro" }}
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
