import React from 'react'
import {Link} from 'react-router-dom'
import Ranks from '../../data/ranks'


const Nav = () => {
  return (
    <div className="nav">
      <h2> Nav </h2>
      <ul>
        {Object.keys(Ranks).map((rankName) => {
          return <li><Link to ={'/list/'+rankName}>{rankName}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Nav
