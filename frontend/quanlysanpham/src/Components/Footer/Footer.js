import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="site-footer">
            <div className="footer-inner padding-top-35 pb-lg-5">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="footer-widget">
                      <h3 className="hastog"><span>Liên hệ</span></h3>
                      <ul className="list-menu list-showroom">		 						
                        <li><p>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức khỏe con người</p></li>
                        <li className="clearfix">
                          <i className="block_icon fa fa-map-marker" />
                          <p>268 Cầu Giấy, Quận Cầu Giấy, Hà Nội, Vietnam</p>
                        </li>
                        <li className="clearfix"><i className="block_icon fa fa-phone" />
                          <a href="tel:0912117494">0979814134</a>
                          <p>Thứ 2 - Chủ nhật: 9:00 - 18:00</p>
                        </li>
                        <li className="clearfix"><i className="block_icon fa fa-envelope" />
                          <a href="mailto:van.bt.38@gmail.com">van.bt.38@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="footer-widget">
                      <h3 className="hastog"><span>Danh mục</span></h3>
                      <ul className="list-menu list-blogs">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/collections/all">Sản phẩm</a></li>
                        <li><a href="/blogs/news">Tin tức</a></li>
                        <li><a href="/pages/about-us">Giới thiệu</a></li>
                        <li><a href="/pages/lien-he">Liên hệ</a></li>
                        <li><a href="/pages/preview">Demo Tùy chọn</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="footer-widget">
                      <h3 className="hastog"><span>Hỗ trợ khách hàng</span></h3>
                      <ul className="list-menu list-blogs">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/collections/all">Sản phẩm</a></li>
                        <li><a href="/blogs/news">Tin tức</a></li>
                        <li><a href="/pages/about-us">Giới thiệu</a></li>
                        <li><a href="/pages/lien-he">Liên hệ</a></li>
                        <li><a href="/pages/preview">Demo Tùy chọn</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="footer-widget">
                      <h3 className="margin-bottom-20 hastog"><span>Kết nối với Dualeo</span></h3>
                      <div className="list-menu">
                        <div id="fb-root" />
                        <div className="footerText">
                          <div className="fb-page" data-href="" data-height={230} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <div className="fb-xfbml-parse-ignore">
                              <blockquote cite="">
                                <a href="https://www.facebook.com/pg/thietkewebsitechuanseo19">Facebook</a>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright clearfix">
              <div className="container">
                <div className="inner clearfix">
                  <div className="row">
                    <div className="col-md-6 text-center text-lg-left">
                      <span>© Bản quyền thuộc về <b>Dualeo</b><b className="fixline">|</b> <a href="http://vanbui.info" target="_blank" rel="noopener noreferrer">Powered by Van Bui</a></span>
                    </div>
                    <div className="col-md-6 text-center text-lg-right hidden-xs">
                      <ul className="list-menu-footer">
                        <li><a href="/search">Tìm kiếm</a></li>
                        <li><a href="/pages/chinh-sach-doi-tra">Chính sách</a></li>
                        <li><a href="/pages/dieu-khoan-dich-vu">Điều khoản</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="back-to-top show">
                  <i className="fa fa-angle-up" />
                </div>
                <a href="tel:" className="suntory-alo-phone bottom-left suntory-alo-green " id="suntory-alo-phoneIcon">
                  <div className="suntory-alo-ph-img-circle"><i className="fa fa-phone" /></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
