import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
    return <>
        <div className="footer">
            <div className="first">
            <p>Terms & Conditions</p>
            {/* <p><img className="logo-small" src={logo}/></p> */}
            </div>
        <p className="copy">&copy; Copyright Reserved Jackie-Nomsa 2021
        </p>
        </div>
    </>
}

export default Footer;