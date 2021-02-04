import React from 'react';
import {StatusBar, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/* import screens */
import {Signup, Signin, Welcome, Home, FirstTimeSetup} from '../screens';

const Stack = createStackNavigator();

function Router() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{gestureEnabled: false}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{gestureEnabled: false}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{gestureEnabled: false}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirstTimeSetup"
          component={FirstTimeSetup}
          options={{gestureEnabled: false}}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default Router;
