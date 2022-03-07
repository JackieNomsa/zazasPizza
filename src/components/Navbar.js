import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <>
        <div className="nav_bar">
        <h1><Link to="/" className="logo"><img src={logo}/></Link></h1>
            <ul className="nav_links">
                <li><Link to="/menu" href="/menu">Menu</Link></li>
                <li><Link to="/specials">Specials</Link></li>
                <li><Link to="/stores">Stores</Link></li>
                <li className="contact"><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        
        </>
    )
}
export default Navbar;