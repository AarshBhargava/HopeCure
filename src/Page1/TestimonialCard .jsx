import React, { useState, useEffect } from "react";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {

  return (
    <div className="testicard">
      <img  src={props.img} alt="" className="testi-image" />
      <p data-aos={`fade-${props.anima}`} className="companytext">
          {props.companytext}
        </p>
      <p className="company" data-aos="fade-up">{props.company}</p>
    </div>
  );
};

export default TestimonialCard;
