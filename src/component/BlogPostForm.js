import React,{useContext,useState} from 'react'
import { View,Text ,StyleSheet,TextInput,Button} from 'react-native';


const BlogPostForm= ({onSubmit,iv}) => {
    
 

    const [title, settitle] = useState(iv.t)
    const [content, setcontent] = useState(iv.c)

    return (
        <View>
            <Text  style={styles.label}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(t)=>settitle(t)}/>
            <Text  style={styles.label}>Content:</Text>
            <TextInput style={styles.input } value={content} onChangeText={(t)=>setcontent(t)}/>
            <Button title='Save Blog Post' onPress={()=>onSubmit(title,content)}/>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,borderColor:'black',borderWidth:1,marginBottom:5,padding:5,margin:5
    },
    label:{
        fontSize:20,marginLeft:5,
        marginBottom:10
    }

})

export default BlogPostForm;  