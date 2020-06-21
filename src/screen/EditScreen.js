import React,{useContext,useState} from 'react'
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../component/BlogPostForm'

const EditScreen = ({navigation}) => {
    const id=navigation.getParam('id')
    const {state,editbp}=useContext(Context)
    const bp=state.find(b=>b.id===id)
     
    return <BlogPostForm iv={{t:bp.t,c:bp.c}} 
             onSubmit={(t,c)=>{editbp(id,t,c,()=>navigation.pop())}}/>
    

    
}

EditScreen.navigationOptions=()=>{
    return{
        title:'Edit ToDO Items and Details'
    }
}

const styles=StyleSheet.create({

})

export default EditScreen;