import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home"
import Category from "./Category"

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="title-header">Get Baked</h1>
        <h3 className="title-byline"> Wellington Edition </h3>
        <div className="container">
           <Route exact path="/" component={Home} />
           <Route path='/:category_name' component={Category} />
        </div>
      </div>
    </Router>
  )
}

export default App
