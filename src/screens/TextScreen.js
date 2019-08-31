import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(thisText) => setPassword(thisText)}
      />
      {password.length < 4 ? <Text>Password must be longer than 4 characters</Text> : null}
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