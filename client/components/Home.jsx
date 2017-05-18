import React from 'react'
import {Link} from 'react-router-dom'

import categories from "../../data/categories"


const Home = () => {
  return (
      <div className="row category_list">
        {categories.map((item) => {
               return (
                 <div className = "col-md-4">
                    <h3 className="cat-header">{item.category_name}</h3>
                    <img className = "cat-image" src='{item.image_url}' />
                 </div>
              )
             })}
      </div>
  )
}

export default Home
