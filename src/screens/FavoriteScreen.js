import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'

export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorite</Text>
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
