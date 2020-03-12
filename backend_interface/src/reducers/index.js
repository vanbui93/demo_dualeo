// var express = require('express');
// var router = express.Router();
import { combineReducers } from 'redux';
import * as Types from './../constants/ActionType'
import products from './products'

var noteinitialState = {
  isEdit:false
}

const commonStore = (state = noteinitialState, action) => {
  switch (action.type) {
    case Types.CHANGE_EDIT:
      return {...state, isEdit: !state.isEdit};
    default:
      return {...state};
  }
}
const allReducer = combineReducers({
  products,
  commonStore
})



export default allReducer;