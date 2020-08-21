import React from 'react';
import {View, Text, StyleSheet, ImagePropTypes} from 'react-native';

const Header = (props) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:'#000000',
        justifyContent:"center"
    },
    text:{
        color:'#ffffff',
        fontSize:15,
        textAlign:'center'
    }

});