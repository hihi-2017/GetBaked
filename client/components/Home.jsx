import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategoryList } from '../action-creators'
import BakeOrNot from './BakeOrNot'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategoryList())
  }

  render () {
    console.log('PROPs in HOME', this.props)

    return (
      <div className='row category_list'>
        <div className='home-banner col-md-12'>
          <Link to='/2201/1'>
            <h3 className='banner-content'>RECIPE OF THE WEEK</h3>
          </Link>
        </div>
        <BakeOrNot />
        <hr className='new-hr' />
        <div>
          <h4 className='category-list-header'>Recipe Categories</h4>
        </div>
        {this.props.categories.map(category => {
          return (
            <div className='col-md-4 category_box'>
              <Link to={`/${category.id}`}>
                <img className='cat-image' src={`${category.image_url}`} />
                <h4 className='cat-header'>{category.category_name}</h4>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  // could adjuxt later
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategoryList: () => {
      dispatch(getCategoryList())
    }
  }
}

export default connect(mapStateToProps)(Home)
