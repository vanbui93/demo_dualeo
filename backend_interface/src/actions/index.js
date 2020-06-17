import * as Types from './../constants/ActionType';
import callApi from './../ConnectAxios/apiCaller';

export const actGetProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
};

export const actDeleteProduct = (deleteId) => {
  return {
    type: Types.DELETE_PRODUCT,
    deleteId:deleteId
  }
};

export const actAddProduct = (itemObject) => {
  return {
    type: Types.ADD_PRODUCT,
    itemObject: itemObject
  }
};

export const actEditProduct = (itemObject) => {
  return {
    type: Types.EDIT_PRODUCT,
    itemObject: itemObject
  }
}

export const actUpdateProduct = (itemObject) => {
  return {
    type: Types.UPDATE_PRODUCT,
    itemObject
  }
}