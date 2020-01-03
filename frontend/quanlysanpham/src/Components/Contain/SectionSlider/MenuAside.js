import React, { Component } from 'react'

export default class MenuAside extends Component {
  render() {
    return (
    <div className="col-md-3 col-md-pull-9 mt-5 hidden-xs aside-vetical-menu">
      <aside className="blog-aside aside-item sidebar-category">	
        <div className="aside-title text-center text-xl-left">
          <h2 className="title-head"><span>Danh mục</span></h2>
        </div>	
        <div className="aside-content">
          <div className="nav-category  navbar-toggleable-md">
            <ul className="nav navbar-pills">
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/hot-products">Rau tươi sạch</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/onsale">Thịt tươi sạch</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/frontpage">Hải sản tươi sống</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/hot-products">Hải sản nhập khẩu</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/onsale">Trái cây miền nam</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/all">Hoa quả sạch</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/all">Hàng nhập khẩu</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/all">Rau quả Đà Lạt</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/hot-products">Sản phẩm nổi bật</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/onsale">Sản phẩm khuyến mãi</a>
              </li>
              <li className="nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <a className="nav-link" href="/collections/all">Tất cả sản phẩm</a>
              </li>
              <li className="xemthem nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <button className="nav-link" onClick={() => this.setState({showSomething: true})}>Xem thêm</button>
              </li>
              <li className="thugon nav-item">
                <i className="fa fa-arrow-circle-right" aria-hidden="true" />
                <button className="nav-link" onClick={() => this.setState({showSomething: true})}>Thu gọn</button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
    )
  }
}
