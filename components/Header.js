import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';


const deviceSize = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.header}>
       { Platform.OS !== 'ios' ?
        <Image
            style={styles.headerImage} 
            source={require('../assets/images/logo.webp')}
            />
        :
        <Text style={styles.title}>
          Big City Hunt
        </Text>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceSize.height / 8,
    width: deviceSize.width,
    backgroundColor: '#2E4B66',    
  },
  headerImage: {
    height: 50,
    width: 130
  },
  title: {
    color: '#FEFEFE',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default Header;
