// var express = require('express');
// var router = express.Router();
import { combineReducers } from 'redux';
import products from './products'
import itemEditing from './itemEditing';

const allReducer = combineReducers({
  products,
  itemEditing
})



export default allReducer;