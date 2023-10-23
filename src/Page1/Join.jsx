import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "./Join.css";    
import AOS from "aos";
import "aos/dist/aos.css";

const Join = () => {
    useEffect(()=>{AOS.init()},[])
    return(
        <div className="join">
            <h2 data-aos="fade-up" className="main-header">Join Now</h2>
            <p data-aos="fade" className="join-text">Don’t get left behind in the healthcare revolution. Embrace the future and transform your diagnostics game with AI-powered X-Ray analysis.</p>
            <Link to="/mainpage"><button className="get-started-bttn">Get started</button></Link>
        </div>
    );
}

export default Join;