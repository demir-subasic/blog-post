import React from "react";
import "./cards-item.css"


function CardItems ({pic, text}) {
    return (
     <div className="single-card">
        <img className="picture"  src={pic}/>
        <p className="cards-text">{text}</p>
     </div>
    )
}

export default CardItems