import React, { Component } from 'react'

export default class BannerSlide extends Component {
  render() {
    return (
      <div className="section_banner">
        <div className="container">
          <h2 className="hidden">Banner</h2>
          <div className="banner-slider owl-carousel owl-loaded owl-drag" data-lg-items={3} data-md-items={3} data-sm-items={2} data-xs-items={2} data-nav="true">
            <div className="owl-item">
              <div className="item">
                <a href="/" className="clearfix">
                  <img src="/assets/images/banner1.jpg" alt="" />
                </a>	
              </div>
            </div>
            <div className="owl-item">
              <div className="item">
                <a href="/" className="clearfix">
                  <img src="/assets/images/banner2.jpg" alt="" />
                </a>	
              </div>
            </div>
            <div className="owl-item">
              <div className="item">
                <a href="/" className="clearfix">
                  <img src="/assets/images/banner3.jpg" alt="" />
                </a>	
              </div>
            </div>
            <div className="owl-item">
              <div className="item">
                <a href="/" className="clearfix">
                  <img src="/assets/images/banner3.jpg" alt="" />
                </a>	
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
