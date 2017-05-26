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
    api.getRecipes((error, recipes)=>{
      if(error) {
        console.log(error);
      } else {
        this.setState({recipes})
      }
    })
  }

  render() {
    console.log(this.state);
      return (
        <div className='recipe-list'>
            <hr/>
            {this.state.recipes.filter(recipe => {
              return recipe.recipe_id === Number(this.state.recipe_id)
              }).map((item, key) => {
              return (
                <div>
                  <h2 className = 'recipe-title'>{item.recipe_name}</h2>
                  <img className ="recipe-image" src={item.recipe_image_url} />
                  <h4 className = 'recipe-chef'>By: {item.chef_name}</h4>
                  <h5>Ingredients:</h5>
                  <p>
                    {item.recipe_ingredients}
                  </p>
                  <h5>Method:</h5>
                  <p>
                    {item.recipe_method}
                  </p>
                  <h5>Comments:</h5>
                  <p>
                    {item.recipe_comments}
                  </p>
                </div>
              )
            })}
        </div>
      )
    }
  }
