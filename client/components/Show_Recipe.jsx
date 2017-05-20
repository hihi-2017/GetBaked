import React from 'react'
import {Link} from 'react-router-dom'

import recipes from "../../data/recipes"


const Show_Recipe = ({match}) => {
  const {recipe_id} = match.params
  const matches = recipes.filter(recipe => {
    return recipe.recipe_id === recipe_id
  })

  return (
    <div className='recipe-list'>
      <h2 className = 'recipe-list-header'>{category_name}</h2>
        <hr/>
        {matches.find((recipe) => {
          return (
            <div className = 'row'>
              <img className="recipe-image" src={recipe.recipe_image_url} />
              <h3 className = 'recipe-title'>{recipe.recipe_name}</h3>
              <h4 className = 'recipe-chef'>{recipe.recipe_chef}</h4>
            </div>
          )
        })}
    </div>
  )
}


export default Show_Recipe
