import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import PokemonCard from './PokemonCard'

export default function pokemonList(props) {
  const { pokemons } = props
  // console.log(pokemons)

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item}></PokemonCard>}
      contentContainerStyle={styles.flatListContentContainer}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
})
