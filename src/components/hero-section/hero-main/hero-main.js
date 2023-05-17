import React, {useState} from "react";
import "./hero-main.css";
import "../../mini-components/button1.js/button1.css"
import Button1 from "../../mini-components/button1.js/button1";


function HeroMain () {
    
    const [backgroundColor, setBackgroundColor] = useState ('transparent')
    

    const onHover = () => {
        setBackgroundColor('rgba(66, 151, 66, 0.418)')
    }

    const onMouseLeave = () => {
        setBackgroundColor("transparent")
    }

    const style = {
        borderRadius: "25px",
        padding: "10px 45px ",
        fontWeight: "400",
        color: "white",
        border: " 1px solid #C8DCBC",
        fontSize: "28px",
        backgroundColor: backgroundColor,
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        cursor: 'pointer'
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return(
        <div className="hero-main-full-page">
            <h1 className="main-title">CHERNOBYL</h1>
            <p className="main-sub-title">YOU WANT TO KNOW MORE ? </p>
            <Button1 onClick={scrollToTop} onMouseEnter = {onHover} onMouseLeave={onMouseLeave} style = {style} classname="read-more" text="Read More"/>
            
        </div>
        
    )

}

export default HeroMain