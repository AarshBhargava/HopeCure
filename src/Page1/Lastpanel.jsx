import React from "react";
import "./Lastpanel.css";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";


const Lastpanel = () => {
    return(
        <div className="Lastpanel">
            <section className="Functionalities">
                <div className="first-panel">
                    <p className="first-child">Resources</p>
                    <div>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="second-panel">
                <p className="first-child">Hospital Solutions</p>
                    <div>
                        <p>Integration</p>
                        <p>Customization</p>
                        <p>Training</p>
                    </div>
                </div>
                <div className="third-panel">
                <p className="first-child">Company</p>
                    <div>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
            </section>
            <section className="Socials">
                <div className="icons">
                    <a href="/"><BsTwitter color="white"/></a>
                    <a href="https://www.instagram.com/_aarshbhargava_/"><AiFillInstagram color="white"/></a>
                    <a href="/"><BsFacebook color="white"/></a>
                    <a href="https://www.linkedin.com/in/aarsh-bhargava-651523205/"><AiFillLinkedin color="white"/></a>
                </div>
                <p className="rights">© 2023 AI X-Ray Analysis, All Rights Reserved</p>
            </section>
        </div>
    );
}

export default Lastpanel;