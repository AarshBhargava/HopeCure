import React, { useState } from "react";
import images from "../images/image 21.png";
import "./MainpageHeropage.css";

const MainpageHeropage = () => {

    const [image, setimage] = useState();

    const handlesubmit = async (e) => {
        setimage(e.target.value)
        console.log(image)
        const response = await fetch("https://localhost:8080/demo", {
            method: "GET",
        })
        console.log(response);
    }    

    return(
        <div className="mainheropage">
            <div className="mainpageheropage">
                <section className="input-value">
                    <h4 className="headline">Turn Your X-rays to Detect Tumor</h4>
                    <div className="border-box">
                        <img className="image-drag-drop" width={'30%'} src={images} alt="" />
                        <p className="input-text">drop and drag an your X-ray for prediction</p>
                        <form className="upload">
                            <input onChange={handlesubmit} type="file" name ="file" id="fileupload" className="input"/>
                            <button className="mainpage-bttn">Upload</button>
                        </form>
                    </div>
                </section>
            </div>  
        </div>
    );
}

export default MainpageHeropage;