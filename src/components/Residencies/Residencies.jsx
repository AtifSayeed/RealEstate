import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residencies.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orange-text">Best Choices</span>
          <span className="primary-text">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
        <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secoundaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primary-text">{card.name}</span>
                <span className="secondary-text">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
const   SliderButtons = ()=>{
  const swiper= useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  );
};

