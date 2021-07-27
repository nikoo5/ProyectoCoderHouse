import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/MainScreen/HomeScreen';
import CommentScreen from '../../screens/MainScreen/CommentScreen';
import { HeaderStyle } from '../../constants/Styles';

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={() => (HeaderStyle)}
          >
            <HomeStack.Screen name="HomeScreen" options={{ title: "Inicio" }} component={HomeScreen} />
            <HomeStack.Screen name="CommentScreen" options={{ title: "Comentarios" }} component={CommentScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;