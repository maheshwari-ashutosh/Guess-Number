import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';

const GameOver = (props: {chances: number, onGameRestart: () => void}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingVertical: 20}}>
      <Text style={{fontSize: 20, }}>Game Over!!!</Text>
      <Card style={{}}>
        <Text>
          It required {props.chances} chances for our AI to guess your secret
          number!!
        </Text>
        <Button style={{flex: 0, backgroundColor: '#f64848', borderRadius: 10, paddingHorizontal: 20}} textStyle={{color: '#fff'}} title='New Game' onPress={props.onGameRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameOver;
