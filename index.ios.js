/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootContainer from './src/index.js'
export default class RN_Redux extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <RootContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('RN_Redux', () => RN_Redux);
