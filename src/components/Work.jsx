import React from "react";
import PickMeals from "./assets/pick-meals-image.png";
import ChooseMeals from "./assets/choose-image.png";
import DeliveryMeals from "./assets/delivery-image.png";

export const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your meal as you like",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Whenever you want food, we are here to provide ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "The fastest delivery all around the country",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
