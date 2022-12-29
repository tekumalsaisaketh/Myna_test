import React, { useEffect, useState } from "react"
import '../styles/Header.css'
import HomeIcon from "./Icons";
const Header=()=>{
    
    return (
        <div className="header" >
         
            <div className="homebutton">
                <button>   
                    <a href="/">
                        <HomeIcon color="white" size={26}></HomeIcon>
                    </a>
                </button>
            </div>
            <a href="/">
                <div className="logobutton">
                    The Baker’s Heart
                </div>  
            </a>
            
            <div className="checkout">
                <a href='/checkout'>
                    Cart 
                </a>
            </div>
        </div>
    )
}

export default Header;