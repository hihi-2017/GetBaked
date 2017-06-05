const categoriesReducer = (state = [], action) => {
  console.log('categories reducer', action)

  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      console.log('categories', action.categories)
      return action.categories

    default:
      console.log('categories reducer fired')

      return state
  }
}

export default categoriesReducer

// { type: 'SOME_STRING', categories: []}
