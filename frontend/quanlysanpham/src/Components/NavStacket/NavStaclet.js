import React, { Component } from 'react'

export default class NavStaclet extends Component {
  render() {
    return (
    <div className="scroll_menu hidden-xs hidden-sm" id="myScrollspy">
      <ul className="nav nav-pills nav-stacked">
        <li>
          <a href="#awe-section-1" data-href="#awe-section-1">
            <img alt="section 1" src="/assets/images/icon-section/icon_section_1.png" />
            <span className="scroll_tooltip_1" style={{backgroundColor: '#fe9705', color: '#fff'}}>Danh mục</span>
          </a>
        </li>
        <li>
          <a href="#awe-section-3" data-href="#awe-section-3">
            <img alt="section 3" src="/assets/images/icon-section/icon_section_3.png" />
            <span className="scroll_tooltip_1" style={{backgroundColor: '#fe9705', color: '#fff'}}>Trái cây</span>
          </a>
        </li>
        <li>
          <a href="#awe-section-4" data-href="#awe-section-4">
            <img alt="section 4" src="/assets/images/icon-section/icon_section_4.png" />
            <span className="scroll_tooltip_1" style={{backgroundColor: '#fe9705', color: '#fff'}}>Rau tươi</span>
          </a>
        </li>
        <li>
          <a href="#awe-section-6" data-href="#awe-section-6">
            <img alt="section 6" src="/assets/images/icon-section/icon_section_6.png" />
            <span className="scroll_tooltip_1" style={{backgroundColor: '#fe9705', color: '#fff'}}>Thực phẩm khô</span>
          </a>
        </li>
        <li>
          <a href="#awe-section-8" data-href="#awe-section-8">
            <img alt="section 8" src="/assets/images/icon-section/icon_section_8.png" />
            <span className="scroll_tooltip_1" style={{backgroundColor: '#fe9705', color: '#fff'}}>Tin tức</span>
          </a>
        </li>
      </ul>
    </div>
    )
  }
}
