import React from 'react'

import * as api from '../api'


export default class Add_Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("submit " + this.state.recipe_name);
    api.saveRecipe(this.state, (err) => {
      if (!err) console.log("Recipe saved to DB");
      })
    }

  render() {
    return (
      <div className="container">
        <h1 className="form-header">Add Recipe</h1>
        <div className= "recipe-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <select class="drop-menu" name="category_id" value={this.state.category_name} onChange={this.handleChange.bind(this)}>
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
            <input type='text' placeholder="Recipe Name" name='recipe_name' value={this.state.recipe_name} onChange={(e) => this.handleChange(e)} />
            <input type='text' placeholder="Chef's Name" name='chef_name' value={this.state.chef_name} onChange={(e) => this.handleChange(e)} />
            <input type='text' placeholder="Recipe Image URL" name='recipe_image_url' value={this.state.recipe_image_url} onChange={(e) => this.handleChange(e)} />
            <textarea placeholder="Ingredients" name='recipe_ingredients' value={this.state.recipe_ingredients} onChange={(e) => this.handleChange(e)} />
            <textarea placeholder="Recipe Method" name='recipe_method' value={this.state.recipe_method} onChange={(e) => this.handleChange(e)} />
            <textarea placeholder="Recipe Comments" name='recipe_comments' value={this.state.recipe_comment} onChange={(e) => this.handleChange(e)} />
            <input type='submit' value='submit' />
          </form>
        </div>
      </div>
    )
  }
}
