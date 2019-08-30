import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  age = () => {
    return Math.floor(Math.random() * 50);
  }

  const friends = [
    { name: 'Freind #1', age: age() },
    { name: 'Freind #2', age: age() },
    { name: 'Freind #3', age: age() },
    { name: 'Freind #4', age: age() },
    { name: 'Freind #5', age: age() },
    { name: 'Freind #6', age: age() },
    { name: 'Freind #7', age: age() },
    { name: 'Freind #8', age: age() },
    { name: 'Freind #9', age: age() }
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age:{item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen;