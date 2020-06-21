import React,{useContext} from 'react'
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../component/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const {addbp}=useContext(Context)
    return <BlogPostForm iv={{t:'',c:''}}
              onSubmit={(t,c)=>addbp(t,c,()=>navigation.navigate('Index'))
    }/>
   
}
CreateScreen.navigationOptions=()=>{
    return{
        title:'Create ToDO Items with Details'
    }
}
const styles=StyleSheet.create({

})

export default CreateScreen;