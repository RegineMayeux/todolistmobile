import React, {useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Input } from 'react-native-elements';

 function App() {
  const[tasks,setTasks] = useState([
      {id:1, task:"Acheter les billets d'avion"},
      {id:2, task:"Changer les €uros en Florins"},
      {id:3, task:"Préparer ma valise"},
      {id:4, task:"Réserver un taxi"}
  ])

function deleteTask(id) {
  let remainingTasks = tasks.filter(task => task.id !== id)
  setTasks(remainingTasks)
}

addTask = (text) => {
  this.setState({
    task: text
    })
}

      let tasksList = tasks.map(task => {
      return <Text style={styles.task}>{task.tasks}</Text>
    });

    return ( 
      <View style={styles.container}>

        <Text style={styles.title}>Todo liste pour mon séjour à Budapest</Text>
        <Text>Ajouter une tâche</Text>
        <Input style={styles.input}
        value={tasks} onChangeText={text => addTask(text)} />
        <Button title="VALIDER" color="red" onPress={addTask} />


        <FlatList
        data={tasks}
        renderItem={({item}) => 
          <View style={styles.task}> 
          <Text style={styles.taskTitle}>{item.task}</Text>
          <TouchableOpacity onPress={() => {deleteTask(item.id)}}>
            <MaterialIcons name="delete" size={32} color="white" />
          </TouchableOpacity>
          </View>}
          keyExtrator={item => item.id.toString()}
        />
      </View> 
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10
  }, 
  formInput: {
    margin: 20,
  },
  task: {
    padding: 20,
    margin: 5,
    width: 300,
    backgroundColor: 'lightseagreen',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskTitle: {
    color: 'white',
    fontSize: 20
  },
  title: {
    fontSize: 25
  }

});

export default App;


// https://docs.expo.io/guides/icons/
// https://icons.expo.fyi/