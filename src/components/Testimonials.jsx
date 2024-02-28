import React from "react";
import ProfilePic from "./assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

export const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Prepare to be dazzled by the culinary delights and hospitality that await you. 
          It's more than just a restaurant; it's an extraordinary culinary journey you won't soon forget.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Each dish served was a masterpiece, meticulously crafted with the freshest ingredients and 
          bursting with flavors that danced on my palate. The chef's dedication to excellence truly shone through in every bite.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>James Anderson</h2>
      </div>
    </div>
  );
};
