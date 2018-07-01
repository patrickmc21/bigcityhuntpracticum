import React, { Component } from 'react';
import {
  View, 
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const deviceSize = Dimensions.get('window');

class MapContainer extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <MapView          
          provider={ PROVIDER_GOOGLE }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    height: (deviceSize.height / 8) * 7,
    width: deviceSize.width,    
  },
});

export default MapContainer;