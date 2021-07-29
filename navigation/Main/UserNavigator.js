import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../../screens/MainScreen/UserScreen";
import { HeaderStyle } from "../../constants/Styles";
import { Button } from "react-native";
import LogOutButton from "../../components/LogOutButton";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth.actions";

const UserStack = createStackNavigator();

const UserNavigator = () => {
  const dispatch = useDispatch();
  const handlerLogOut = () => {
    dispatch(logout());
  };

  return (
    <UserStack.Navigator screenOptions={() => HeaderStyle}>
      <UserStack.Screen
        name="UserScreen"
        options={{
          title: "Usuario",
          headerRight: () => <LogOutButton onLogOut={handlerLogOut} />,
        }}
        component={UserScreen}
      />
    </UserStack.Navigator>
  );
};

export default UserNavigator;
