import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Show_Recipe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipe_id: props.match.params.recipe_id,
      recipes: []
    }
  }

  componentDidMount() {
    this.getRecipeList()
  }

  getRecipeList() {
    api.getRecipes((recipes, error)=>{
      if(error) {
        console.log(error);
      } else {
        this.setState({recipes})
      }
    })
  }

  render() {
      return (
        <div className='recipe-list'>
            <hr/>
            {this.state.recipes.filter(recipe => {
              return recipe.recipe_id === Number(this.state.recipe_id)
              }).map((item, key) => {
              return (
                <div className="recipe-box">
                  <h2 className = 'recipe-title'>{item.recipe_name}</h2>
                  <img className ="recipe-image" src={item.recipe_image_url} />
                  <h3 className = 'recipe-chef'>By: {item.chef_name}</h3>
                  <div className="method-box">
                    <h4>Ingredients:</h4>
                      <p className = "recipe-text">
                        {item.recipe_ingredients}
                      </p>
                    <h4>Method:</h4>
                      <p className = "recipe-text">
                        {item.recipe_method}
                      </p>
                    <h4>Comments:</h4>
                      <p className = "recipe-text">
                        {item.recipe_comments}
                      </p>
                    </div>
                </div>
              )
            })}
        </div>
      )
    }
  }
