import React, { Component } from 'react';
import {
  View, 
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';

const deviceSize = Dimensions.get('window');

class MapContainer extends Component<Props> {

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    hunts: []
  };

  render() {

    return (
      <MapView
        style={styles.map}
        region={this.state.region}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
  }
})

const mapStateToProps = state => ({
  hunts: state.hunts
});


export default connect(mapStateToProps)(MapContainer);