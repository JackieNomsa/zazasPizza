import React from "react";
import { MdMenuBook,MdLocationOn } from "react-icons/md";

const Home = () => {
    return (
        <>
        <div className="home"></div>
        <div className="pizza">
            <img src="https://themes.muffingroup.com/be/pizza/wp-content/uploads/2014/09/home_pizza_slider_1.png"></img>
        </div>
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