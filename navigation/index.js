import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigator from './Auth/AuthNavigator'
import MainNavigator from './Main/MainNavigator'

const AppNavigator = () => {
  const loggedIn = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      {loggedIn
        ? <MainNavigator /> 
        : <AuthNavigator />
      }
    </NavigationContainer>
  )
}

export default AppNavigator;