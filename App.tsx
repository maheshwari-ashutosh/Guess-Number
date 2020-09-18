import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import PlayGame from './screens/PlayGame';
import StartGame from './screens/StartGame';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [chances, setChances] = useState(-1);

  const startGameHandler = (number: number) => {
    setSelectedNumber(number);
  }

  const restartGameHandler = () => {
    setSelectedNumber(-1);
    setChances(-1);
  }

  const gameOverHandler = (chances:number):void => {
    setChances(chances);
  }

  let screen = <StartGame onGameStart={startGameHandler} />;

  if(selectedNumber !== -1) {
    console.log(selectedNumber);
    screen = <PlayGame selectedNumber={selectedNumber} onGameOver={gameOverHandler} onRestartGame={restartGameHandler}/>
  }

  if(chances !== -1) {
    screen = <GameOver chances={chances} onGameRestart={restartGameHandler} />
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header title="Guess a Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
});
