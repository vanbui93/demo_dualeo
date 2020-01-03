import React, { Component } from 'react'

export default class Section9 extends Component {
  render() {
    return (
      <div className="section section_testimonial">
        <div className="container">
          <div className="section-title a-center">
            <h2 title="Phản hồi của khách"><a href="/">Phản hồi của khách</a></h2>			
            <p>Phản hồi của những khách hàng đã và đang sử dụng sản<br />phẩm trong suốt những năm qua</p>
          </div>
          <div className="section-content">
            <div className="testimonial-slider owl-carousel" data-lg-items={3} data-md-items={3} data-sm-items={2} data-xs-items={2} data-nav="true">
              <div className="testimonial-item text-center p-4 mb-5">
                <div className="image-avata">
                  <img src="/assets/images/testimonial_1.jpg" alt="Người mẫu - Ngọc Trinh" />
                </div>
                <h4 className="name">Người mẫu - Ngọc Trinh</h4>
                <p className="designation m-0">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin </p>
              </div>
              <div className="testimonial-item text-center p-4 mb-5">
                <div className="image-avata">
                  <img src="/assets/images/testimonial_2.jpg" alt="Diễn viên - Phương Trinh" />
                </div>
                <h4 className="name">Diễn viên - Phương Trinh</h4>
                <p className="designation m-0">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin </p>
              </div>
              <div className="testimonial-item text-center p-4 mb-5">
                <div className="image-avata">
                  <img src="/assets/images/testimonial_3.jpg" alt="Ca sĩ - Hoàng Yến" />
                </div>
                <h4 className="name">Ca sĩ - Hoàng Yến</h4>
                <p className="designation m-0">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
