import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavsNavigator from './FavsNavigator'
import HomeNavigator from './HomeNavigator'
import UserNavigator from "./UserNavigator";
import Icons from "react-native-vector-icons/Ionicons";
import { BootomBarStyle } from '../../constants/Styles';

const MainBottomTab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <MainBottomTab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions= {{
                ...BootomBarStyle
            }}
        >
            <MainBottomTab.Screen name="FavsStack" options={{ 
                title: "Favoritos",
                tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "heart" : "heart-outline"}
                size={size}
                color={color}
              />
            ) }} component={FavsNavigator} />
            <MainBottomTab.Screen name="HomeStack" options={{ 
                title: "Inicio",
                tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ) }} component={HomeNavigator} />
            <MainBottomTab.Screen name="UserStack" options={{ 
                title: "Usuario",
                tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ) }} component={UserNavigator} />
        </MainBottomTab.Navigator>
    )
}

export default MainNavigator