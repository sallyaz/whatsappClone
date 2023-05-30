import {StyleSheet} from 'react-native';
import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import AuthScreen from '../screens/AuthScreen';

const AppNavigation = props => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? <MainNavigation /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
