import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account</Text>
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
