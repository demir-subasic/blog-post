import React from "react";
import "./button1.css"

function Button1 ({onClick,onMouseEnter, onMouseLeave, style, text, classname}) {
    return (
    <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style} className={classname}>{text}</button>
    )
}
export default Button1