import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hi there!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
      >
        <Text style={styles.buttonText}>
          Go To Components Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Go To List Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Image')}
      >
        <Text style={styles.buttonText}>
          Go To Image Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>
          Go To Counter Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={styles.buttonText}>
          Go To Color Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Square')}
      >
        <Text style={styles.buttonText}>
          Go To Square Demo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Text')}
      >
        <Text style={styles.buttonText}>
          Go To Text Demo
        </Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  button: {
    height: 50,
    margin: 10,
    backgroundColor: '#2A75FB',
    borderRadius: 3,
    paddingTop: 14
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});

export default HomeScreen;