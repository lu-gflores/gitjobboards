import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/Jobs.css'

const Jobs = () => {

const [jobPost, setJobPost] = useState(null);
const [input, setInput] = useState('');

useEffect(() => {
    axios.get(``)
})

    return (
        <div className='container'>
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
        </div>
    )
}

export default Jobs
