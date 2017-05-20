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
          return <h3>{item.recipe_name}</h3>
        })}
    </div>
  )
}


export default Recipe_List
