import React,{ useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    
    FlatList,
    TouchableOpacity,
    TextInput
  } from "react-native";
  
const AddTodo = ({submitHandler}) => {
    const [text,setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View >
            <TextInput style={styles.input}
            placeholder="Add Todo"
            onChangeText={changeHandler}
            value={text}
            />
            <Button title="Add" color='coral' onPress={()=>{
                submitHandler(text);
               
            }}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
   
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
       

    }
});

export default AddTodo
