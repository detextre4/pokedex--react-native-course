import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function pokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props

  const loadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item}></PokemonCard>}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#aeaeae"
          />
        )
      }
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
})
