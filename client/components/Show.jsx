import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import ranks from '../../data/ranks'

const Show = ({match}) => {
  var name = match.params.name
  var rank = match.params.rankName
  var data = ranks[rank]


    return (
      <div className="show">
        <h2>{name}</h2>
        <h4>{findName(data, name).description}</h4>
        <h5><Link to={`${match.url}/species`}>Show species</Link></h5>
      </div>
    )
  }

    function findName(data, name) {
      return data.find((item) => {
        return name == item.name
      })
    }


export default Show
