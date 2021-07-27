import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../../screens/MainScreen/UserScreen';
import { HeaderStyle } from '../../constants/Styles';

const UserStack = createStackNavigator()

const UserNavigator = () => {
    return (
        <UserStack.Navigator
        screenOptions={() => (HeaderStyle)}
      >
            <UserStack.Screen name="UserScreen" options={{ title: "Usuario" }} component={UserScreen} />
        </UserStack.Navigator>
    )
}

export default UserNavigator;