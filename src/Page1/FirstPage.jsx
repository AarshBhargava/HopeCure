import React, { useEffect } from "react";
import heropageimage from "../images/image-removebg-preview.png";
import AOS from "aos";
import 'aos/dist/aos.css';

const FirstPage= () => {
    useEffect(()=>{
        AOS.init({});
    },[])
    return(
        <div className="main-heropage">
            <section className="left" data-aos = "fade-right">
                <h1 className="revolutionize">REVOLUTIONIZE</h1>
                <p className="healthcare">Healthcare</p>
            </section>
            <section className="right" data-aos = "fade -left">
                <img src={heropageimage} alt="photo" width={'50%'}/>
            </section>
        </div>
    )
}


export default FirstPage;