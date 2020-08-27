import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ListItem = (props) =>{

    //condtional
    const Milk = (props) =>{
        if(props.text == "ilk"){
            return <Text>{props.text}</Text>;
        }
        else return <Text></Text>
    }

    return(
        <TouchableOpacity>
            <View style={styles.view}>
                {/* <Milk text={props.item}/> */}
                <Text style={styles.text}>{props.item}</Text>
                <Icon name="remove" size={20} color="#ffffff" onPress={()=>props.delete(props.id)}/>
            </View>
        </TouchableOpacity>
    )
}
export default ListItem
styles = StyleSheet.create({
    text:{
        color:'#ffffff',
        fontSize:20,
        marginLeft:10,
      },
    view:{
        flex:1,
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#000000',
        borderRadius:5,
        marginTop:10,
        padding:5,
        alignItems:'center',
        paddingRight:10
    },
})
