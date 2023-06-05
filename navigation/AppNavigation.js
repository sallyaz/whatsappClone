import {StyleSheet} from 'react-native';
import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';

const AppNavigation = () => {
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
