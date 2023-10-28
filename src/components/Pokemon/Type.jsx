import React from 'react'
import { StyleSheet, View, Text  } from 'react-native'
import { map } from 'lodash'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type(props) {
  const { types } = props

  return (
    <View style={styles.content}>
      {map(types, (item, i) => (
        <View
          key={i}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name)
          }}
        >
          <Text style={{ textTransform: "capitalize" }}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
})
