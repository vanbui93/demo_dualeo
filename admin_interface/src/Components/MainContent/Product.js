import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';

// get data product from postgres
const getProductData = () => axios.get('/getproduct').then((response) => response.data)
.catch((error) => { console.log(error.response); return Promise.reject(error.response)})

class Product extends Component {

  constructor(props) {
    super(props);
    this.state={
      data: null
    }
  }

  UNSAFE_componentWillMount() {
    getProductData().then((res) =>{
      this.setState({
        data:res
      })
    })
  }

  // In dữ liệu trong api sau khi nhận được ra
  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((value,key) => (
        <ProductItem key={key}
        product_name={value.product_name}
        description={value.description}
        quantity={value.quantity}
        product_image={value.product_image}
        product_link={value.product_link}
        vendor={value.vendor}
        type_product={value.type_product}
        variant={value.variant}
        collection={value.collection}
        />
      ))
    } 
  }

  render() {
    return (
      <tbody>
        {this.printData()}
      </tbody>
    )
  }
}

export default Product;