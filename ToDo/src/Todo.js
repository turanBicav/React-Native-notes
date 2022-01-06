import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import ItemList from './ItemList';
export default class Todo extends Component {
  constructor() {
    super();
    this.state={
        text:'',
        data:[]
    }
    
  }
  kaydet = () =>{
  const {text,data} = this.state;
  data.push({text});
  this.setState({data,text:''});
    
  };

  render() {
const {text,data} = this.state;

    return (
      <View>
          <View style={{backgroundColor:'blue',padding:15,}}>
        <Text style={style.baslik}> To-do </Text>
        </View>
        <View style={{backgroundColor:'#cccc', padding:10,flexDirection:'row'}}>
          <TextInput 
          style={style.input}
          onChangeText={(text)=>this.setState({text})}
          value={text}
          ></TextInput>
          <TouchableOpacity 
          style={style.button}
          onPress={this.kaydet}
          >
              <Text style={{textAlign:'center',color:'white'}}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <View>
            {data.map((item)=>{
                return <ItemList text={item.text}/>
            })
            }
        </View>
      </View>
    );
  }
}

    const style = StyleSheet.create({

    baslik:{
        textAlign:'center',
        color:'white',
        fontWeight:'700',
        fontSize:16

    },
    input:{

        padding:10,
        backgroundColor:'white',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#d1d1d1',
        flex:1,

    },
    button:{
       padding:15,
       backgroundColor:'blue',
       borderRadius:5,
       marginLeft:5
    },
    




  })

