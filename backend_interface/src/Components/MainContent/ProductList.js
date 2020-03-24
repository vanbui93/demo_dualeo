import React, { Component } from 'react'
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import callApi from './../../ConnectAxios/apiCaller';
import { actGetProductsRequest,actDeleteProductRequest } from './../../actions/index';
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
    this.setState({
      products: this.props.getAllProducts()
    })
  }
  
  handleDel = (deleteId) => {
    this.props.handleDeleteProduct(deleteId)
    // callApi(`api/delete/${deleteId}`,'DELETE', null)
    // .then(res => {  
    //   // console.log(deleteId);
    //   this.setState(prevState => ({
    //       products: prevState.products.filter(elm => elm.id !== deleteId)
    //     }))
    //   })
  }

 // In dữ liệu trong api sau khi nhận được ra
 getDulieu = (products) => {
 var result =null;
  if(this.props.products.length > 0 ) {
    result = this.props.products.map((value,key) => {
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
        products = {this.props.products}
        />
      )
    })
  }
  return result;
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
                {this.getDulieu(products)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    products: state.products  //lấy tất cả product từ store về gán cho product
  }
}


//Truyền lên product hiện tại trong trang lên store để lưu trữ
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllProducts: () => {
      dispatch(actGetProductsRequest())
    },
    handleDeleteProduct : (id) => {
      dispatch(actDeleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);