import React, {useState, useEffect} from 'react'
import axios from 'axios'

const JobsDetails = () => {
    const [post, setPost] = useState([]);

    useEffect(()=> {
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${post}.json`)
        .then(data => {
            setPost(data.data)
        })
        .catch(err => console.log(err))
    })
    
    return (
        <div>
            {post && (
                <h1>{post.title}</h1>
            )}
        </div>
    )
}

export default JobsDetails
