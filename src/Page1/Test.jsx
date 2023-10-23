import React, { useEffect } from "react";
import TestimonialCard from "./TestimonialCard ";
import Img5 from "../images/image 5.png";
import Img7 from "../images/image 6.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./Test.css";

const Test = () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="testimonials">
            <TestimonialCard img={Img5} anima="right" companytext="The AI X-Ray Analysis system skyrocketed the diagnostic accuracy at our hospital while saving valuable time." company="HealWell"/>
            <TestimonialCard img={Img7} data-aos="fade-left" anima="left" companytext="Adopting AI technology has drastically improved patient satisfaction. It's a game-changer in healthcare!" company="LifeCare"/>
        </div>
    );
}

export default Test;