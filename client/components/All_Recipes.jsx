import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class All_Recipes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }
  componentDidMount() {
    this.getRecipeList()
  }

  getRecipeList() {
    api.getRecipes((recipes, error) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({recipes})
      }
    })
  }


    render() {
      return (
        <div className="recipe-list">

          <div>
            <h4 className="category-list-header">All Recipes</h4>
          </div>
          {this.state.recipes.map((recipe) => {
            return (
              <div className = "col-md-3">
                <Link to={`/${recipe.category_id}/${recipe.recipe_id}`}>
                  <img className = "recipe-list-image" src={`${recipe.recipe_image_url}`}/>
                  <h4 className="recipe-list-title">{recipe.recipe_name}</h4>
                </Link>
              </div>
            )
          })}
        </div>
        )
      }

  }
