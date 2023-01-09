import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexScreen from '../screens/PokedexScreen'

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator initialRouteName='Pokedex'>
      <Stack.Screen name='Pokedex' component={PokedexScreen} options={
        { headerTitleAlign: "center" }
      }></Stack.Screen>
    </Stack.Navigator>
  )
}
