import React, { useEffect } from "react";
import "./Faq.css";
import AOS from "aos";
import "aos/dist/aos.css";
import QACard from "./QACard";


const Faq = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <div className="Faq">
            <h2 data-aos="fade-out" className="faq-main-header">Common Questions</h2> 
            <div className="qa-section">
                <div className="qa-text"> 
                    <QACard question="How secure is patient data?" answer="Our top priority is ensuring the highest data security. We employ advanced encryption and adhere to strict compliance standards."/>
                    <QACard question="How reliable are the results?" answer="Our AI algorithms are designed to produce accurate results with a high level of consistency, while also being constantly updated to increase reliability."/>
                </div>
                <div className="qa-text">
                    <QACard question="Can I customize the tool?" answer="Absolutely! We offer various customization options to suit the unique needs of your hospital or practice."/>
                    <QACard question="Is there ongoing support?" answer="Yes, our team is committed to providing exceptional support, training, and updates to keep your AI tools in top shape."/>
                </div>
            </div>
        </div>
    );
}

export default Faq;