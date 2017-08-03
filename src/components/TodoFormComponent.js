import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';
export default class TodoFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: null,
        };
    }
    addTodo(){
        this.props.addTodo && this.props.addTodo(this.state.todo);
    }
    setTodo(text){
        this.setState({
            todo: text
        });
    }
    render(){
        return (
            <View
              style={styles.container}
              >
                <TextInput
                    style={styles.input}
                     onChangeText={
                            (text)=>{this.setTodo(text)}
                             }
                     />
                <Button title="添加"
                  onPress={
                    ()=>this.addTodo()
                         }
                 />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    input: {
        height: 30,
        borderColor: 'blue',
        borderWidth: 2,
        flex: 1,
    },
});
