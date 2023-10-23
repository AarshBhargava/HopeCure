import React, { useEffect } from "react";
import brainimg1 from "../images/brain-tumor-1.png";
import brainimg2 from "../images/brain-tumor-2.png";
import brainimg3 from "../images/brain-tumor-3.png";
import brainimg4 from "../images/brain-tumor-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";

const Gallery = () =>{
    useEffect(()=>{
        AOS.init()
    },[]);
    return(
        <div className="gallery">
            <header>
                <h2 data-aos="fade-up" className="gallery-content">AI Tech in Action</h2>
            </header>

            <section className="gallery-images">
                <div className="unit1">
                    <img data-aos="fade-right"src={brainimg1} alt=""/>
                    <img data-aos="fade-up"src={brainimg2} alt=""/>
                </div>
                <div className="unit2">
                    <img data-aos="fade-left"src={brainimg3} alt=""/>
                    <img data-aos="fade-up" src={brainimg4} alt=""/>
                </div>
            </section>

        </div>
    );
}

export default Gallery;