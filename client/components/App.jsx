import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from "./Nav"


const App = () => {
  return (
    <Router>
      <div>
        <h1>Navigating the Taxonomic Ranks</h1>
        <div className="container">
          <Nav />
        </div>
      </div>
    </Router>
  )
}

export default App
