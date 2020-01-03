import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="hidden-sm hidden-xs">
            <ul className="nav nav-left">
              <li className="nav-item active">
                <a href="/" className="nav-link">Trang chủ <i className="fa fa-angle-right" data-toggle="dropdown" /></a>			
                <ul className="dropdown-menu">
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=-1">Trang chủ kiểu 1</a>
                  </li>
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=1000418561">Trang chủ kiểu 2</a>
                  </li>
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=1000418576">Trang chủ kiểu 3</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item  has-mega">
                <a href="/collections/all" className="nav-link">Sản phẩm <i className="fa fa-angle-right" data-toggle="dropdown" /></a>			
                <div className="mega-content">
                  <div className="level0-wrapper2">
                    <div className="nav-block nav-block-center">
                      <ul className="level0">
                        <li className="level1 parent item"> <h2 className="h4"><a href="/collections/all"><span>Rau củ</span></a></h2> 
                          <ul className="level1">
                            <li className="level2"> <a href="/collections/all"><span>Rau củ sạch</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Rau củ Đà Lạt</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Rau củ nhập khẩu</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Rau củ theo mùa</span></a> </li>
                          </ul>
                        </li>
                        <li className="level1 parent item"> <h2 className="h4"><a href="/collections/all"><span>Hoa quả</span></a></h2> 
                          <ul className="level1">
                            <li className="level2"> <a href="/"><span>Hoa quả Úc</span></a> </li>
                            <li className="level2"> <a href="/"><span>Hoa quả Miền Nam</span></a> </li>
                            <li className="level2"> <a href="/"><span>Hoa quả theo mùa</span></a> </li>
                            <li className="level2"> <a href="/"><span>Hoa quả nhập khẩu</span></a> </li>
                          </ul>
                        </li>
                        <li className="level1 parent item"> <h2 className="h4"><a href="/collections/all"><span>Thịt</span></a></h2> 
                          <ul className="level1">
                            <li className="level2"> <a href="/collections/all"><span>Thịt bò mỹ</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Thịt đà điểu</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Thịt heo sạch</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Thịt các loại</span></a> </li>
                          </ul>
                        </li>
                        <li className="level1 parent item"> <h2 className="h4"><a href="/collections/all"><span>Hải sản</span></a></h2> 
                          <ul className="level1">
                            <li className="level2"> <a href="/collections/all"><span>Tôm hùm Alaska</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Tôm hùm Canada</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Kingcrab</span></a> </li>
                            <li className="level2"> <a href="/collections/all"><span>Hải sản trong nước</span></a> </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item "><a className="nav-link" href="/blogs/news">Tin tức</a></li>
              <li className="nav-item "><a className="nav-link" href="/pages/about-us">Giới thiệu</a></li>
              <li className="nav-item "><a className="nav-link" href="/pages/lien-he">Liên hệ</a></li>
              <li className="nav-item "><a className="nav-link" href="/pages/preview">Demo Tùy chọn</a></li>
            </ul>	
            <div className="menu-search f-right bbbbb">										
              <div className="header_search search_form">
                <form className="input-group search-bar search_form" action="/search" method="get" role="search">		
                  <input type="search" name="q" defaultValue placeholder="Tìm sản phẩm" className="input-group-field st-default-search-input search-text auto-search" autoComplete="off" />
                  <input type="hidden" name="type" defaultValue="product" />
                  <span className="input-group-btn">
                    <button className="btn icon-fallback-text">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </form>
                <div id="search_suggestion" style={{display: 'none'}}>
                  <div id="search_top">
                    <div id="product_results" />
                    <div id="article_results" />
                  </div>
                  <div id="search_bottom">
                    <a className="show_more" href="/">Hiển thị tất cả kết quả cho "<span />"</a>
                  </div>
                </div>
              </div>
            </div>	
          </div>
          <div className="hidden-lg hidden-md menu-offcanvas">
            <div className="head-menu clearfix">
              <ul className="list-inline">
                <li>
                  <a href="/account/login"><i className="fa fa-user" /> Đăng nhập</a>
                </li>
                <li><span>hoặc</span></li>
                <li><a href="/account/register">Đăng ký</a>						
                </li>
                <li className="li-search">
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
                </li>
              </ul>
              <div className="menuclose"><i className="fa fa-close" /></div>
            </div>
            <ul id="nav-mobile" className="nav hidden-md hidden-lg">
              <li className="h3">
                MENU
              </li>
              <li className="nav-item active">
                <a href="/" className="nav-link">Trang chủ <i className="fa faa fa-angle-right" /></a>
                <ul className="dropdown-menu">
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=-1">Trang chủ kiểu 1</a>
                  </li>
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=1000418561">Trang chủ kiểu 2</a>
                  </li>
                  <li className="nav-item-lv2">
                    <a className="nav-link" href="https://dualeo-x.myharavan.com/?themeid=1000418576">Trang chủ kiểu 3</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a href="/collections/all" className="nav-link">Sản phẩm <i className="fa faa fa-angle-right" /></a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu nav-item-lv2">
                    <a className="nav-link" href="/collections/all">Rau củ <i className="fa faa fa-angle-right" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Rau củ sạch</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Rau củ Đà Lạt</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Rau củ nhập khẩu</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Rau củ theo mùa</a>
                      </li>						
                    </ul>                      
                  </li>
                  <li className="dropdown-submenu nav-item-lv2">
                    <a className="nav-link" href="/collections/all">Hoa quả <i className="fa faa fa-angle-right" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/">Hoa quả Úc</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/">Hoa quả Miền Nam</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/">Hoa quả theo mùa</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/">Hoa quả nhập khẩu</a>
                      </li>						
                    </ul>                      
                  </li>
                  <li className="dropdown-submenu nav-item-lv2">
                    <a className="nav-link" href="/collections/all">Thịt <i className="fa faa fa-angle-right" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Thịt bò mỹ</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Thịt đà điểu</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Thịt heo sạch</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Thịt các loại</a>
                      </li>						
                    </ul>                      
                  </li>
                  <li className="dropdown-submenu nav-item-lv2">
                    <a className="nav-link" href="/collections/all">Hải sản <i className="fa faa fa-angle-right" /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Tôm hùm Alaska</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Tôm hùm Canada</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Kingcrab</a>
                      </li>						
                      <li className="nav-item-lv3">
                        <a className="nav-link" href="/collections/all">Hải sản trong nước</a>
                      </li>						
                    </ul>                      
                  </li>
                </ul>
              </li>
              <li className="nav-item "><a className="nav-link" href="/blogs/news">Tin tức</a></li>		
              <li className="nav-item "><a className="nav-link" href="/pages/about-us">Giới thiệu</a></li>		
              <li className="nav-item "><a className="nav-link" href="/pages/lien-he">Liên hệ</a></li>		
              <li className="nav-item "><a className="nav-link" href="/pages/preview">Demo Tùy chọn</a></li>		
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
