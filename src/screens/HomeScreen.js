import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hi there!
      </Text>
      <Button 
        onPress={() => navigation.navigate('Components') }
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List') }
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Image Screen"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  button: {
    width: '100%',
    height: 100,
    backgroundColor: 'green',
    color: 'white'
  }
});

export default HomeScreen;