import React, { Component } from 'react'

export default class ContentHead extends Component {
  render() {
    return (
      <div className="container">
        <div className="header-content clearfix a-center">
          <div className="row">
            <div className="col-xs-12 col-md-3 text-lg-left">
              <div className="logo inline-block">
                <a href="/" className="logo-wrapper ">
                <img src="/assets/images/logo232x58.png" alt="Giao diện dưa leo - Powered by VanBui"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-7 hidden-xs">
              <div className="policy d-flex justify-content-around">
                <div className="item-policy d-flex align-items-center">
                  <a href="/">
                    <img src="/assets/images/policy1.png" alt="Giao diện dưa leo - Powered by VanBui" />
                  </a>
                  <div className="info a-left">
                    <a href="/">Miễn phí vận chuyển</a>
                    <p>Bán kính 100 km</p>
                  </div>
                </div>	
                <div className="item-policy d-flex align-items-center">
                  <a href="/">
                    <img src="/assets/images/policy2.png" alt="Giao diện dưa leo - Powered by VanBui" />
                  </a>
                  <div className="info a-left">
                    <a href="/">Hỗ trợ 24/7</a>
                    <p>Hotline: <a href="callto:19001009"> 0979814134</a></p>
                  </div>
                </div>	
                <div className="item-policy d-flex align-items-center">
                  <a href="/">
                    <img src="/assets/images/policy3.png" alt="Giao diện dưa leo - Powered by VanBui" />
                  </a>
                  <div className="info a-left">
                    <a href="/">Giờ làm việc</a>
                    <p>T2 - T7 Giờ hành chính</p>
                  </div>
                </div>	
              </div>
            </div>
            <div className="col-xs-12 col-md-1 col-lg-2 hidden-sm hidden-xs">
              <div className="top-cart-contain f-right ">
                <div className="mini-cart text-xs-center">
                  <div className="heading-cart">
                    <a href="/cart">
                      <div className="icon f-left relative">
                        <i className="fa fa-shopping-bag" />
                        <span className="cartCount count_item_pr hidden-lg" id="cart-total">0</span>
                      </div>
                      <div className="right-content hidden-md">
                        <span className="label">Giỏ hàng</span>
                        (<span className="cartCount2">0</span>)
                      </div>
                    </a>
                  </div>
                  <div className="top-cart-content">
                    <ul id="cart-sidebar" className="mini-products-list count_li"><div className="no-item"><p>Không có sản phẩm nào trong giỏ hàng.</p></div></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
