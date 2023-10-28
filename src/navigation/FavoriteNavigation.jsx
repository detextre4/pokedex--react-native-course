import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/FavoriteScreen'
import PokemonScreen from '../screens/PokemonScreen'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} options={
        { title: "Favoritos", headerTitleAlign: "center" }
      }></Stack.Screen>
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} options={
        { title: "", headerTransparent: true }
      }></Stack.Screen>
    </Stack.Navigator>
  )
}
