import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
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
              <Product/>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
