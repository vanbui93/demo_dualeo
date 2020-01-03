var redux = require('redux');

var oldState = {
  num: ["man hinh", "chuot", "bàn phím"],
  editStatus:true
}
var reduder1 = (state=oldState, action) => {
  switch (action.type) {
    case "Change_editState":
      return {...state,editStatus: !state.editStatus}
      default:
        break;
  } 
  return state;
}
var store1 = redux.createStore(reduder1)
store1.dispatch({type:"Change_editState"})
console.log(store1.getState());