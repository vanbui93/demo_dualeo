import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

// get data product from postgres
const getProductData = () => axios.get('/getproduct').then((response) => response.data)
.catch((error) => { console.log(error.response); return Promise.reject(error.response)})


class ProductList extends Component {
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
  getDulieu = () => {
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
        productEdit={value}
        />
      ))
    } 
  }
  showForm = () => {
    console.log("hihi do cho");
    
  }
  render() {
    return (
      <div className="padding-container">
        <div className="table-list-product-list">
          <div className="ui-table-listing-container">
            <table className="ui-table">
              <thead>
                <tr>
                  <th className="table-header--name-pic-incl cursor-pointer"><span>Tên sản phẩm</span></th>
                  <th className="table-header--inventory"><span id="cspot-products-khadung">Khả dụng</span></th>
                  <th className="table-header--status"><span>Loại</span></th>
                  <th className="table-header--name"><span>Nơi xuất xứ</span></th>
                  <th className="table-header--edit"><span>Chỉnh sửa sản phẩm</span></th>
                </tr>
              </thead>
              <tbody>
                {this.getDulieu()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditState: () => {
      dispatch({
        type: "change_isEdit"
      })
    }
  }
}

export default connect(mapDispatchToProps)(ProductList);