import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'


const List = props => {
  var rankName = props.match.params.rankName
  var data = ranks[rankName]

  console.log(rankName);
  console.log(data);

  return (
    <div className="list">
      <h2>{rankName}</h2>
      <ul>
        {data.map((item) => {
            return <li>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default List
