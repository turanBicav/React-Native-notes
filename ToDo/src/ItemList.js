import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemList = ({text}) =>{

    return (<View style={style.card}><Text>{text}</Text></View>)
}

const style = StyleSheet.create({

card:{
    backgroundColor:'yellow',
    padding:10,
    margin:5,
}

})
export default ItemList;

