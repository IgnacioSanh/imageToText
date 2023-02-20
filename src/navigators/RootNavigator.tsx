import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenNames, RootNavigatorParamList } from '~types';
import { HomeScreen, DetailScreen } from '@screens';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={ScreenNames.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
