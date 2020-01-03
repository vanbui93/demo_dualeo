import React, { Component } from 'react'

export default class Product extends Component {
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
        <td className="text-center">∞</td>
        <td className="text-normal">Khác</td>
        <td className="text-normal">htc</td>
        <td>
          <div className="btn-group"><button className="btn btn-outline-info">Sửa</button><button className="btn btn-outline-secondary">Xóa</button></div>
        </td>
      </tr>
    )
  }
}
