import React, { Component } from 'react'

export default class Section8 extends Component {
  render() {
    return (
        <div className="section section_blog">
          <div className="container">
            <div className="section-title a-center">
              <h2 title="Tin cập nhật"><a href="/blogs/news">Tin cập nhật</a></h2>			
              <p>Tin tức vệ sinh an toàn thực phẩm cập nhật mới nhất<br /> mỗi ngày cho bạn</p>
            </div>
            <div className="section-content">
              <div className="blog-slider owl-carousel owl-loaded owl-drag" data-lg-items={3} data-md-items={3} data-sm-items={2} data-xs-items={2} data-nav="true">
                <div className="owl-item">
                  <article className="blog-item text-center">
                    <div>
                      <div className="blog-item-thumbnail">						
                        <a href="/blogs/news/tu-che-mon-thach-sua-chua-thanh-long-lung-linh-sac-mau">
                          <img src="/assets/images/article/blog-img-2_large.jpg" alt="Tự chế món thạch sữa chua thanh long lung linh sắc màu" />
                        </a>
                      </div>
                      <div className="blog-item-info m-4">
                        <h3 className="blog-item-name"><a href="/blogs/news/tu-che-mon-thach-sua-chua-thanh-long-lung-linh-sac-mau">Tự chế món thạch sữa chua thanh long lung linh sắc màu</a></h3>
                        <p className="blog-item-summary">Thạch&nbsp;sữa chua&nbsp;thanh long là món ăn tráng miệng tuyệt vời cho các mẹ. Đặc biệt là các bạn trẻ. Bởi vì món ăn này rất thanh mát, dễ ăn, đẹp da và trông rất màu sắc...</p>
                        <a className="btn" href="/blogs/news/tu-che-mon-thach-sua-chua-thanh-long-lung-linh-sac-mau">Chi tiết</a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="owl-item">
                  <article className="blog-item text-center">
                    <div>
                      <div className="blog-item-thumbnail">						
                        <a href="/blogs/news/ky-thuat-trong-rau-sach-trong-chau-xop-tai-nha-don-gian">
                          <img src="/assets/images/article/blog-img-5_large.jpg" alt="Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản" />
                        </a>
                      </div>
                      <div className="blog-item-info m-4">
                        <h3 className="blog-item-name"><a href="/blogs/news/ky-thuat-trong-rau-sach-trong-chau-xop-tai-nha-don-gian">Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản</a></h3>
                        <p className="blog-item-summary">Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện...</p>
                        <a className="btn" href="/blogs/news/ky-thuat-trong-rau-sach-trong-chau-xop-tai-nha-don-gian">Chi tiết</a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="owl-item">
                  <article className="blog-item text-center">
                    <div>
                      <div className="blog-item-thumbnail">						
                        <a href="/blogs/news/vi-sao-hoa-qua-viet-that-the-truoc-con-loc-hang-nhap-ngoai">
                          <img src="/assets/images/article/blog-img-3_large.jpg" alt="Vì sao hoa quả Việt thất thế trước “cơn lốc” hàng nhập ngoại?" />
                        </a>
                      </div>
                      <div className="blog-item-info m-4">
                        <h3 className="blog-item-name"><a href="/blogs/news/vi-sao-hoa-qua-viet-that-the-truoc-con-loc-hang-nhap-ngoai">Vì sao hoa quả Việt thất thế trước “cơn lốc” hàng nhập ngoại?</a></h3>
                        <p className="blog-item-summary">Rau củ quả Việt Nam đang dần khẳng định tên tuổi của mình trên thị trường quốc tế khi nhiều mặt hàng đã có “visa” vào các thị trường khó tính như Mỹ, Nhật Bản, Australia…...</p>
                        <a className="btn" href="/blogs/news/vi-sao-hoa-qua-viet-that-the-truoc-con-loc-hang-nhap-ngoai">Chi tiết</a>
                      </div>
                    </div>
                  </article>
                </div>
                </div>
              </div>
          </div>
        </div>
    )
  }
}
