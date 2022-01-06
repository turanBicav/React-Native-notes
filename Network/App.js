
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import {Item} from './Item';

export default class App extends React.Component{
 

  constructor(props){
    super(props);
    this.state={
      data:[],
      loading:false,
      isRefresh:false,
      page:1
    }

  }
  _renderItem = ({item})=>{
    
    return <Item item={item}/>
      
  }

  onRefresh = ()=>{
    this.setState({isRefresh:true});
    this.fetchUser();
  }

  loadMore = ()=>{
    const  {page} =this.state;
    var NewPage = page +1 ;
    this.fetchUser(NewPage, true);
  }

  renderFooter=()=>{
   if(!this.state.loading) return null;
   return <ActivityIndicator style={{color:'red'}}/>

  }


componentDidMount(){
  this.fetchUser();
}

   fetchUser(page=1,isLoadMore=false){
     
     const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`

     this.setState({loading:true})
    setTimeout(()=>{
     axios.get(url).then((res)=>{
      const {data} = this.state;
      let newData = (isLoadMore) ? data.concat(res.data.items) : res.data.items
       this.setState({
         page,
         data:newData,
          loading:false,
          isRefresh:false
        }
          )
     }).catch()
    },1000);
   }
   


  
    render(){
      const {data,loading,isRefresh} =this.state;

    return (<SafeAreaView style={{backgroundColor:'grey'}}>
     
      <FlatList
       data={data}
       numColumns={1}
       keyExtractor={(item,index)=>item.index}
       renderItem={this._renderItem}
       refreshControl={
         <RefreshControl
         refreshing={isRefresh}
         onRefresh={this.onRefresh}
         
         />
       }
       ListFooterComponent={this.renderFooter}
       ListHeaderComponentStyle={{backgroundColor:'red'}}
       onEndReachedThreshold={0.5}
       onEndReached={this.loadMore}
       
       />

       
    

    </SafeAreaView>)

  }
}

