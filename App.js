import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

const hidden = {
  headerShown: false
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={hidden} name="SignInScreen" component={SignInScreen} />
      <Stack.Screen options={hidden} name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen options={hidden} name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen options={hidden} name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}