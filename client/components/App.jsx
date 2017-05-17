import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from "./Nav"
import List from "./List"
import Show from "./Show"


const App = () => {
  return (
    <Router>
      <div>
        <h1 className = "title-header">Navigating the Taxonomic Ranks</h1>
        <div className="container">
          <Nav />
          <Route exact={true} path='/list/:rankName' component = {List}/>
          <Route path = '/list/:rankName/:name' component={Show} />
        </div>
      </div>
    </Router>
  )
}

export default App
