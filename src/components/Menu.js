import React, { useState } from "react";
import Modal from "./Modal";

const Menu = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return <>
    <div className="main-menu">
    <div className="menu-page">
        <h1>Menu</h1>
        <button>Download Menu</button>
    </div>
    <div className="menu-links">
        {/* <div className="food"> */}
        <a href="#" onClick={() => setIsOpen(true)}>Food</a>

        <Modal data="is it working" open={isOpen} onClose={() => setIsOpen(false)}/>
        {/* </div> */}
    
    <a href="#">Drinks</a>
    <a href="#">Extras</a>
    </div>
    <div>
        
    </div>
    </div>  
    </>
}

export default Menu;