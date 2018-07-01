import React from 'react';
import {
  WebView,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

const deviceSize = Dimensions.get('window');


const Blog = () => {
  return (
    <WebView
      source={{uri: 'https://letsroam.com/explorer/'}}
      style={styles.blog} 
    />
  )
}

const styles = StyleSheet.create({
  blog: {
    height: (deviceSize.height / 8) * 7,
    width: deviceSize.width,    
  },
});

export default Blog;