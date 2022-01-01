import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("anup");
  const [age, setAge] = useState("20");
  const [people, setPeople] = useState  ([
    { name: "anup", age: "20",key:'1' },
    { name: "debo", age: "28", key:'2' },
    { name: "paps", age: "25", key:'3' },
  ]);
  return (
    <View style={styles.container}>
      <Text>enter name </Text>
      <TextInput
      multiline={true}
      keyboardType="default"
        style={styles.input}
        placeholder="Enter name"
        onChangeText={(val) => {
          setName(val);
        }}
      />
      <Text>enter age </Text>
      <TextInput
      keyboardType="numeric"
        style={styles.input}
        placeholder="Enter age"
        onChangeText={(val) => {
          setAge(val);
        }}
      />
      <Text>
        name:{name},age:{age}
      </Text>
      <View style={styles.container}>
         {people.map(person =>{
           return <View>
            <Text>{person.name}</Text>
            <Text>{person.age}</Text>
            </View>
         })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    backgroundColor: "#fff",
  },
});
