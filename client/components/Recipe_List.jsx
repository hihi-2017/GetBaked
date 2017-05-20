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
      <h2>Recipes</h2>
        {matches.map((item, key) => {
          return (
            <div className = 'col-md-3'>
              <h3 className = 'recipe-list-title'>{item.recipe_name}</h3>
              <img className="recipe-list-image" src={item.recipe_image_url} />
            </div>
          )
        })}
    </div>
  )
}


export default Recipe_List
