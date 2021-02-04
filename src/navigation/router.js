import React from 'react';
import {StatusBar, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/* import screens */
import {Signup, Signin, Welcome, Home, FirstTimeSetup} from '../screens';
import HomeBottomTab from './HomeBottomTab';

const Stack = createStackNavigator();

function Router() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          //options={{gestureEnabled: false}}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeBottomTab}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="FirstTimeSetup"
          component={FirstTimeSetup}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default Router;
