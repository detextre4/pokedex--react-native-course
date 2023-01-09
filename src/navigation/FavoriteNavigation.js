import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/FavoriteScreen'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator initialRouteName='Favoritos'>
      <Stack.Screen name='Favoritos' component={FavoriteScreen} options={
        { headerTitleAlign: "center" }
      }></Stack.Screen>
    </Stack.Navigator>
  )
}
