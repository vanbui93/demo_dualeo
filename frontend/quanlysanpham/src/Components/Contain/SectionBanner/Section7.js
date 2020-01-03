import React, { Component } from 'react'

export default class Section7 extends Component {
  render() {
    return (
      <div className="section_banner">
        <div className="container">
          <h2 className="hidden">Banner</h2>
          <div className="banner-image-col-tab">
            <div className="row d-md-flex">
              <div className="item px-4 mb-4">
                <a href="/" className="clearfix">
                  <img src="/assets/images/banner_coltab3_1.png" alt="" />
                </a>	
              </div>
              <div className="item px-4 mb-4">
                <a href="/" className="clearfix">
                <img src="/assets/images/banner_coltab3_2.png" alt="" />
                </a>	
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
