import React from 'react'
import axios from 'axios'
import Logo from '../image/placeholder.jpg'
import '../styles/JobDetails.css'

class JobsDetails extends React.Component {
    // const {path} = match;
    // const {id } = match.params;
    // const [post, setPost] = useState(null)
    // useEffect(() => {
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${}.json`)
    // })
    // const { state } = useLocation()
    
    // useEffect(() => {
    //     console.log(state.id);
    // }, [])
    constructor() {
        super()
        this.state = {data: []}
    }

    componentDidMount () {
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
             .then(job => this.setState({data: job.data}))
             .catch(err => console.log(err))
    }
    //removes componentDidMount warning
    componentWillUnmount () {
        this.setState = (state, cb) => {
            return;
        }
    }

    render() {
       return (
        <div className='container'>
        {this.state.data.length !==0 && 
        
        <div className="container-fluid">
        <div className="card company-card" style={{width:'100%'}}>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                <img className="logo" 
                    src={this.state.data.company_logo === null ? Logo : this.state.data.company_logo} 
                    alt={this.state.data.company}
                />
                </div>
                <div className="card-body">
                    <h5 className='card-title'>{this.state.data.company}</h5>
                    <a href={this.state.data.company_url} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>Company Site</a>
                </div>
            </div>
        </div>
        </div>
        }
            
          {this.state.data.length !== 0 && 
          <div className='card job-description'>
            <div className="card-body">
            <h6 className='card-subtitle'>{this.state.data.created_at.slice(0, 9)} - {this.state.data.type}</h6>
            <h2 className='card-title'>{this.state.data.title}</h2>
            <a href={this.state.data.url} rel='noopener noreferrer' target='_blank' className='btn btn-secondary apply-btn'>Apply Here</a>
            <h6 className='card-subtitle'>{this.state.data.location}</h6>
                <div dangerouslySetInnerHTML={ {__html: `${this.state.data.description}` }} />
            </div>
          </div>
          }
          {this.state.data.length !== 0 &&
          <div className="card apply-here">
          <div className="card-body">
          <h3 className="card-title">How to apply:</h3>
            <div dangerouslySetInnerHTML={ {__html: `${this.state.data.how_to_apply}`}}/>   
          </div>
          </div>
          }

        </div>
    ) 
    }
}

export default JobsDetails
