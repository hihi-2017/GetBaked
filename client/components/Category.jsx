import React from 'react'
import {Link} from 'react-router-dom'

import recipes from "../../data/recipes"


const Category = () => {
    return (
      <div className="row recipe_list">
        {renderRecipes(recipes)}
      </div>
  )}

  const renderRecipes = (recipes) => {
    return recipes.map(renderRecipe)
  }

  const renderRecipe = (recipe) => {
    return (
      <div class="col-md-3">
         <h4 className="recipe-list-header">{`${recipe.recipe_name}`}</h4>
         <img className = "recipe-list-image" src={`${recipe.recipe_image_url}`}/>
      </div>
   )
  }

export default Category
