import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comments from '../APIs/Comments'

function CommentPage() {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            console.log(res);
            setComments(res.data.slice(0,10));
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

  return (
    <div className='Container'>
         <Comments comments={comments}/>
    </div>
  )
}

export default CommentPage