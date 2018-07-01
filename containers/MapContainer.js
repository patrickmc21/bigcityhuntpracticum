import React, { Component } from 'react';
import {
  View, 
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

class MapContainer extends Component<Props> {

  render() {
    return (
      <View>
        <MapView
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

export default MapContainer;