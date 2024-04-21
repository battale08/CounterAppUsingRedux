/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import liraries
import React from 'react';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './Redux/store';
import CounterComponent from './component/counterComponent';

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

//make this component available to the app
export default App;
