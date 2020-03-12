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