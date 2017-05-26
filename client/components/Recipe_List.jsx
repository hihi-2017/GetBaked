import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Recipe_List extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      category_name: props.match.params.category_name,
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
      return (
        <div className='recipe-list'>
          <h2 className = 'recipe-list-header'>{this.state.category_name}</h2>
            <hr/>
            {this.state.recipes.filter(recipe => {
              return recipe.category_name === this.state.category_name
              }).map((item, key) => {
              return (
                <div className = 'col-md-3'>
                  <Link to={`${item.category_name}/${item.recipe_id}`}>
                    <img className="recipe-list-image" src={item.recipe_image_url} />
                    <h3 className = 'recipe-list-title'>{item.recipe_name}</h3>
                  </Link>
                </div>
              )
            })}
        </div>
      )
    }
}
