import React,{useState} from "react";
import {Text,SafeAreaView,View,TextInput,TouchableOpacity} from 'react-native';
import {appStyles as styles} from '../todo/styles';
//SafeAreaView IOS SCREEN EDGE PROTECTION

function App()
{
  const [getText,setText]=useState("");

const handleAddTaskPress=()=>{
  
};

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle} >Enter your tasks in the text box below and press the "Add" button to add.</Text>
        <TextInput style={styles.input} 
        placeholder="Enter your task here"
        onChangeText={(value)=>{
          setText(value); //value girilen değeri direkt bize veriyor
        }}
        
        />
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>Add </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

export default App;