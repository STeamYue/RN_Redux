import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
export default class TodoListComponent extends Component{
  constructor(props)
  {
    super(props);
    this.state =
    {
      todoList:this.props.todoList,
    };
  }
  render(){
    return(
      <View
        style = {styles.container}
        >
          {
            this.state.todoList.map((todo,index)=>{
                var finishStyle = {textDecorationLine:'line-through',
                                                color:'gray'};
                return (
                  <Text style={[styles.todo,todo.status&&finishStyle]}>{todo.title}</Text>
                );
              }
            )
          }
      </View>
    );
  }
}
TodoListComponent.defaultProps = {
    todoList: [],
}
//
const  styles = StyleSheet.create({
  container:
  {
        paddingHorizontal: 20,
  },
  todo:
  {
        paddingVertical: 5,
  },
})
