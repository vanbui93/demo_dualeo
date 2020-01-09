import axios from 'axios';

// Đưa vào đây để lấy dữ liệu khi chỉnh sửa, còn việc hiển thị dữ liệu ra ngoài thì đã làm bên Product
const getProductData = () => axios.get('/getproduct').then((response) => response.data )
.catch((error) => { console.log(error.response); return Promise.reject(error.response)})


var redux = require('redux');

var noteInitialState = {
  isEdit : false
}

var allReducer = (state=noteInitialState, action) => {
  switch (action.type) {
    case "change_isEdit":
      return {...state,isEdit:!state.isEdit}
    default:
      return state;
  }  
}

var store1 = redux.createStore(allReducer);

store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
})

export default store1;