import React from 'react'
import {Link} from 'react-router-dom'

import categories from "../../data/categories"


const Home = () => {
  return (
    <div className="row category_list">
      <div className="home-banner row">
        <h3 className="banner-content">This week's favourite recipe...</h3>
      </div>
      {renderCategories(categories)}
    </div>
)}

const renderCategories = (categories) => {
  return categories.map(renderCategory)
}

const renderCategory = (category) => {
  return (
    <div className = "col-md-4 category_box">
       <h4 className="cat-header"><Link to={`/${category.category_name}`}>{category.category_name}</Link></h4>
       <img className = "cat-image" src={`${category.image_url}`}/>
    </div>
 )
}

export default Home
