import React from 'react'
import {Link} from 'react-router-dom'


const BakeOrNot = () => {
  return (
    <div className="row bake-or-not">
      <div className="col-md-5 to-bake">
        <h3> I can't decide! </h3>
        <h4>Choose a recipe for me.</h4>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-5 not-to-bake">
        <h3>I didn't come here to bake.</h3>
          <h4><span>I came here to </span><span className="underline">EAT.</span></h4>
      </div>
    </div>
)}


export default BakeOrNot
