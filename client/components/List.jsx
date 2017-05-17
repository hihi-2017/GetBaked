import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'


const List = props => {
  var rankName = props.match.params.rankName
  var data = ranks[rankName]

  return (
    <div className="list">
      <h2>{rankName}</h2>
      <ul>
        {data.map((item) => {
            return <li><Link to={'/list/'+rankName + '/' + item.name}>{item.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default List
