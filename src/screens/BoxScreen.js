import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.container1}>
        <Text style={styles.textStyle}>App</Text>
      </View>
      <View style={styles.viewStyle}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container1: {
    height: 75,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    top: 20
  },
  viewStyle: {
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box1: {
    height: 75,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'magenta',
    flexBasis: '25%',
    bottom: -90
  },
  box2: {
    height: 75,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightgreen',
    flexBasis: '25%',
    bottom: '-50%'
  },
  box3: {
    height: 75,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightblue',
    flexBasis: '25%',
    bottom: -90
  }

})

export default BoxScreen;