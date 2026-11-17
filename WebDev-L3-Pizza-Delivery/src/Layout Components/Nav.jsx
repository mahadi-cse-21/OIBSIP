import React from "react";
import './Nav.css'
function Nav(){
    return(
        <nav className="nav">
            <div className="logo">
                <img src="src/assets/hero.png" alt="Logo" />
            </div>
            <ul className="nav-item">
                <li>
                    <a href="">Dashboard</a>
                </li>
                <li>
                    <a href="">Pizza</a>
                </li>
                <li>
                    <a href="">Pizza builder</a>
                </li>
                <li>
                    <a href="">Discount</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav