import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const StartGame = (props: {onGameStart: (number: number) => void}) => {
  const [number, setNumber] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberChangeHandler = (
    number: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    console.log(number);
    const text = number.nativeEvent.text.replace(/[^0-9]/g, '');
    setNumber(text);
  };

  const onResetHandler = () => {
    Keyboard.dismiss();
    setNumber('');
    setSelectedNumber('');
  };

  const onSubmitHandler = () => {
    Keyboard.dismiss();
    if (number === '' || +number <= 0 || +number > 99) {
      Alert.alert('Invalid Input', 'Number should be between 0 and 99', [
        {text: 'Okay', style: 'destructive', onPress: onResetHandler},
      ]);
    }
    setSelectedNumber(number);
    setNumber('');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={{width: '100%'}}>
          <Text style={{fontSize: 20, color: '#555'}}>Enter a Number</Text>
          <Input
            style={styles.input}
            placeholder='21'
            value={number}
            onChange={numberChangeHandler}
            keyboardType='decimal-pad'
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              title='Reset'
              onPress={onResetHandler}
            />
            <Button
              style={styles.button}
              textStyle={styles.buttonText}
              title='Confirm'
              onPress={onSubmitHandler}
            />
          </View>
        </Card>
        {selectedNumber !== '' && (
          <Card style={{height: 250, width: 250, justifyContent: 'center'}}>
            <Text style={{marginVertical: 10, fontSize: 20, color: '#555'}}>
              You selected
            </Text>
            <View style={styles.numberContainer}>
              <Text style={{color: '#f64848', fontSize: 20}}>
                {selectedNumber}
              </Text>
            </View>
            <Button
              style={{
                ...styles.button,
                paddingHorizontal: 20,
                marginVertical: 20,
                flex: 0,
              }}
              textStyle={styles.buttonText}
              title='START GAME'
              onPress={() => props.onGameStart(+selectedNumber)}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 10,
  },
  title: {
    fontSize: 26,
    color: '#555',
  },
  button: {
    backgroundColor: '#f64848',
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
  },
  input: {
    width: 40,
    textAlign: 'center',
  },
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
    marginBottom: 'auto',
  },
});

export default StartGame;
