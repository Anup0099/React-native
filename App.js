import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos,setTodos]=useState([
    {text:'Learn React Native',key:'1'},
    {text:'buy coffee',key:'2'},
    {text:'Learn React Native',key:'3'},
  ]);

  const presshandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!==key);
    });
  }
  const submitHandler = (text) => {
    setTodos((prevTodos)=>{
      return[
        {text, key: Math.random().toString()},
        ...prevTodos]
    });
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <View style={styles.content}>
        {/* todoform */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
           <TodoItem item={item} presshandler={presshandler}/>
          )}
          
          />
          
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "bisque",
    color: "black",

    
    fontSize: 20,
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
 
});
