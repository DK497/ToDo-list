import React,{useContext} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext'
import { FontAwesome5 } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id=navigation.getParam('id')
    const {state}=useContext(Context)
    const bp=state.find((bl)=>bl.id===navigation.getParam('id'))
 
    return (
     <View>
       <Text style={styles.t1}>{bp.t}:</Text>
       <Text style={styles.t2}>{bp.c}</Text>
     </View>   
    )
}

ShowScreen.navigationOptions=({navigation})=>{
  return {
    title:'Detail',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
        <FontAwesome5 name="user-edit" size={24} color="black" />
      </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  t1:{
    fontSize:50,padding:10
  },
  t2:{
    fontSize:30,paddingLeft:10,fontWeight:'bold',color:'blue'
  }

})

export default ShowScreen;