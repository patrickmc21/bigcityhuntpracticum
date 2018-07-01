import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './Header';
import Blog from './Blog';
import MapContainer from '../containers/MapContainer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />        
        <Blog />       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },
});