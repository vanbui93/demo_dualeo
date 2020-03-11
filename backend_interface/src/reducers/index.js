// var express = require('express');
// var router = express.Router();
import { combineReducers } from 'redux';
import products from './products'
var redux = require('redux');

const allReducer = combineReducers({
  products
})

var store1 = redux.createStore(allReducer);

store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
})

export default store1;