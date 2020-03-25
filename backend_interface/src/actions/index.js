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

//lấy itemEditing hiển thị ra form sửa
export const actGetEditProductRequest = (updateId) => {
  return dispatch => {
    return callApi(`api/products/${updateId}`,'GET',null).then(res =>{
      dispatch (actEditProduct(res.data))
    })
    }
}
export const actEditProduct = (itemObject) => {
  return {
    type: Types.EDIT_PRODUCT,
    itemObject: itemObject
  }
}

//Tiến hành update ở store
export const actUpdateProductRequest = (itemObject) => {
  return dispatch => {
    return callApi(`api/edit/${itemObject.id}`,'PUT', itemObject).then(res => {
      dispatch (actUpdateProduct(res.data))
    });
  }
}
export const actUpdateProduct = (itemObject) => {
  return {
    type: Types.UPDATE_PRODUCT,
    itemObject: itemObject
  }
}