import * as Types from './../constants/ActionType'
var initialState = {
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
  var {deleteId, itemObject} = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, deleteId);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.itemObject);
      return [...state];
    case Types.UPDATE_PRODUCT:
      index = findIndex(state, itemObject.id)
      state[index] = itemObject;
      return [...state];
    default:
      return state;
  }
}

export default products;