import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditProduct from './EditProduct';

class ProductItem extends Component {
  
  chuyendoiUrl = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }


  onClickAction = () => {
    this.props.changeEditState();
    this.props.getEditData(this.props.productEdit)
  }
  render() {
    return (
      <tr>
        <td className="product-list-td-second">
          <div className="d-flex">
            <div className="table-cell--image m-0">
              <img className="box-image" src={this.props.product_image} alt=""/>
            </div>
            <div className="ml-3 align-self-center title-name">
              <div className="table-break-word text-primary ">
                <a href={"/edit_product/" + this.chuyendoiUrl(this.props.product_name)}>{this.props.product_name}</a>
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">{this.props.quantity}</td>
        <td className="text-normal">{this.props.type_product}</td>
        <td className="text-normal">{this.props.vendor}</td>
        <td>
          <div className="btn-group"><button className="btn btn-outline-info" onClick={() => this.onClickAction()}>Sửa</button><button className="btn btn-outline-secondary">Xóa</button></div>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditState: () => {
      dispatch({
        type: "change_isEdit"
      })
    },
    getEditData: (editOject) => {
      dispatch({
        type: "get_editData",editOject
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);