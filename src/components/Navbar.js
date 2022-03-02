import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="nav_bar">
        <h1><a href="/">Logo</a></h1>
            <ul className="nav_links">
                <li><a href="/menu">Menu</a></li>
                <li><a href="/specials">Specials</a></li>
                <li><a href="/stores">Stores</a></li>
                <li className="contact"><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
        
        </>
    )
}
export default Navbar;