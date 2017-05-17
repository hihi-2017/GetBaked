import React from 'react'
import {Link} from 'react-router-dom'

import ranks from '../../data/ranks'


const Nav = () => {
  return (
    <div className="nav">
      <h2> Categories </h2>
      <ul>
        {Object.keys(ranks).map((rankName) => {
          return <li><Link to ={'/list/'+rankName}>{rankName}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Nav
