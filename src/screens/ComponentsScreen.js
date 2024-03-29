import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const yourname = 'Mike';

  return (
    <View>
      <Text style={styles.greeting}>
        Getting started with React Native!
      </Text>

      <Text style={styles.name}>
        My name is {yourname}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
})

export default ComponentsScreen;
