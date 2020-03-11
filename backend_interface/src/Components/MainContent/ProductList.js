import React, { Component } from 'react'
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import callApi from './../../ConnectAxios/apiCaller';
import { actGetProductsRequest } from './../../actions/index';
import products from './../../reducers/products';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state={
      id: '',
      products: []
    }
  }

  componentDidMount() {
    this.props.getAllProducts();
  } 
  
  handleDel = (deleteId) => {
    callApi(`api/delete/${deleteId}`,'DELETE', null)
    .then(res => {  
      // console.log(deleteId);
      this.setState(prevState => ({
          products: prevState.products.filter(elm => elm.id !== deleteId)
        }))
      })
    
  }

 // In dữ liệu trong api sau khi nhận được ra
 getDulieu = (products) => {
  var result =null;
  console.log(products);
  
  if(products.length > 0 ) {
    result = products.map((value,key) => {
      return (
        <ProductItem key={key}
        id={value.id}
        product_name={value.product_name}
        description={value.description}
        quantity={value.quantity}
        product_image={value.product_image}
        vendor={value.vendor}
        type_product={value.type_product}
        variant={value.variant}
        collection={value.collection}
        productEdit={value}
        handleDelete = {this.handleDel}
        />
      )
    })
  }
  return result;
}
  

  render() {
    var {products} = this.state // lấy state của product ra để truyền giá trị vào getDulieu    
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
                {this.getDulieu(products)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  
  
 


}

const mapStateToProps = (state, props) => {
  return {
    products: state.products  //lấy tất cả product từ store về gán cho product
  }
}


//Truyền lên product hiện tại trong trang lên store để lưu trữ
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllProducts: () => {
      dispatch(actGetProductsRequest())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);