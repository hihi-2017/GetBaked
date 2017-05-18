import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import Category from "./Category"

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="title-header">Get Baked</h1>
        <h5 className="title-byline"> Wellington Edition </h5>
        <div className="container">
           <Route exact path="/" component={Home} />
           <Route exact path='/:category_name' component={Category} />
        </div>
      </div>
    </Router>
  )
}

export default App
