import React from 'react';
import {StatusBar, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/* import screens */
import {Settings, UserProfile} from '../screens';

const Stack = createStackNavigator();

function ScanStack() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={Settings}
          //options={{gestureEnabled: false}}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default ScanStack;
