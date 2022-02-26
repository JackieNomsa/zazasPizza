import React from "react";
import { MdMenuBook,MdLocationOn } from "react-icons/md";

const Home = () => {
    return (
        <>
        <div className="home"></div>
        <div className="menu-location">
            <div>
            <MdMenuBook className="menu"/>
            <p>Menu</p>
            </div>
            <div>
            <MdLocationOn className="location"/>
            <p>Location</p>
            </div>
        </div>
        
        </>
    )
}

export default Home;