import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header(props) {
  const { name, order, image, type } = props
  const color = getColorByPokemonType(type)
  const containerStyles = [{ backgroundColor: color, ...styles.containerBg }]

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.containerWrapper}>
        <View style={containerStyles} />
        <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
        <Image
          source={{ uri: image }}
          style={styles.images}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 20,
  },
  containerBg: {
    height: "100%",
    width: "100%",
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }]
  },
  containerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    paddingTop: 10,
    marginBottom: 10,
  },
  images: {
    width: 250,
    height: 250,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
    bottom: 15,
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
})
