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
export default function App() {
  const [todos,setTodos]=useState([
    {text:'Learn React Native',key:'1'},
    {text:'Learn React Native',key:'2'},
    {text:'Learn React Native',key:'3'},
  ]);

  
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <View style={styles.content}>
        {/* todoform */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <Text>{item.text}</Text>
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
    backgroundColor: "pink",
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
