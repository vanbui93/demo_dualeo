// var express = require('express');
// var router = express.Router();
import axios from 'axios';

// start connect API
// const { Client } = require('pg');
// const connectionString = 'postgres://sezfxvfd:fcfgYpLxTvIpKnsliDYq_NLqswImFHOl@john.db.elephantsql.com:5432/sezfxvfd'

// Đưa vào đây để lấy dữ liệu khi chỉnh sửa, còn việc hiển thị dữ liệu ra ngoài thì đã làm bên Product

var redux = require('redux');

var noteInitialState = {
  isEdit : false,
  editItem: {},
  getItem: {},
  isAdd: false,
  alertShow: false,
  AlertContent: '',
  AlertType: '',
  products: []
}


var allReducer = (state=noteInitialState, action) => {
  switch (action.type) {
    case "change_isEdit":
      return {...state,isEdit:!state.isEdit}
    case "GET_EDIT_DATA": // GET_EDIT_DATA là để hiển thị data cần sửa ra form
      return {...state,editItem:action.editOject}
    case "EDIT_DATA": //EDIT_DATA là dữ liệu editItem sau khi sửa, mục đích gom dữ liệu lại để ghi đè lên GET_EDIT_DATA
    //update dữ liệu vào Sql
      return {...state, editItem:{}}
    case "ALERT_ON":
      return {...state,alertShow:true,AlertContent:action.alertContent,AlertType:action.alertType}
    case "ALERT_OFF":
      return {...state,alertShow:false}
    default:
      return state;
  }  
}

var store1 = redux.createStore(allReducer);

store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
})

export default store1;