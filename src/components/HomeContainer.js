import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import TodoListComponent from './TodoListComponent'
import TodoFormComponent from './TodoFormComponent'
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
    // 数据处理，切换 todo 状态，更新 state
    toggleTodo(index){
         var todoList = this.state.todoList;
         var todo = todoList[index];
         if(todo){
             todo.status = !todo.status;
             this.setState({
                 todoList: todoList,
             })
         }
     }
     // 执行添加方法，更新数据
     addTodo(text){
            var todoList = this.state.todoList;
            todoList.push({
                title: text,
                status: false,
            });
            this.setState({
                todoList: todoList,
            })
        }
  render(){
    return(
      <View style = {{backgroundColor:'yellow'}}>
        {/* <TodoListComponent
          todoList = {this.state.todoList}/> */}
           <TodoFormComponent
                 addTodo={
                   (text)=>{this.addTodo(text)}
                 }
                />
            <TodoListComponent
              todoList={this.state.todoList}
              toggleTodo={
                (index)=>{this.toggleTodo(index)}
              }
            />
      </View>
    )
  }
}
