import React, { Component } from 'react'

export default class TopHead extends Component {
  render() {
    return (
      <div className="topbar hidden-sm hidden-xs">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-sm-6 col-md-9 a-left">
                <ul className="list-inline f-left">
                  <li>
                    <i className="fa fa-mobile"/> Hotline: <span><a href="callto:0912117494">0979814134</a></span>
                  </li>
                  <li className="margin-left-20">
                    <i className="fa fa-map-marker" /> <b>Địa chỉ</b>: 
                    <span>123 Cộng Hòa, Quận Tân Bình, Hồ Chí Minh, Vietnam
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3">
                <ul className="list-inline f-right">
                  <li>
                    <a data-toggle="modal" data-target="#dangnhap" href="/account/login"><i className="fa fa-user" /> Đăng nhập</a>
                  </li>
                  <li><span>hoặc</span></li>
                  <li><a data-toggle="modal" data-target="#dangky" href="/account/register">Đăng ký</a>
                  </li>
                  <li className="li-search hidden"><a href="javscrript:;">
                    <i className="fa fa-search" /></a>
                    <div className="dropdown topbar-dropdown hidden-md hidden-sm hidden-xs">
                      <div className="content a-center">										
                        <div className="header_search search_form">
                          <form className="input-group search-bar search_form" action="/search" method="get" role="search">		
                            <input type="search" name="q" defaultValue placeholder="Tìm sản phẩm" className="input-group-field st-default-search-input search-text" autoComplete="off" />
                            <input type="hidden" name="type" defaultValue="product" />
                            <span className="input-group-btn">
                              <button className="btn icon-fallback-text">
                                <i className="fa fa-search" />
                              </button>
                            </span>
                          </form>
                        </div>
                      </div>									
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
