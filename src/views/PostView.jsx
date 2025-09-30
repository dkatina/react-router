import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';

//'https://jsonplaceholder.typicode.com/posts/{id}/comments'

const PostView = () => {
    const { id } = useParams();
    const [comments, setCommments] = useState([])

    useEffect(()=>{
        const getComments = async () =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const data = await response.json();
            setCommments([...data]);

        }

        getComments();
    }, [])

  return (
    <>
    <NavBar/>
    <div>PostView {id}</div>
    {comments.map((comment, idx)=> (
        <PostCard className="comment-card" key={idx} title={comment.email} body={comment.body} id={0}/>
    ))}
    </>
  )
}

export default PostView