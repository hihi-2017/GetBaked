import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="navbar">
        <Link to={'./'}>Home</Link>
        <Link to={'#'}>About</Link>
        <Link to={'#'}>All Recipes</Link>
        <Link to={'#'}>Contact</Link>
    </div>
)}


export default Nav
