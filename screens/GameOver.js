import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.configNewGameHandler} />
    </View>
  );
};
