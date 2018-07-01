import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  Button,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { connect } from 'react-redux';

const deviceSize = Dimensions.get('window');

class MapContainer extends Component<Props> {

  state = {
    region: {
      latitude: 39.8283,
      longitude: -98.5795,
      latitudeDelta: 20,
      longitudeDelta: 30,
    },
    showModal: false,
    selectedHunt: {}    
  };

  handlePress = (hunt) => {
    this.setState({ showModal: true, selectedHunt: hunt });
  }

  render() {
    const { selectedHunt } = this.state;
    const markers = this.props.hunts.map(hunt => {
      return (        
        <Marker 
          key={hunt.key}
          coordinate={{latitude: parseFloat(hunt.lat), longitude: parseFloat(hunt.long)}}
          onPress={() => this.handlePress(hunt)}
        />                      
      )
    })
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.region}
      >
       {markers}
      </MapView>
        <View styles={styles.wrapper}>
          <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.showModal}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}              
          >
            <View style={styles.modal}>
                <Text style={styles.title}>
                  {this.state.selectedHunt.name}
                </Text>
                <Button
                  title="Hide Modal"
                  onPress={() => {
                    this.setState({ showModal: false});
                }}/> 
            </View>                 
            </Modal>                       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modal: {
    marginTop: deviceSize.height / 8,
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
    backgroundColor: '#FEFEFE'
  },
  title: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  hunts: state.hunts
});


export default connect(mapStateToProps)(MapContainer);