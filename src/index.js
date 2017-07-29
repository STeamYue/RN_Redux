import React, { Component } from 'react';
import{
  View,
  Text,
  StyleSheet,}from 'react-native';
import HomeContainer from './components/HomeContainer'
  export default class RootContainer extends Component{
      render(){
        return (
          <View style ={styles.container}>
            <HomeContainer/>
          </View>
        );
      }
  }
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    marginTop:20,
    backgroundColor:'green',
  },
})
