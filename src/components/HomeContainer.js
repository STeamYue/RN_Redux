import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import TodoListComponent from './TodoListComponent'
export  default class HomeContainer extends Component{
  constructor(props){
    super(props);
      this.state =
      {
        todoList:[{title:'iOS',status:false},
                 {title:'ReactNative',status:false},
                 {title:'TestRN',status:false},],
       };
    }
  render(){
    return(
      <View style = {{backgroundColor:'yellow'}}>
        <TodoListComponent
          todoList = {this.state.todoList}/>
      </View>
    )
  }
}
