import React from 'react';

// Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_left', headerShown: false}}>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
