import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MessageSignUpScreen from './src/screens/MessageSignUpScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import MessageConfirmPasswordScreen from './src/screens/MessageConfirmPasswordScreen/MessageConfirmPasswordScreen';
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
        options={Options['MessageSignUpScreen']} 
        name={StackName['MessageSignUpScreen']} 
        component={MessageSignUpScreen} 
      />

      <Stack.Screen 
        options={Options['ChangePasswordScreen']} 
        name={StackName['ChangePasswordScreen']} 
        component={ChangePasswordScreen} 
      />

      <Stack.Screen 
        options={Options['MessageConfirmPasswordScreen']} 
        name={StackName['MessageConfirmPasswordScreen']} 
        component={MessageConfirmPasswordScreen} 
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
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}