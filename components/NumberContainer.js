import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from '../constants/color';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Color.accent,
    fontSize: 22
  }
});

export default NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children} </Text>
    </View>
  );
};




