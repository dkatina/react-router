import React from 'react'
import NavBar from '../components/NavBar/NavBar';

const PostView = () => {
    const { id } = useParams();
  return (
    <>
    <NavBar/>
    <div>PostView</div>
    </>
  )
}

export default PostView