import * as Types from './../constants/ActionType'
var initialState = {
  products: [],
  isEdit: false
}

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((products, index) => {
    if( products.id === id) {
      return result = index;
    }
  });
  return result;
}

const products = (state = initialState, action) => {
  var index = -1;
  var {deleteId} = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state,deleteId);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
}

export default products;