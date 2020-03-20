import * as Types from './../constants/ActionType';
import callApi from './../ConnectAxios/apiCaller';

export const actGetProductsRequest = () => {
  return (dispatch) => {
    return callApi('api/products','GET',null).then(res =>{
      dispatch(actGetProducts(res.data))
    });
  }
}

export const actGetProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}


//delete trên server rồi mới delete trong store (dispatch action trong store sau)
// có request thì gọi lên server, ko có request thì dùng dispatch để gọi
export const actDeleteProductRequest = (deleteId) => {
  return dispatch => {
    return callApi(`api/delete/${deleteId}`,'DELETE', null).then(res => {  
      dispatch(actDeleteProduct(deleteId));
    })
  }
}

export const actDeleteProduct = (deleteId) => {
  return {
    type: Types.DELETE_PRODUCT,
    deleteId:deleteId
  }
}


export const actAddProductRequest = (itemObject) => {
  return dispatch => {
    return callApi('api/add','POST', itemObject).then(res => {
      dispatch (actAddProduct(itemObject))
    })
  }
}

export const actAddProduct = (itemObject) => {
  return {
    type: Types.ADD_PRODUCT,
    itemObject: itemObject
  }
}