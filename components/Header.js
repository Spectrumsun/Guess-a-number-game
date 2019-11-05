import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../constants/color";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 18
  }
});

export default Header = props => {
  return (
    <View style={styles.header}>
      <Text> {props.title} </Text>
    </View>
  );
};
