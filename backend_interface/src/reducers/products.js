import * as Types from './../constants/ActionType'
var initialState = [];

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((itemObject, index) => {
      if (itemObject.id === id) {
          result = index;
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
      state = state.filter(({ id }) => id !== deleteId);
      // index = findIndex(state, deleteId)
      // state.splice(index,1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.itemObject);
      return [...state];
    case Types.UPDATE_PRODUCT:
      // state = state.map(elm => elm.id === itemObject.id ? 
      //   { ...elm, ...action } : elm
      // );
      index = findIndex(state, itemObject.id);
      state[index] = itemObject;
      return [...state];
    default:
      return [...state];
  }
}

export default products;