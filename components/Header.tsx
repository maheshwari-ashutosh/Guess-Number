import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
 
const Header = (props: {title: string}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 36,
    width: '100%',
    height: 90,
    backgroundColor: '#f64848',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  }
})

export default Header;