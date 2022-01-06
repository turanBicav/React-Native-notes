import React from 'react';
import {SafeAreaView, View, StyleSheet,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik } from "formik";
import * as Yup from "yup";
import MainStore from "../../MainStore"
import {observer} from "mobx-react";
@observer

export default class Login extends React.Component
{
    constructor(){
        super();
        this.state={
            hidePassword:true
        }
    }
    _handleSubmit=()=>{
        alert('LELELELELELELE');
    };
    componentDidMount(){
        MainStore.getName()
    }

    render(){
        return( 
        <SafeAreaView style={style.body}>
        
        <View style={style.header}>
            <Text style={style.headerText}>Sing In</Text>
            
        </View>
        
        <View style={style.logoP}>
        <Text>{MainStore.fullName} </Text>
        <TouchableOpacity onPress={()=>MainStore.setData("Turaran","Turan")}>
            <Text>Değiştir</Text>
            </TouchableOpacity>
            <Image source={require('../../../assets/image/home.png')}></Image>
            </View>
            
        <View style={style.formP}>
        <Formik
             initialValues={{
                 username:'',
                 password:''
             }}
             onSubmit={this._handleSubmit}
             validationSchema={Yup.object().shape({
                 username:Yup.string().required('Kullanici adı gereklidir'),
                 password:Yup.string().required('sifre girilmelidir')
             })}
            >
                {({values , 
                handleSubmit,
                handleChange,
                errors
            })=>(
                <View>
            <View>   
            <View style={style.formView}> 
            <TextInput style={style.formInput }
            value={values.username}
            placeholder={"username"}
            onChangeText={handleChange('username')}
            > 
            </TextInput>
            {(errors.username) && <Text style={style.alert}>{errors.username}</Text>}
            </View>
            <View style={style.formView}>
            <TextInput style={style.formInput}
            value={values.password}
            placeholder={"password"}
            onChangeText={handleChange('password') } 
            secureTextEntry={this.state.hidePassword}  
            >
            </TextInput>
            <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword})}style={style.eye}>
                <Icon name={(this.state.hidePassword) ? 'eye-slash': 'eye'} size={15}></Icon>
                </TouchableOpacity>
                {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
            </View>
                
                </View>
            <View style={{flexDirection:'row',marginHorizontal:20}}>
            <TouchableOpacity ><Text style={style.formText}>New Account</Text></TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150}}>
                    <Text style={style.formText}>Forgot your password ?</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={style.button} onPress={handleSubmit}>
                <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={style.formText,{textAlign:'center'}}>Or</Text>  
                </View>
                </View>
                )}
                </Formik>     
        </View>
        
        
        <View style={style.social}>
        <TouchableOpacity style={style.socialT}><Icon name='facebook-f' size={45} color='#3b5999'></Icon></TouchableOpacity>
        <TouchableOpacity style={style.socialT}><Icon name='twitter' size={45} color='#55acee'></Icon></TouchableOpacity>
        <TouchableOpacity style={style.socialT}><Icon name='instagram-square' size={45} color='#e4405f'></Icon></TouchableOpacity>
        </View>
        </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({

    body:{
        flex:1,
       
        
    },
    header:{
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        alignContent:'center',
        padding:20,
        justifyContent: 'center',
        
    },

    headerText:{
        fontWeight:'600',
        fontSize:20,
        color:'#018A7A',

    },
    logoP:{

     alignItems:'center' ,
     justifyContent:'center',
     marginVertical:50

    },
    formP:{

    },

    formView:{
        marginHorizontal:50,
        marginVertical:10,
        

    },
    formInput:{
       
        height:55,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#dddddd',
        paddingHorizontal:20,
        

    },
    formText: {
        color:'grey'
    },

    button:{
        backgroundColor:'#01957E',
        alignItems:'center',
        height:50,
        marginHorizontal:30,
        marginVertical:20,
        justifyContent:'center'

    },

    buttonText:{
       textAlign:'center',
       color:'white',
       fontWeight:'700',
       fontSize:16
    
    },
    social:{
        flexDirection:'row',
        marginVertical:20,
        alignItems:'center',      
        marginHorizontal:40
        
        
    },
    socialT:{
        marginHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        height:60,
        width:90,
        alignItems:'center',
        justifyContent:'center'
    },
    eye:{
        position:'absolute',
        right:20,
        top:20
       
    },
    alert:{
        color:'red',
        
    }
   


})