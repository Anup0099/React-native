import React from 'react'
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
  
const TodoItem = ({item,presshandler}) => {
    return (
        <TouchableOpacity onPress={()=>{presshandler(item.key)}}>
            <Text style={styles.item}>{item.text}</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        item:{
            padding:16,
            marginTop:16,
            borderColor:'blueviolet',
            borderWidth:3,
            borderStyle:'dashed',
            borderRadius:10,
            
        }
})

export default TodoItem
