import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default function App() {
   const [count, setCount] = useState(0);
   const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hello World React Native</Text>

      <Button
        style={styles.component}
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />

      <Text>You clicked {count} times</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Add two numbers..."
        onChangeText={(newText) => setText(Calc(newText))}
        defaultValue={text}
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function Calc(num){
  return (num)*(num);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  component: {
    padding: 10,
  }
});
