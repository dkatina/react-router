import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'

const PostsView = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{ //useEffect to run this api request on component mount (Side effect of rendering the component)
        const getPosts = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts([...data.slice(0,10)]) //spreading the contents of data into the posts array
        }

        getPosts()

    }, [] ) //empty dependency array, so that this api will fire once on component mount

  return (
    <>
    <NavBar/>
    <div>PostsView</div>
    {posts.map((post, indx)=>(
        <p>{post.title}</p>
    ))}
    </>
  )
}

export default PostsView