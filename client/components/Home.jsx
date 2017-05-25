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
        console.log(error)
      } else {
        this.setState({categories})
      }
    })
  }


    render() {
      return (
        <div className="row category_list">
          <div className="home-banner col-md-12">
            <h3 className="banner-content">RECIPE OF THE WEEK</h3>
          </div>
          <BakeOrNot />
          <hr className= "new-hr"/>
          <div>
            <h4 className="category-list-header">Recipe Categories and Cats!</h4>
          </div>
          {this.state.categories.map((category) => {
            return (
              <div className = "col-md-4 category_box">
                <h4 className="cat-header"><Link to={`/${category.category_name}`}>{category.category_name}</Link></h4>
                <img className = "cat-image" src={`${category.image_url}`}/>
              </div>
            )
          })}
        </div>
        )
      }

  }
