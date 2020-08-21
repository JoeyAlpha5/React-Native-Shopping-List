import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () =>{
  const [items, setItems] = useState([
  ]);

  const [display, setDisplay] = useState(true);
  //deletes item fom items list
  const Delete = (id) =>{
    setItems(previousList=>{
      return previousList.filter(item => item.id != id);
    })
  }

  const Add = (item) =>{
    setItems(previousList=>{
      if(item != ''){
        if(previousList == undefined){
          return [{id:Math.random(),text:item},...previousList];

        }else{
          return [{id:Math.random(),text:item},...previousList];
        }
      }else{
        Alert.alert("Oops!", "Please type in an item to add to the list");
      }
    });
  }
  return (
    <View style={styles.viewStyle}>
        <Header title="Jalome's shopping list"/>
        <FlatList style={styles.list}
        data={items}
  renderItem={({item}) => <ListItem id={item.id} item={item.text} delete={Delete}/> }
      />
      <AddItem add={Add}/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  viewStyle:{
    flex:1, 
  },
  list:{
    padding:10
  },
});
