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

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop:38 ,
        backgroundColor: 'coral',

    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default Header
