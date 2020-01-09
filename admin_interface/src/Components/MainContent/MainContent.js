import React, { Component } from 'react'
import ListProduct from './ListProduct';

export default class MainContent extends Component {
  render() {
    return (
      <main id="main_content" className="ui-main">
        <header className="ui-header">
          <div className="ui-top-bar max-width-center">
            <div className="col">
              <div className="breadcrumb-block--main-temp">
                <ul>
                  <li>Danh sách sản phẩm</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="wrapper-block">
          <div className="max-width-center header-tab--block">
            <div className="header-nav-tab ui---header-nav-tab ui-header-menu--collapse">
              <ul className="d-flex">
                <li className="d-flex active">
                  <div className="header-nav-tab__name--first header-nav-tab__name false"><span className="tab-name-info">Tất cả sản phẩm</span></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="ui-title-bar-container max-width-center">
            <div className="row no-gutters">
              <div className="col">
                <div className="row no-gutters">
                  <div className="col-auto pr-3">
                    <div className="filter-options__childrent__dropdown__menu">
                      <span className="ml-3 d-none d-sm-inline-block">Thêm điều kiện lọc</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="next-input--stylized">
                      <input className="next-input next-input--invisible" placeholder="Tìm kiếm" step={1} defaultValue />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto pl-0">
                <button className="btn btn-primary fix-height--button ml-2">
                  <span className="ml-3 d-none d-sm-inline-block">Tạo sản phẩm</span>
                </button>
              </div>
            </div>
          </div>
          <ListProduct/>
        </div>
      </main>
    )
  }
}
