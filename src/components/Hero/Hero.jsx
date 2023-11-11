import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>Discover <br/> Most Suitable <br/> Property</h1>
            </div>
            <div className="flexColStart hero-des">
                <span className="secoundary-text">Find a variety of properties that suit you very easily</span>
                <span className="secoundary-text">Forget all difficulties in finding a residence for you</span>
            </div>
            <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25} />
                 <input type="text"/>
                <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={88000} end={90000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secoundary-text">Premium Product</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={1000} end={2000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secoundary-text">Happy Customers</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp end={14}/>
                    <span>+</span>
                    </span>
                    <span className="secoundary-text">Award Winning</span>
                </div>
            </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <img src="./hero-image.png" alt="" className="image-container" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
