import React, { Component } from 'react'
import axios from 'axios';

// get data product from postgres
const numInitialState = () => axios.get('/getproduct').then((response) => response.data)
.catch((error) => { console.log(error.response); return Promise.reject(error.response)})

const productReducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "Product_Print":
      return [...state,action.response]
    default:
      return state
  }
}

export default productReducer;