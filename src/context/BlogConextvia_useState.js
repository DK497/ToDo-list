import React,{useState} from 'react'

const BlogContext=React.createContext()

export const BlogProvider = ({children}) => {
    const [blogposts, setblogposts] = useState([])
    
    const addblogp=()=>{
        setblogposts([...blogposts,{t:`Blog Post #${blogposts.length+1}`}])
    }
    
    return (
        <BlogContext.Provider value={{data:blogposts,addbp:addblogp}}> 
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext