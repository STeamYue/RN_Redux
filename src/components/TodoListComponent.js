import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class TodoListComponent extends Component{
  constructor(props)
      {
        super(props);
        this.state =
        {
          todoList:this.props.todoList||[],
        };
      }
  // 接受新数据，更新状态显示
  componentWillReceiveProps(newProps)
      {
        this.setState({
            todoList: newProps.todoList || [],
        });
      }
  // 点击事件，传回父组件，执行相应处理
  toggleTodo(index)
  {
      this.props.toggleTodo && this.props.toggleTodo(index);
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
                  <TouchableOpacity 
                      onPress={()=>{this.toggleTodo(index)}}
                      >
                     <Text  style={[styles.todo,todo.status&&finishStyle]}>
                       {todo.title}
                     </Text>
                  </TouchableOpacity>
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
