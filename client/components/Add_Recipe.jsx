import React from 'react'
import {Link} from 'react-router-dom'


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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.saveCallback(this.state)
    this.setState({
      recipe_id: '',
      category_name: '',
      category_id: '',
      recipe_name: '',
      chef_name: '',
      recipe_image_url: '',
      recipe_ingredients: '',
      recipe_method: '',
      recipe_comments: ''})
    }

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <input type='text' name='recipe_name' value={this.state.recipe_name} onChange={this.handleChange.bind(this)} />
          <input type='text' name='chef_name' value={this.state.chef_name} onChange={this.handleChange.bind(this)} />
          <input name='recipe_image_url' value={this.state.recipe_image_url} onChange={this.handleChange.bind(this)} />
          <input name='recipe_ingredients' value={this.state.recipe_ingredients} onChange={this.handleChange.bind(this)} />
          <input name='recipe_method' value={this.state.recipe_method} onChange={this.handleChange.bind(this)} />
          <input name='recipe_comments' value={this.state.recipe_comment} onChange={this.handleChange.bind(this)} />
          <input type='submit' value='Save' />
        </form>
      </div>
    )
  }
}
