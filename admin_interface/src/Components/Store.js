// var express = require('express');
// var router = express.Router();
import axios from 'axios';

// start connect API
// const { Client } = require('pg');
// const connectionString = 'postgres://sezfxvfd:fcfgYpLxTvIpKnsliDYq_NLqswImFHOl@john.db.elephantsql.com:5432/sezfxvfd'

// // Đưa vào đây để lấy dữ liệu khi chỉnh sửa, còn việc hiển thị dữ liệu ra ngoài thì đã làm bên Product
// const getProductData = () => axios.get('/getproduct').then((response) => response.data )
// .catch((error) => { console.log(error.response); return Promise.reject(error.response)})


var redux = require('redux');

var noteInitialState = {
  isEdit : false,
  editItem: {},
  isAdd: false,
  alertShow: false,
  AlertContent: '',
  AlertType: ''
}

var allReducer = (state=noteInitialState, action) => {
  switch (action.type) {
    case "change_isEdit":
      return {...state,isEdit:!state.isEdit}
    case "get_editData": // get_editData là để hiển thị data cần sửa ra form
      return {...state,editItem:action.editOject}
    case "edit_Object": //edit_Object là dữ liệu editItem sau khi sửa, mục đích gom dữ liệu lại để ghi đè lên get_editData

      return {...state}
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