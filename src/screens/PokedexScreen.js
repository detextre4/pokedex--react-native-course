import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemonApi'
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {
  const [ pokemons, setPokemons ] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next)
      
      const pokemonArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        })
      }

      setPokemons([...pokemons, ...pokemonArray])
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}></PokemonList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
