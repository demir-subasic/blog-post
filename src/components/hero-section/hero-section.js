import React from "react";
import "./hero-section.css";
import chernobyl from "../../icons-pictures/chernobyl-pic.jpg"
import HeroMain from "./hero-main/hero-main";
import Nav from "./nav/nav";


function HeroSection () {
return(
    <div style={{backgroundImage: `url(${chernobyl})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width: '100%', height: '100vh'}} className="components-wrapper">
    <Nav />
    <HeroMain />
    </div>
    
)
}
export default HeroSection;