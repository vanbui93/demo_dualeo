import * as Types from './../constants/ActionType'
var initialState = {
  products: [],
  isEdit: false
}

const products = (state = initialState, action) => {
  var deleteId = action.id;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      console.log(products);
      
    default:
      return state;
  }
}

export default products;