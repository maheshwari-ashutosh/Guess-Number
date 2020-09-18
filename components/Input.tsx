import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

const Input = (props: any) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 10,
    paddingTop: 10,
  },
});

export default Input;
