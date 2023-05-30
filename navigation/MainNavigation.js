import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

// Navigatipon
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Components
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from '../screens/ChatScreen';
import colors from '../constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerTitle: ''}}>
      <Tab.Screen
        name="Chats"
        component={ChatListScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="message-circle" size={30} color={colors.blue} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ChatSettingsScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="settings" size={30} color={colors.blue} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
const MainNavigation = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={ChatSettingsScreen}
        options={{headerTitle: 'Settings', headerBackTitle: 'Back'}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerTitle: '', headerBackTitle: 'Back'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
