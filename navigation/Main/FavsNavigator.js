import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import FavoriteScreen from "../../screens/MainScreen/FavoriteScreen"
import { HeaderStyle } from '../../constants/Styles';

const FavsStack = createStackNavigator()

const FavsNavigator = () => {
    return (
        <FavsStack.Navigator
        screenOptions={() => (HeaderStyle)}
      >
            <FavsStack.Screen name="FavScreen" options={{title: "Favoritos"}} component={FavoriteScreen} />
        </FavsStack.Navigator>
    )
}

export default FavsNavigator;