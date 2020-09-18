import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

const PlayGame = (props: {selectedNumber: number, onRestartGame: () => void, onGameOver: (chances: number) => void}) => {

  const guessNumberBetween = (min:number, max:number, exclude: number): number => {
    const number = Math.floor(Math.random() * (max-min) + min);
    if(number === exclude) {
      return guessNumberBetween(min, max, exclude);
    }
    return number;
  }

  const guessLower = () => {
    if(guess === props.selectedNumber) {
      props.onGameOver(chances.current)
      return;
    }
    if(guess < props.selectedNumber) {
      Alert.alert(`Very Funny!`, 'I know you are trying to trick the AI...Ha ha ha', [{}]);
      return;
    }
    chances.current++;
    const number = guessNumberBetween(boundary.min, guess, -1000);
    setBoundary(boundary => {
      return {
        ...boundary,
        max: guess,
      }
    })
    setGuess(number);
  }

  const guessHigher = () => {
    if(guess === props.selectedNumber) {
      props.onGameOver(chances.current)
      return;
    }
    if(guess > props.selectedNumber) {
      Alert.alert(`Very Funny!`, 'I know you are trying to trick the AI...Ha ha ha', [{}]);
      return;
    }
    const number = guessNumberBetween(guess+1, boundary.max, -1000);
    chances.current++;
    setBoundary(boundary => {
      return {
        ...boundary,
        min: guess+1,
      }
    })
    setGuess(number);
  }

  useEffect(() => {
    if(guess === props.selectedNumber) {
      setTimeout(() => {
        props.onGameOver(chances.current);
      }, 100);
    }
  })

  const [boundary, setBoundary] = useState({min: 0, max: 100});
  const [guess, setGuess] = useState(guessNumberBetween(0, 100, props.selectedNumber));
  const chances = useRef(0);

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 20, fontSize: 20}}>Guessed Number by AI</Text>
      <Card style={{width: '100%'}}>
      <View style={styles.numberContainer}>
        <Text style={{color: '#f64848', fontSize: 20}}>{guess}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button
              style={styles.button}
              textStyle={styles.buttonText}
              title='LOWER'
              onPress={guessLower}
            />
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              title='HIGHER'
              onPress={guessHigher}
            />
      </View>
      </Card>
      <Button style={{...styles.button, flex: 0, paddingHorizontal: 30}} textStyle={styles.buttonText} title='Restart' onPress={props.onRestartGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f64848',
    elevation: 5,
    // marginBottom: 'auto',
    flex: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f64848',
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
  },
});

export default PlayGame;
