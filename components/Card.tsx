import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props: {children: any; style: object}) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    marginVertical: 15,
  },
});

export default Card;
