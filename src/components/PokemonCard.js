import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'

export default function pokemonCard(props) {
  const { pokemon } = props

  const goToPokemon = () => {
    console.log(`vamos al pokemon: ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={() => goToPokemon(pokemon)}>
      <View style={styles.card}>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image}></Image>
        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    height: 150,
    margin: 3,
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "solid",
  },
  image: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "bold"
  },
  number: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 4,
    color: "#fff",
    fontWeight: "bold"
  }
});
