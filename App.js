import React,{useState} from "react";
import {Text,SafeAreaView,View,TextInput,TouchableOpacity,FlatList} from 'react-native';
import {appStyles as styles} from '../todo/styles';
//SafeAreaView IOS SCREEN EDGE PROTECTION

function App()
{
  const [getText,setText]=useState("");

  const [tasks,setTasks]=useState([]);
const handleAddTaskPress=()=>{
setTasks([...tasks,getText]);
setText("");
};

const handleDeleteTaskPress=(index)=>
{
  const newTasks=[...tasks];
  newTasks.splice(index,1);
  setTasks(newTasks);
}

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle} >Enter your tasks in the text box below and press the "Add" button to add.</Text>
        <TextInput style={styles.input} 
        placeholder="Enter your task here"
        value={getText}
        onChangeText={(value)=>{
          setText(value); //value girilen değeri direkt bize veriyor
        }}
        
        />
        <TouchableOpacity 
        style={styles.buttoncontainer}
       
        onPress={handleAddTaskPress}
        >
          <Text style={styles.buttontext}>Add </Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>
      </View>
      <FlatList
      styles={styles.divider}
      data={tasks}
      renderItem={({item,index})=><View style={styles.taskContainer}>
        <Text style={styles.taskText}>{item}</Text>
        <TouchableOpacity 
        onPress={()=>handleDeleteTaskPress(index)}
        style={styles.taskDelete}>
          <Text style={styles.taskDelete}>X</Text>
        </TouchableOpacity>
      </View>}
      keyExtractor={(item)=>item+Date.now()+Math.random()}

      />
    </SafeAreaView>
  );
}

export default App;