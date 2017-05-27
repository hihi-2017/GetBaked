import React from 'react'
import {Link} from 'react-router-dom'

import BakeOrNot from "./BakeOrNot"

import * as api from '../api'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    this.getCategoryList()
  }

  getCategoryList() {
    api.getCategories((error, categories) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({categories})
      }
    })
  }


    render() {
      return (
        <div className="row category_list">
          <div className="home-banner col-md-12">
            <Link to='/Cakes%20and%20Tortes/1'>
              <h3 className="banner-content">RECIPE OF THE WEEK</h3>
            </Link>
          </div>
          <BakeOrNot />
          <hr className= "new-hr"/>
          <div>
            <h4 className="category-list-header">Recipe Categories</h4>
          </div>
          {this.state.categories.map((category) => {
            return (
              <div className = "col-md-4 category_box">
                <Link to={`/${category.id}`}>
                  <img className = "cat-image" src={`${category.image_url}`}/>
                  <h4 className="cat-header">{category.category_name}</h4>
                </Link>
              </div>
            )
          })}
        </div>
        )
      }

  }
