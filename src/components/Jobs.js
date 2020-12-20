import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import PagePagination from './PagePagination'
import Logo from '../image/placeholder.jpg'

import '../styles/Jobs.css'

const Jobs = () => {

const [jobPost, setJobPost] = useState(null);
const [input, setInput] = useState('');



useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`)
    .then(data => {
        setJobPost(data.data)
    })
    .catch(err => console.log(err))
}, [])

const roleInput = e => {
    setInput(e.target.value);
} 

// const locationInput = e => {
//     setInput(e.target.value);
// } 

// const fullTimeInput = e => {
//     setInput(e.target.value);
// } 

const searchJobs = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${input}`)
    .then(data => {
        setJobPost(data.data)
    })
}

const handlepage = n => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${n}`)
    .then(data => {
        setJobPost(data.data)
    })
}

    return (

        <div className='container'>
        
          <form className='input-group'>
             <span className='input-group-text'>0</span>
                <input type='text' onChange={roleInput} name='role' className='form-control' placeholder='Filter by title, company, expertise...'/>
            <span className='input-group-text d-none d-md-block'>L</span>
              <input type='text' name='location' className='form-control d-none d-md-block' placeholder='Filter by location'/>

              <div className='input-group-text d-none d-md-block'>
                <input className='form-check-input d-none d-md-block' name='fulltime' type='checkbox' value=''/>
                <label htmlFor="full-time" className='d-none d-md-block'>Full-time</label>
              </div>
                
                <button onClick={searchJobs} type='button' className='btn btn-primary'>Search</button>
          </form>
        
        {jobPost && (
            <div className="row">
            
              {jobPost.map(job => 

              <div className="col-md-4" key={job.id}>

              <Link to={`/${job.id}`}>
                <div className='card'  >
                    <img className='company-logo' 
                    src={job.company_logo === null ? Logo : job.company_logo} 
                    alt={job.company}
                    />
                    <div className="card-body">
                    <h6 className='card-subtitle'>{job.created_at.slice(0, 9)} - {job.type}</h6>
                    <h5 className='card-title'>{job.title}</h5>
                    <h6 className='card-subtitle'>{job.company}</h6>
                    <br/>
                    <p className='location-text'>{job.location}</p>
                 </div>
                </div>

              </Link>
              
              </div>  
            )}  
             
            </div>    
        )}
           
        </div>

    )
}

export default Jobs
