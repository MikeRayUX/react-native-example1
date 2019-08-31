import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <Text> Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 3,
    height: 45,
    paddingLeft: 15,
  }
})

export default TextScreen;