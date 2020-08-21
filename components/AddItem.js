import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const AddItem = (props) =>{
    const [text, setText] = useState('');
    const addNewItem = ()=>{
        props.add(text);
        setText('');
    }
    return(
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Type here to translate!"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
        <Icon name="plus-circle" style={styles.Icon} size={40} color="#000000" onPress={()=>addNewItem()}/>
        </View>
    )
}
export default AddItem
const styles = StyleSheet.create({
    inputStyle:{
        color:'#000000',
        marginLeft:10
    },
    viewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    Icon:{
        marginRight:15,
    }
});