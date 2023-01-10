import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from '../navigation/AccountNavigation'
import FavoriteNavigation from '../navigation/FavoriteNavigation'
import PokedexNavigation from '../navigation/PokedexNavigation'
// import PokedexScreen from '../screens/PokedexScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator initialRouteName='PokedexNavigation'>
      <Tab.Screen name='Favorite' component={FavoriteNavigation} options={
        {
          headerShown: false,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color, size}) => (
            <Icon name='heart' color={color} size={size}></Icon>
          )
        }
      }></Tab.Screen>
      
      <Tab.Screen name='PokedexNavigation' component={PokedexNavigation} options={
        {
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }
      }></Tab.Screen>
      
      <Tab.Screen name='Account' component={AccountNavigation} options={
        {
          headerShown: false,
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({color, size}) => (
            <Icon name='user' color={color} size={size}></Icon>
          )
        }
      }></Tab.Screen>
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    ></Image>
  )
}
