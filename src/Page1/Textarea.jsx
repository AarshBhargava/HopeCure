import React, { useEffect } from "react";
import "./Textarea.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Textarea = () => {
    useEffect(()=>{
        AOS.init()
        },[])
    return(
        <div className= "text">
            <h2 data-aos="fade-right" className="ai-driven-ct-scan-analysis">AI-Driven CT-Scan Analysis</h2>
            <h3 data-aos="fade-up"  className="main-text-area">Unlock the hidden potential of X-rays with our cutting-edge AI technology! Uncover patterns and diagnose conditions faster than ever before. Empower your hospital or practice with advanced diagnostics.</h3>
        </div>
    );
}

export default Textarea;