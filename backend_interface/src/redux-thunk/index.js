import callApi from './../ConnectAxios/apiCaller';
import {
  actGetProducts,
  actDeleteProduct,
  actAddProduct,
  actEditProduct,
  actUpdateProduct,
} from './../actions/index';

export const actGetProductsRequest = () => {
  return (dispatch) => {
    return callApi('api/products', 'GET', null).then(res => {
      dispatch(actGetProducts(res.data))
    });
  }
}

//delete trên server rồi mới delete trong store (dispatch action trong store sau)
// có request thì gọi lên server, ko có request thì dùng dispatch để gọi
export const actDeleteProductRequest = (deleteId) => {
  return dispatch => {
    return callApi(`api/delete/${deleteId}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(deleteId));
    })
  }
}


export const actAddProductRequest = (itemObject) => {
  return dispatch => {
    return callApi('api/add', 'POST', itemObject).then(res => {
      dispatch(actAddProduct(itemObject))
    })
  }
}

//lấy itemEditing hiển thị ra form sửa
export const actGetEditProductRequest = (updateId) => {
  return dispatch => {
    return callApi(`api/products/${updateId}`, 'GET', null).then(res => {
      dispatch(actEditProduct(res.data[0]))
    })
  }
}

//Tiến hành update ở store
export const actUpdateProductRequest = (itemObject) => {
  return dispatch => {
    return callApi(`api/products/${itemObject.id}`, 'PUT', itemObject).then(res => {
      dispatch(actUpdateProduct(res.data[0]))
    });
  }
};