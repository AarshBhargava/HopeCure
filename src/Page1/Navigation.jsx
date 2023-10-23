import React from "react";
import "./Navigation.css";
import mainpageimage from "../images/image-removebg-preview.png";
import { Link } from "react-router-dom";

const Navigation =()=>{
    return(
        <nav className="navbar">
            <div className="navbar-icon">
                <Link to="/" ><img src={mainpageimage} width={'70vw'} alt="" /></Link>
            </div>
            <ul className="list-navbar">
                <li><a href="https://www.google.com">Free Trail</a></li>
                <li><a href="https://www.google.com">Hidden Pattern Estimation</a></li>
                <li><a href="https://www.google.com">Sign up</a></li>
            </ul>
        </nav>
    );
}


export default Navigation;