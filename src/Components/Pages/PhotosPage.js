import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Photos from '../APIs/Photos'

function PhotosPage() {
    const [photos, fetchPhotos] = useState([])

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            console.log(res);
            fetchPhotos(res.data.slice(0,10));
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

  return (
    <div className='Container'>
         <Photos photos={photos}/>
    </div>
  )
}

export default PhotosPage