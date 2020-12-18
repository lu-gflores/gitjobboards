import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/Jobs.css'

const Jobs = () => {

const [jobPost, setJobPost] = useState(null);
const [input, setInput] = useState('');

useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`)
    .then(data => {
        setJobPost(data.data)
        console.log(data.data)
    })
    .catch(err => console.log(err))
}, [])

const searchJobs = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`)
    .then(data => {
        setJobPost(data.data)
    })
}
    return (

        <div className='container'>
        {/* User input search */}
          <form className='input-group'>
             <span className='input-group-text'>0</span>
                <input type='text' className='form-control' placeholder='Filter by title, company, expertise...'/>
            <span className='input-group-text'>L</span>
              <input type='text' className='form-control' placeholder='filter by location'/>

              <div className='input-group-text'>
                <input className='form-check-input' type='checkbox' value=''/>
                <label htmlFor="full-time">Full-time</label>
              </div>
                
                <button type='button' className='btn btn-primary'>Search</button>
          </form>
        
        {jobPost && (
            <div className="row">
              {jobPost.map(job => 

              <div className="col-sm-4">
                <div className='card' style={{width: '18rem', height:'15rem'}}>
                    <div className="card-body">
                    <h6 className='card-subtitle'>{job.created_at} - {job.type}</h6>
                    <h4 className='card-title'>{job.title}</h4>
                    <h6 className='card-subtitle'>{job.company}</h6>

                 </div>
                </div>

              </div>     
            )}  
            </div>    
        )}


        </div>
    )
}

export default Jobs
