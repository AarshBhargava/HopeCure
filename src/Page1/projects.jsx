import React from "react";
import Card from "./Card";
import image1 from "../images/image 2.png";
import image2 from "../images/image 3.png";
import image3 from "../images/image 4.png";
import "./Project.css";

const projects = () => {
    return(
        <div className="projects">
            <div className="rows">
                <Card text="Pattern Detection" textcontent="Find anomalies easily" img={image1}/>
                <Card text="Data Driven Insights" textcontent="Leverage patient data" img={image2}/>
                <Card text="Revolutionize Healthcare" textcontent ="Take diagnostics to new heights" img={image3}/>
            </div>
        </div>
    );
}

export default projects;