import React from "react";
import AirLogo from "../assets/airbnb-logo.png"
import "./Navbar.css";

const Navbar = () => {
   return(
      <header className="header">
         <nav className="header__nav">
            <img className="header__img" src={AirLogo} alt="" width="30px"/>
            <p className="header__p">airbnb</p>
         </nav>
      </header>
   );
}

export default Navbar;