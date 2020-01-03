import React, { Component } from 'react'

export default class Section6 extends Component {
  render() {
    return (
    <div className="section section-collection section-collection-1">
      <div className="container">
        <div className="collection-border">
          <div className="collection-main">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="e-tabs ajax-tab-1" data-section="ajax-tab-1" data-view="owl-1">
                  <div className="section-title">
                    <h2>THỰC PHẨM KHÔ</h2>
                  </div>
                  <ul className="tabs tabs-title ajax clearfix hidden-xs">
                    <li className="tab-link has-content" data-tab="tab-1" data-url="/collections/hot-products">Trái cây sấy trong nước</li>
                    <li className="tab-link has-content" data-tab="tab-2" data-url="/collections/onsale">Trái cây sấy nhập khẩu</li>
                    <li className="tab-link has-content" data-tab="tab-3" data-url="/collections/frontpage">Trái cây sấy theo mùa</li>
                  </ul>
                  <div>
                    <div className="tab-1 tab-content">
                      <div className="products products-view-grid owl-carousel" data-lgg-items="4" data-lg-items='4' data-md-items='4' data-sm-items='3' data-xs-items="2" data-xss-items="2" data-nav="true">
                      {/* start item */}
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/mit-say">
                              <img src="/assets/images/products/mit-say.jpg" alt="mit-say" />
                            </a>
                            <div className="sale-flash"><div className="before" />- 15% </div>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/mit-say" data-handle="mit-say" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/mit-say">Mít sấy</a></h3>
                            <div className="price-box clearfix">Liên hệ</div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/nhan-say-kho">
                              <img src="/assets/images/products/nhan-say-kho.png" alt="nhan-say-kho" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/nhan-say-kho" data-handle="nhan-say-kho" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/nhan-say-kho">Nhãn sấy khô</a></h3>
                            <div className="price-box clearfix">
                              165,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/xoai-say-kho">
                              <img src="/assets/images/products/xoai-say-kho.png" alt="xoai-say-kho" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/xoai-say-kho" data-handle="xoai-say-kho" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/xoai-say-kho">Xòa sấy khô</a></h3>
                            <div className="price-box clearfix">
                              300,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/trai-cay-thap-cam">
                              <img src="/assets/images/products/trai-cay-thap-cam.jpg" alt="trai-cay-thap-cam" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/trai-cay-thap-cam" data-handle="trai-cay-thap-cam" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/trai-cay-thap-cam">Trái cây thập cẩm</a></h3>
                            <div className="price-box clearfix">
                              300,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/tao-say-kho">
                              <img src="/assets/images/products/tao-say-kho.jpg" alt="tao-say-kho" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/cherry-do-canada-loai-to-15" data-handle="cherry-do-canada-loai-to-15" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/cherry-do-canada-loai-to-16">Táo mỹ sấy khô</a></h3>
                            <div className="price-box clearfix">
                              450,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      </div>
                    </div>
                    <div className="tab-2 tab-content">
                      <div className="products products-view-grid owl-carousel" data-lgg-items="4" data-lg-items='4' data-md-items='4' data-sm-items='3' data-xs-items="2" data-xss-items="2" data-nav="true">
                      {/* start item */}
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/thom-say-kho">
                              <img src="/assets/images/products/thom-say-kho.jpg" alt="Thơm sấy khô" />
                            </a>
                            <div className="sale-flash"><div className="before" />- 10% </div>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/thom-say-kho" data-handle="thom-say-kho" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/thom-say-kho">Thơm sấy khô</a></h3>
                            <div className="price-box clearfix">Liên hệ</div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/tao-say-kho">
                              <img src="/assets/images/products/tao-say-kho.jpg" alt="tao-say-kho" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/cherry-do-canada-loai-to-15" data-handle="cherry-do-canada-loai-to-15" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/cherry-do-canada-loai-to-16">Táo mỹ sấy khô</a></h3>
                            <div className="price-box clearfix">
                              450,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/trai-cay-thap-cam">
                              <img src="/assets/images/products/trai-cay-thap-cam.jpg" alt="trai-cay-thap-cam" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/trai-cay-thap-cam" data-handle="trai-cay-thap-cam" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/trai-cay-thap-cam">Trái cây thập cẩm</a></h3>
                            <div className="price-box clearfix">
                              300,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/dua-say">
                              <img src="/assets/images/products/dua-say.jpg" alt="Dừa sấy" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/dua-say" data-handle="dua-say" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/dua-say">Dừa sấy</a></h3>
                            <div className="price-box clearfix">
                              160,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/tao-do-say-kho">
                              <img src="/assets/images/products/tao-do-say-kho.jpg" alt="Táo đỏ sấy khô" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/tao-do-say-kho" data-handle="tao-do-say-kho" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/tao-do-say-kho">Táo đỏ sấy khô</a></h3>
                            <div className="price-box clearfix">
                              400,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      </div>
                    </div>
                    <div className="tab-3 tab-content">
                      <div className="products products-view-grid owl-carousel" data-lgg-items="4" data-lg-items='4' data-md-items='4' data-sm-items='3' data-xs-items="2" data-xss-items="2" data-nav="true">
                      {/* start item */}
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/tao-do-say-kho">
                              <img src="/assets/images/products/tao-do-say-kho.jpg" alt="Táo đỏ sấy khô" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/tao-do-say-kho" data-handle="tao-do-say-kho" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/tao-do-say-kho">Táo đỏ sấy khô</a></h3>
                            <div className="price-box clearfix">
                              400,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/susu-uc">
                              <img src="/assets/images/products/susu-uc.jpg" alt="susu-uc" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/susu-uc" data-handle="susu-uc" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/susu-uc">SuSu ÚC</a></h3>
                            <div className="price-box clearfix">
                              65,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/trai-cay-thap-cam">
                              <img src="/assets/images/products/trai-cay-thap-cam.jpg" alt="trai-cay-thap-cam" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/trai-cay-thap-cam" data-handle="trai-cay-thap-cam" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/trai-cay-thap-cam">Trái cây thập cẩm</a></h3>
                            <div className="price-box clearfix">
                              300,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/cherry-do-canada-loai-to-15">
                              <img src="/assets/images/products/ki-wi-xanh-uc.jpg" alt="Quả Kiwi xanh" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/cherry-do-canada-loai-to-15" data-handle="cherry-do-canada-loai-to-15" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/cherry-do-canada-loai-to-1">Quả Kiwi xanh</a></h3>
                            <div className="price-box clearfix">
                              300,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="product-box">															
                          <div className="product-thumbnail flexbox-grid">	
                            <a href="/products/cherry-do-canada-loai-to-15">
                              <img src="/assets/images/products/dao-ton-ngo-khong.jpg" alt="Đào Tôn Ngộ Không" />
                            </a>
                            <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                              <form action="/cart/add" method="post" className="variants form-nut-grid margin-bottom-0" data-id="product-actions-1017293670" encType="multipart/form-data">
                                <div>
                                  <input type="hidden" name="Id" defaultValue={1033286532} />
                                  <input type="hidden" name="quantity" defaultValue={1} />
                                  <button className="btn-buy btn-cart btn btn-primary left-to add_to_cart" data-toggle="tooltip" title="Đặt hàng">
                                    <i className="fa fa-shopping-bag" />						
                                  </button>
                                  <a href="/products/cherry-do-canada-loai-to-15" data-handle="cherry-do-canada-loai-to-15" data-toggle="tooltip" title="Xem nhanh" className="btn-gray btn_view btn right-to quick-view">
                                    <i className="fa fa-eye" /></a>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="product-info a-center">
                            <h3 className="product-name"><a href="/products/cherry-do-canada-loai-to-16">Đào Tôn Ngộ Không</a></h3>
                            <div className="price-box clearfix">
                              400,000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      </div>
                    </div>
                  </div>
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
