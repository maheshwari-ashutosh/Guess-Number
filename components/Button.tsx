import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableNativeFeedback, TouchableHighlight, TouchableOpacity
} from 'react-native';

const button = (props: {
  style: object;
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  textStyle: object;
}) => {
  return (
      <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onPress}>
        <Text style={{...props.textStyle}}>{props.title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    color: 'red',
    backgroundColor: 'yellow'
  },
});

export default button;
