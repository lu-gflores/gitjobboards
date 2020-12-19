import React from 'react'
import Nav from './components/Nav'
import Jobs from './components/Jobs'
import JobDetails from './pages/JobsDetails'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Route exact path = '/' component={Jobs} />
      <Route exact path = '/:id' component={JobDetails} />
    </Router>
    </div>
  );
}

export default App;
