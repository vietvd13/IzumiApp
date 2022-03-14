import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Dashboard from './src/screens/Dashboard';

import {
  StackName,
  Options,
} from './src/const/Stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={Options['SignInScreen']} 
        name={StackName['SignInScreen']} 
        component={SignInScreen} 
      />

      <Stack.Screen 
        options={Options['SignUpScreen']} 
        name={StackName['SignUpScreen']} 
        component={SignUpScreen} 
      />

      <Stack.Screen 
        options={Options['ForgotPasswordScreen']} 
        name={StackName['ForgotPasswordScreen']} 
        component={ForgotPasswordScreen} 
      />

      <Stack.Screen 
        options={Options['Dashboard']} 
        name={StackName['Dashboard']} 
        component={Dashboard} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyStack />
    </NavigationContainer>
  );
}