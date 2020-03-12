import * as Types from './../constants/ActionType'
var initialState = {
  products: [],
  isEdit: false
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.CHANGE_EDIT:
      return {...state, isEdit: !state.isEdit};
    default:
      return state;
  }
}

export default products;