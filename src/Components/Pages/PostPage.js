import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../Pages/PostPage.css"

function PostPage() {

    const [Posts, setPosts] = useState([])

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res);
            setPosts(res.data.slice(0,30));
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
  return (
    <div className='DataList'>
        <h1>Our Posts</h1>
        <ul>
            {
                Posts.map(post => <li key={post.id}>Title: {post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default PostPage