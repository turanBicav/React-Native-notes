import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

export const Item =({item}) =>{
    return(
    <View style={style.card}>

          <Image style={style.image} source={{uri:item.profile_image}}></Image>
          <View style={style.textView}><Text style={style.textName}>{item.display_name}</Text></View>
          </View>)
};  

const style = StyleSheet.create({

  card :{
    flex:1,
    backgroundColor:'#f5f5f5',
    marginVertical:2,
    marginHorizontal:10,
    borderRadius:5,
    flexDirection:'row',
    paddingHorizontal:10,
    height:70,
    alignItems:'center'

  },
image:{
  height:50,
  width:50,
  borderRadius:50,
  marginRight:20,
  borderColor:'green',
  borderWidth:1
  
},
textName:{
  color:'blue',
  fontSize:16,
 

},

textView:{

}


})
  
  

  
