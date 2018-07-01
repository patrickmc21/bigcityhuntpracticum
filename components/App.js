// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import Header from './Header';
// import Blog from './Blog';
// import MapContainer from '../containers/MapContainer';

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header />        
//         <MapContainer />       
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginTop: Platform.OS === 'ios' ? 20 : 0,
//     backgroundColor: '#F5FCFF',
//   },
// });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class App extends Component {

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
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
  }

});