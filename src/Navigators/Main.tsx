import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef } from './utils'

import { HomeScreen } from '../Screens'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={() => ({
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFFFFF'
        }
      })}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator