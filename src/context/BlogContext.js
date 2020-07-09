import React,{useReducer} from 'react'
import createDataContext from './createDataContext'
import { HeaderTitle } from 'react-navigation-stack'
import jsonServer from '../api/jsonServer'


const blogReducer=(state,action)=>{
     switch(action.type)
     {
        case 'get_blogposts':
            {
                return action.payload
            }
         
        case 'edit_blogpost':
                    {   return state.map((bp)=>{
                              return bp.id===action.payload.id?action.payload:bp 
                    })
                         }
         case 'delete_blogpost':{
             return state.filter(bp=>bp.id!==action.payload)
         }
        default:
            {return state}
     }
}

const getBlogPosts=(dispatch)=>{
    return async()=>{
      const res= await jsonServer.get('/blogposts')
      dispatch({type:'get_blogposts',payload:res.data})
    }
}

const addBlogPost=(dispatch)=>{
    return async (t,c,callback)=>{
        await jsonServer.post('/blogposts',{t:t,c:c})
        callback()
    //   try{  dispatch({type:'add_blogpost',payload:{t:t,c:c}})
    //     }
    //     catch(e) {

    //     }
    }
    
}

const editBlogPost=(dispatch)=>{
    return async (id,t,c,callback)=>{
        await jsonServer.put(`/blogposts/${id}`,{t:t,c:c})
       dispatch({type:'edit_blogpost',payload:{id:id,t:t,c:c}})
        callback()
        
    }
    
}

const deleteBlogPost=(dispatch)=>{
    return async (id)=>{
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type:'delete_blogpost',payload:id})
    }
    
}


export const {Context,Provider}=createDataContext(blogReducer,{getbps:getBlogPosts,addbp:addBlogPost,delbp:deleteBlogPost,editbp:editBlogPost},[])