import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Home from "./Home"
import Nav from "./Nav"
import Recipe_List from "./Recipe_List"
import Show_Recipe from './Show_Recipe'

const App = () => {
  return (
    <Router>
      <div className = "main-body">
        <h1 className="title-header"><Link to={"/"}>get baked</Link></h1>
        <Nav />
        <div className="container">
           <Route exact path="/" component={Home} />
           <Route exact path='/:category_name' component={Recipe_List} />
           <Route exact path='/:category_name/:recipe_id' component={Show_Recipe} />
        </div>
        <hr/>
        <h5 className ="footer"> Copyright &copy; Dueweke Codes {'2017'} </h5>
      </div>
    </Router>
  )
}

export default App
