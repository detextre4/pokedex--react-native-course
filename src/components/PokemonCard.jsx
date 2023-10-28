import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import { useNavigation } from '@react-navigation/native'

export default function pokemonCard(props) {
  const { pokemon } = props
  const navigation = useNavigation()

  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgCardStyles = { backgroundColor: pokemonColor, ...styles.card }

  const goToPokemon = () => {
    navigation.navigate("PokemonScreen", { id: pokemon.id })
  }

  return (
    <TouchableWithoutFeedback onPress={() => goToPokemon(pokemon)}>
      <View style={bgCardStyles}>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image}></Image>
        <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
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
    borderRadius: 10,
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
    fontWeight: "bold",
    borderColor: "#000",
    borderWidth: 2,
  }
});
