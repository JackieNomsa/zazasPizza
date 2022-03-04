import React from "react";
import { BiDrink } from "react-icons/bi";

const Menu = () => {
    return <>
    <div className="main-menu">
    <div className="menu-page">
        <h1>Menu</h1>
        <button>Download Menu</button>
    </div>
    {/* add menu here */}
    <div>
        <BiDrink className="drinks"/>
    </div>
    </div>  
    </>
}

export default Menu;