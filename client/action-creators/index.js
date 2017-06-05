const api = require('../api')

export function updateCategories (categories) {
  console.log('update')
  return {
    type: 'UPDATE_CATEGORIES',
    categories
  }
}

export function getCategoryList () {
  return function (dispatch) {
    console.log('getCategoryList')
    api.getCategories((categories, error) => {
      console.log('api fired')
      if (error) {
        console.log(error)
      } else {
        console.log('no error', dispatch)
        dispatch(updateCategories(categories))
      }
    })
  }
}
