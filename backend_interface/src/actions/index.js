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
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi(`api/delete/${id}`,'DELETE', null).then(res => {  
      dispatch(actDeleteProduct(id));
    })
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id:id
  }
}
