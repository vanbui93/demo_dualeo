import React, { Component } from 'react'

export default class Section10 extends Component {
  render() {
    return (
    <div className="section section-brand mb-5">
      <div className="container">
        <h2 className="hidden">Thương hiệu</h2>
        <div className="owl-carousel owl-theme" data-lg-items={6} data-md-items={5} data-sm-items={4} data-xs-items={3} data-xss-items={2} data-margin={30}>
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand1.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand2.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand3.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand4.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand5.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
          <div className="brand-item">
            <a href="/" className="img25"><img src="/assets/images/brand6.png" alt="DualeoX - Giao diện bán hàng tốt nhất"/></a>
          </div>	
        </div>
      </div>
    </div>
    )
  }
}
