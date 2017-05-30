import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Add_Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        recipe_id: '',
        category_name: '',
        category_id: '',
        recipe_name: '',
        chef_name: '',
        recipe_image_url: '',
        recipe_ingredients: '',
        recipe_method: '',
        recipe_comments: ''
      }
    }
  }

  handleChange(e) {
    let recipe = this.state.recipe
    recipe[e.target.name] = e.target.value
    this.setState({recipe})
  }

  handleSubmit(e) {
    e.preventDefault()
    api.addNewRecipe(this.state.recipe, (err) => {
      if (!err) console.log("recipe added");
    })
    console.log(this.state.recipe);
  }


  render() {
    return (
      <div className="container">
        <h1 className="form-header">Add Recipe</h1>
        <div className= "recipe-form">

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Select Recipe Category</label>
            <p>
              <select className="drop-menu" name="category_name" value={this.state.category_name} onChange={(e =>this.handleChange(e))}>
                 <option value="Cakes and Tortes">Cakes and Tortes</option>
                 <option value="Pies, Crumbles, and Tarts">Pies, Crumbles, and Tarts</option>
                 <option value="Cookies and Bars">Cookies and Bars</option>
                 <option value="Custard, Mousse, and Pudding">Custard, Mousse, and Pudding</option>
                 <option value="Candy and Confectioneries">Candy and Confectioneries</option>
                 <option value="Bread">Bread</option>
                 <option value="Muffins and Breakfast Pastries">Muffins and Breakfast Pastries</option>
                 <option value="Ice Cream and Frozen Desserts">Ice Cream and Frozen Desserts</option>
                 <option value="Frosting, Glazes, and Sauces">Frosting, Glazes, and Sauces</option>
             </select>
            </p>
            <label>Recipe Name</label>
              <input type='text' name='recipe_name' value={this.state.recipe_name} onChange={(e =>this.handleChange(e))} />
            <label>Chef's Name</label>
              <input type='text' name='chef_name' value={this.state.chef_name} onChange={(e =>this.handleChange(e))} />
            <label>Recipe Image URL</label>                <input type='text' name='recipe_image_url' value={this.state.recipe_image_url} onChange={(e =>this.handleChange(e))}/>
            <label>Ingredients</label>
              <textarea name='recipe_ingredients' value={this.state.recipe_ingredients} onChange={(e =>this.handleChange(e))} />
            <label>Recipe Method</label>
              <textarea name='recipe_method' value={this.state.recipe_method} onChange={(e =>this.handleChange(e))} />
            <label>Comments</label>
              <textarea name='recipe_comments' value={this.state.recipe_comment} onChange={(e) => this.handleChange(e)} />
              <input type='submit' value='submit' />
          </form>


        </div>
      </div>
    )
  }
}
