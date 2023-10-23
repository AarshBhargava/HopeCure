import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./QACard.css";

const QACard= (props) => {
    useEffect(()=>{AOS.init()},[])
    return(
        <div className="qa">
            <h2 data-aos="fade-right" className="qa-question">{props.question}</h2>
            <h2 data-aos="fade-right" className="qa-answer">{props.answer}/</h2>
        </div>
    );
}

export default QACard