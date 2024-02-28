import React from "react";
import AboutBackground from "./assets/about-background.png";
import AboutBackgroundImage from "./assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


export const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Discover the essence of balanced dining at Spice, where every dish embodies the perfect harmony of taste and nutrition. 
          Indulge in our thoughtfully curated menu, crafted with fresh, locally-sourced ingredients to nourish your body and delight your palate.
        </p>
        <p className="primary-text">
        Experience culinary excellence in an inviting atmosphere, where every visit promises a symphony of flavors and a celebration of 
        the importance of food in a balanced diet.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

