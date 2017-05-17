import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from "./Nav"
import List from "./List"


const App = () => {
  return (
    <Router>
      <div>
        <h1 className = "title-header">Navigating the Taxonomic Ranks</h1>
        <div className="container">
          <Nav />
          <Route exact={true} path='/list/:rankName' component = {List}/>
        </div>
      </div>
    </Router>
  )
}

export default App
