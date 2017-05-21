import React from 'react'
import {Link} from 'react-router-dom'

import recipes from "../../data/recipes"


const Recipe_List = ({match}) => {
  const {category_name} = match.params
  const matches = recipes.filter(recipe => {
    return recipe.category_name === category_name
  })

  return (
    <div className='recipe-list'>
      <h2 className = 'recipe-list-header'>{category_name}</h2>
        <hr/>
        {matches.map((item, key) => {
          return (
            <div className = 'col-md-3'>
              <img className="recipe-list-image" src={item.recipe_image_url} />
              <h3 className = 'recipe-list-title'><Link to={`${item.category_name}/${item.recipe_id}`}>{item.recipe_name}</Link></h3>
            </div>
          )
        })}
    </div>
  )
}


export default Recipe_List
