import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../screens/Account'

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator initialRouteName='Mi Cuenta'>
      <Stack.Screen name='Mi Cuenta' component={Account} options={
        { headerTitleAlign: "center" }
      }></Stack.Screen>
    </Stack.Navigator>
  )
}
