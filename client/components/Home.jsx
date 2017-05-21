import React from 'react'
import {Link} from 'react-router-dom'

import BakeOrNot from "./BakeOrNot"
import categories from "../../data/categories"


const Home = () => {
  return (
    <div className="row category_list">
      <div className="home-banner col-md-12">
        <h3 className="banner-content">RECIPE OF THE WEEK</h3>
      </div>
      <BakeOrNot />
      <hr className= "new-hr"/>
      <div>
        <h4 className="category-list-header">Recipe Categories</h4>
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
