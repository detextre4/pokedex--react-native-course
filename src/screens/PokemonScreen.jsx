import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import { getPokemonDetailsApi } from '../api/pokemonApi';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from "../hooks/useAuth";

export default function Pokemon(props) {
  const { navigation, route: { params } } = props;
  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => 
        <Icon
          name='arrow-left'
          color="#fff"
          size={20}
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        ></Icon>,
    })
  }, [navigation, params, pokemon])

  useEffect(() => {
    (async() => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch(err) {
        console.error(err)
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      ></Header>
      
      <Type types={pokemon.types}></Type>
      
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  )
}
