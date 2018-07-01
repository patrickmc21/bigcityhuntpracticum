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
import { createBottomTabNavigator } from 'react-navigation';
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

    const MapView = () => {
      return (
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
      )
    };

    const BlogView = () => {
      return (
        <Blog />
      )
    };

    const TabNav = createBottomTabNavigator({
      Map: MapView,
      Blog: BlogView
    },    
    {    
      tabBarOptions: {
        activeBackgroundColor: '#2E4B66',
        activeTintColor: '#8DC448',
        inactiveBackgroundColor: '#2E4B66',
        inactiveTintColor: '#FEFEFE',
        style: styles.tabNavBar,
        tabStyle: styles.tabNav,
        labelStyle: styles.tabNavLabel
    },
    }
  );

    return (
      <View style={styles.container}>
        <Header /> 
        <View style={styles.navWrapper}>
          <TabNav />
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
  navWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: (deviceSize.height / 8) * 7,
    width: deviceSize.width,
    backgroundColor: 'blue'
  },
  tabNavBar: {    
    height: deviceSize.height / 8,
    width: deviceSize.width,
  },
  tabNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: deviceSize.height / 8,
  },
  tabNavLabel: {
    fontSize: 24,
    width: deviceSize.width / 2,
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