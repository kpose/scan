import React from 'react';
import {StatusBar, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

/* import screens */
import {Details, Scan} from '../screens';

const Stack = createStackNavigator();

function ScanStack() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Scan"
          component={Scan}
          //options={{gestureEnabled: false}}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default ScanStack;
