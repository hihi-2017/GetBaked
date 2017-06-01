import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Recipe_List extends React.Component {

  constructor(props){
    super(props)
    console.log(props);

    this.state = {
      category_id: props.match.params.id,
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
    let recipes = this.state.recipes.filter(recipe => recipe.category_id === this.state.category_id)
      return (
        <div className='recipe-list'>
          <h2 className = 'recipe-list-header'>{this.state.category_name}</h2>
            <hr/>
            { recipes..map((item, key) => {
              //make a recipe component
              return (
                <div className = 'col-md-3'>
                  <Link to={`${item.category_id}/${item.recipe_id}`}>
                    <img className= "recipe-list-image" src={item.recipe_image_url} />
                    <h3 className = 'recipe-list-title'>{item.recipe_name}</h3>
                  </Link>
                </div>
              )
            })}
        </div>
      )
    }
}
