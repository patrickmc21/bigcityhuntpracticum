import React, { Component } from 'react';
import {
  View, 
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';

const deviceSize = Dimensions.get('window');

class MapContainer extends Component<Props> {

  state = {
    region: {
      latitude: 39.8283,
      longitude: -98.5795,
      latitudeDelta: 20,
      longitudeDelta: 30,
    }
  };

  render() {
    const markers = this.props.hunts.map(hunt => {
      return (
        <Marker 
          key={hunt.key}
          coordinate={{latitude: parseFloat(hunt.lat), longitude: parseFloat(hunt.long)}}
        />
      )
    })
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
      >
       {markers}
      </MapView>
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