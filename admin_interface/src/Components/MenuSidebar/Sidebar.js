import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="menu_sidebar">
        <div className="partial-menu-left">
          <div className="aside-logo">
            <a href="/admin"><img src="/assets/images/logo232x58.png" width={150} alt="" /></a>
          </div>
          <div className="partial-menu--top">
            <div className="next-nav-menu-left">
              <div className="main-menuLeft--block">
                <div className="nav-left menu-main--block">
                  <ul className="nav-list-items">
                    <li className="next-nav-item">
                      <a className="div-detect next-nav-link d-flex justify-content-between" href="/admin/add_products">
                        <div className="menu-parent">
                          <span className="text-menu-new">Sản phẩm</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
