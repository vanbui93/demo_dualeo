import React, { Component } from 'react'

export default class HomeSlider extends Component {
  render() {
    return (
    <div className="col-md-9 col-md-push-3 px-md-4 px-0 mt-md-5 mb-5">
      <div className="home-slider owl-carousel owl-loaded owl-drag" data-lg-items={1} data-md-items={1} data-sm-items={1} data-xs-items={1} data-margin={0} data-nav="true">
        <div className="item">
          <a href="/" className="clearfix">
            <img src="/assets/images/slider_1.jpg" alt="" />
          </a>	
        </div>
        <div className="item">
          <a href="/" className="clearfix">
            <img src="/assets/images/slider_2.jpg" alt="" />
          </a>	
        </div>
        <div className="item">
          <a href="/" className="clearfix">
            <img src="/assets/images/slider_3.jpg" alt="" />
          </a>	
        </div>
      </div>
    </div>
    )
  }
}