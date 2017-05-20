import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import Category from "./Category"

const App = () => {
  return (
    <Router>
      <div className = "main-body">
        <h1 className="title-header">get baked</h1>
        <hr/>
        <div className="container">
           <Route exact path="/" component={Home} />
           <Route exact path='/:category_name' component={Category} />
        </div>
        <hr/>
        <h5 className ="footer"> Copyright &copy; Dueweke Codes {'2017'} </h5>
      </div>
    </Router>
  )
}

export default App
