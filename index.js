import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

import App from './containers/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const bigCityHuntApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);  

AppRegistry.registerComponent('BigCityHuntPracticum', () => bigCityHuntApp);
