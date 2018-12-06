/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Container} from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HalamanDetail from './app/component/Detail';
import HalamanHome from './app/Home';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  static navigationOptions = { header: {
    visible: false,
  }, };
  render() {
    return (
      <RootView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RootView = createStackNavigator({
  HomeScreen:  HalamanHome,
  DetailScreen: HalamanDetail
}, {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);

export default createAppContainer(RootView);