import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/image_screen/ImageDetail'
import Forest from '../../assets/images/forest.jpg'
import Beach from '../../assets/images/beach.jpg'
import Mountain from '../../assets/images/mountain.jpg'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail 
        title='Forest' 
        imageSource={Forest}
        score='6' 
      />
      <ImageDetail 
        title='Beach' 
        imageSource={Beach}
        score='9'
      />
      <ImageDetail 
        title='Mountain' 
        imageSource={Mountain}
        score='10' 
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default ImageScreen;