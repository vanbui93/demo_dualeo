import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomeSlider from './Components/Contain/SectionSlider/HomeSlider';
import MenuAside from './Components/Contain/SectionSlider/MenuAside';
import BannerSlide from './Components/Contain/SectionBanner/BannerSlide';
import Section3 from './Components/Contain/SectionProduct/Section3';
import Section4 from './Components/Contain/SectionProduct/Section4';
import Section6 from './Components/Contain/SectionProduct/Section6';
import Section7 from './Components/Contain/SectionBanner/Section7';
import Section8 from './Components/Contain/SectionNews/Section8';
import Section9 from './Components/Contain/SectionFb/Section9';
import Section10 from './Components/Contain/SectionBrand/Section10';
import Footer from './Components/Footer/Footer';
import NavStaclet from './Components/NavStacket/NavStaclet';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="awe-section-1" id="awe-section-1">	
        <div className="section_category_slider">
          <div className="container">
            <div className="row">
              <HomeSlider/>
              <MenuAside/>
            </div>
          </div>
        </div>
      </section>
      <section className="awe-section-2" id="awe-section-2"><BannerSlide/></section>
      <section className="awe-section-3" id="awe-section-3"><Section3/></section>
      <section className="awe-section-4" id="awe-section-4"><Section4/></section>
      <section className="awe-section-5" id="awe-section-5">	
        <div className="banner-image-col-tab">
          <div className="item px-4 mb-4">
            <a href="/" className="clearfix">
              <img src="/assets/images/banner_coltab2_1.png" alt="" />
            </a>	
          </div>
        </div>
      </section>
      <section className="awe-section-6" id="awe-section-6"><Section6/></section>
      <section className="awe-section-7" id="awe-section-7"><Section7/></section>
      <section className="awe-section-8" id="awe-section-8"><Section8/></section>
      <section className="awe-section-9" id="awe-section-9"><Section9/></section>
      <section className="awe-section-10" id="awe-section-10"><Section10/></section>
      <NavStaclet/>
      <Footer/>
    </div>
  );
}

export default App;
