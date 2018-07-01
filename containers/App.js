import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import Blog from '../components/Blog';
import MapContainer from './MapContainer';
import { getHunts } from '../actions';

const deviceSize = Dimensions.get('window');

type Props = {};
class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      errorStatus: null
    }
  }

  componentDidMount = async () => {
    try {
      await this.props.fetchHunts();
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ errorStatus: error });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header /> 
        <View style={styles.mapWrapper}>
          {
            this.state.isLoading ? 
            <Image
              style={styles.loadingImage} 
              source={require('../assets/images/loading-gif.gif')}
            />
            :
            <MapContainer />
          }       
        </View>       
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
    height: deviceSize.height,
    width: deviceSize.width,
    backgroundColor: '#F5FCFF',
  },
  mapWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: (deviceSize.height / 8) * 6,
    width: deviceSize.width,
  },
  loadingImage: {
    height: 200,
    width: 200
  }
});

const mapDispatchToProps = dispatch => ({
  fetchHunts: () => dispatch(getHunts())
});

export default connect(null, mapDispatchToProps)(App)