import axios from 'axios';
// import productReducer from './ConnectSql/ConnectSql'

var redux = require('redux');

var initialState = {
  editStatus:true,
  data:null
}

var allReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Change_editState":
      return {...state,editStatus: !state.editStatus}
    case "Product_Print":
      return [...state,action.response]
    default:
      break;
  }
  return state;
}

var store1 = redux.createStore(allReducer);
store1.dispatch({type:"Change_editState"});
store1.dispatch({type:"get_dataProduct"});

console.log(store1.getState());

store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
})

export default store1;