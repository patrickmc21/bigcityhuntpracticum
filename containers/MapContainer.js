import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  Image,
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
              this.setState({ showModal: false});
            }}              
          >
            <View style={styles.modal}>
                <Text style={styles.title}>
                  {selectedHunt.name}
                </Text>
                <View style={styles.imgWrapper}>
                  <Image
                    style={styles.modalImg}
                    source={{uri: selectedHunt.huntMediumPhotoURL}}
                  />
                </View>
                <View style={styles.locationWrapper}>                  
                  <Text style={styles.location}>
                    {selectedHunt.city}, {selectedHunt.state}
                  </Text>
                  <Text style={styles.country}>
                    {selectedHunt.country}
                  </Text>
                </View>
                <View style={styles.descriptionWrapper}>
                  <Text style={styles.description}>
                    {selectedHunt.description}
                  </Text>
                </View> 
                <View style={styles.huntStats}>
                  <View style={styles.statBox}>
                    <Text style={styles.statHeader}>
                      Stars:
                    </Text>
                    <Text style={styles.stat}>
                      {selectedHunt.star_rating}
                    </Text>
                  </View>
                  <View style={styles.statBox}>
                    <Text style={styles.statHeader}>
                      Difficulty:
                    </Text>
                    <Text style={styles.stat}>
                      {selectedHunt.difficulty_focus}
                    </Text>
                  </View>
                  <View style={styles.statBox}>
                    <Text style={styles.statHeader}>
                      Distance:
                    </Text>
                    <Text style={styles.stat}>
                      {selectedHunt.distance_miles} miles
                    </Text>
                  </View>
                </View>
                <View style={styles.closeBtn}>
                  <Button                  
                    title="close"
                    color= '#2E4B66'
                    onPress={() => {
                      this.setState({ showModal: false});
                  }}/>
                </View> 
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 10,
    marginTop: deviceSize.height / 8,
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
    backgroundColor: '#FEFEFE'
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    paddingBottom: 10,
    marginBottom: 10,
    width: deviceSize.width,    
    color: '#000000',
    fontSize: 30,
    textAlign: 'center'
  },
  imgWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: (deviceSize.height / 8) * 2,
    width: deviceSize.width,
  },
  modalImg: {
    height: (deviceSize.height / 8) * 2,
    width: (deviceSize.width / 6) * 5,
  },
  locationWrapper: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceSize.height / 8,
    width: deviceSize.width,
  },  
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  country: {
    fontSize: 16,
    textAlign: 'center',
  },
  descriptionWrapper: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    height: (deviceSize.height / 16) * 3,
    width: deviceSize.width,
  },
  description: {
    fontSize: 18,
  },
  huntStats: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    height: deviceSize.height / 8,
    width: deviceSize.width,
  },
  statBox: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceSize.height / 8,
    width: deviceSize.width / 4,
  },
  statHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stat: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeBtn: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: deviceSize.width
  }
})

const mapStateToProps = state => ({
  hunts: state.hunts
});


export default connect(mapStateToProps)(MapContainer);