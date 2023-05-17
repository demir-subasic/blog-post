import React, {useState} from "react";
import "./nav.css"
import { FaUser } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";

function Nav () {
    const [isOpen, SetIsOpen] = useState(false)

    
    return (
        <>
        <nav className="navigation">
            <div className="nav-menu">
                <div className="top-nav-div" onMouseEnter={() => {SetIsOpen(true)}} onMouseLeave={() => {SetIsOpen(false)}}>
                {isOpen && <div className="drop-down-menu">
               <ul className="drop-down-ul">
                 <li className="drop-down-li">Contacts</li>
                 <li className="drop-down-li">Help</li>
                 <li className="drop-down-li">PPPP</li>
               </ul>
                </div>}
                <RiMenu2Line style={{color: "white" ,fontSize: 30}} />
                <p className="menu-text">Menu</p>
                </div>
                <div className="mid-nav-div">
                <FaUser style={{color: "white" ,fontSize: 30}} />
                <p className="login-text">Login</p>
                </div>
                <div className="bottom-nav-div">
                    <a href="https://www.instagram.com/" target="_blank">
                    <button className="social-media instagram">Instagram</button>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                    <button className="social-media twitter">Twitter</button>  
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                    <button className="social-media facebook">Facebook</button>
                    </a>
                </div>
            </div>



        </nav>



</>
    )
}

export default Nav