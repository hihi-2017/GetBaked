import React from 'react'
import {Link} from 'react-router-dom'


const BakeOrNot = () => {
  return (
    <div className="row bake-or-not">
      <div className="col-md-5 to-bake">
        <h3> I can't decide! Choose a recipe for me!</h3>
      </div>
      <div className="col-md-5 not-to-bake">
        <h3>I didn't come here to bake. I came here to EAT.</h3>
      </div>
    </div>
)}


export default BakeOrNot
