import React from 'react'
import {Link} from 'react-router-dom'

import recipes from "../../data/recipes"


const Show_Recipe = ({match}) => {
  const {recipe_id} = match.params
  const recipe_match = recipes.filter(recipe => {
    return recipe.recipe_id === recipe_id
  })

  return (
    <div className='container'>
      <h2>Hello</h2>
        {recipe_match.map((item, key) => {
          return (
            <div>
              <img className="recipe-image" src={item.recipe_image_url} />
              <h3 className = 'recipe-title'>{item.recipe_name}</h3>
              <h4 className = 'recipe-chef'>{item.recipe_chef}</h4>
            </div>
          )
        })}
    </div>
  )
}


export default Show_Recipe
