import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Recipe_List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }
  componentDidMount() {
    this.getRecipeList()
  }
}

  getRecipeList() {
    api.getRecipes((error, recipes) => {
      if(error) {
        console.log(error)
      } else {
        this.setState({recipes})
      }
    })
  }


render() {
  return (
    <div className='recipe-list'>
      <h2 className = 'recipe-list-header'>{category_name}</h2>
      <hr/>
      {matches.map((item, key) => {
        return (
          <div className = 'col-md-3'>
            <img className="recipe-list-image" src={item.recipe_image_url} />
            <h3 className = 'recipe-list-title'><Link to={`${item.category_name}/${item.recipe_id}`}>{item.recipe_name}</Link></h3>
          </div>
        )
      })}
    </div>
    )
  }
