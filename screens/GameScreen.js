

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Color from '../constants/color';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max -min)) * min;
  if(randNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  }else {
    return randNum;
  }


}

export default GameScreen = props => {

  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}}/>
        <Button title="GREATER" nPress={() => {}}/>
      </Card>
    </View>
  );
};