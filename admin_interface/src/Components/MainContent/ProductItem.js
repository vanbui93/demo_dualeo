import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductItem extends Component {
  onClickAction = () => {
    // this.props.changeEditState()
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
                <a href="/">{this.props.product_name}</a>
              </div>
            </div>
          </div>
        </td>
        <td className="text-center">{this.props.quantity}</td>
        <td className="text-normal">{this.props.type_product}</td>
        <td className="text-normal">{this.props.vendor}</td>
        <td>
          <div className="btn-group"><button className="btn btn-outline-info" onClick={() => this.props.changeEditState()}>Sửa</button><button className="btn btn-outline-secondary">Xóa</button></div>
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);