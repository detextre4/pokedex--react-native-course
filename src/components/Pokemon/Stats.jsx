import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {map} from 'lodash';

export default function Stats(props) {
  const { stats } = props

  const barStyles = (num) => {
    return {
      backgroundColor: num < 49 ? "#ff3e3e" : "#00ac17",
      width: `${num}%`,
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats Base</Text>
      {map(stats, (item, i) => (
        <View key={i} style={styles.block}>
          <Text style={styles.blockTitle}>{item.stat.name}</Text>
          
          <View style={styles.blockInfo}>
            <Text style={{ width: "12%" }}>{item.base_stat}</Text>
            
            <View style={styles.bgBar}>
              <View style={[ styles.bar, barStyles(item.base_stat) ]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
    marginHorizontal: "auto",
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
    fontSize: 13,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "68%",
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
})
