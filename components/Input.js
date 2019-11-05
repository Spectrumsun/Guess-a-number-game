import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

const Input = (props) => (
  <TextInput
    {...props}
    style={{
      ...styles.input,
      ...setRecoveryProps.style
    }}
  />
);

export default Input;
