import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { StyleSheet } from 'react-native';

export default function PokedexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
