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
        <div className="card flex-row flex-wrap">
            <div className="card-header border-0" style={{width:'100%'}}>
                <img src={this.state.data.company_logo === null ? Logo : this.state.data.company_logo} 
                    alt={this.state.data.company}
                />
            </div>
                <div className="card-block">
                    <h5 className='card-title'>{this.state.data.company}</h5>
                </div>
        </div>
        }
            
          {this.state.data.length !== 0 && 
          <div className='card job-description'>
            <div className="card-body">
            <h6 className='card-subtitle'>{this.state.data.created_at.slice(0, 9)} - {this.state.data.type}</h6>
            <h2 className='card-title'>{this.state.data.title}</h2>
            <h6 className='card-subtitle'>{this.state.data.location}</h6>
                <div dangerouslySetInnerHTML={ {__html: `${this.state.data.description}` }} />
            </div>
          </div>
          }
          {this.state.data.length !== 0 &&
          <div className="card apply-here" style={{width:'100%', height:'100%', wordBreak:'inital' }}>
          <div className="card-body">
            <div dangerouslySetInnerHTML={ {__html: `${this.state.data.how_to_apply}`}}/>   
          </div>
          </div>
          }

        </div>
    ) 
    }

}

export default JobsDetails
