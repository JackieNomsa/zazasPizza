import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="nav_bar">
        <h1>Logo</h1>
            <ul className="nav_links">
                <li><a href="/">Menu</a></li>
                <li><a href="/">Specials</a></li>
                <li><a href="/">Store</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>
        
        </>
    )
}
export default Navbar;