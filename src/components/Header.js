import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SwiggyIcon from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [login,setlogin]=useState(false)
  const handleClick=()=>{
    setlogin(!login)
  }
  window.addEventListener("online", (event) => {
    console.log("You are now connected to the network.");
  });
  return (
    <div className="header">
      <div className="Logo">
        <SwiggyIcon/>
      </div>
      <div className="nav-item">
        <ul className="navbar">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About Us</li></Link>
          <Link to={"/contact"}><li>Contact us</li></Link>
          <li>Cart</li>
          <button className="login" onClick={handleClick}>{login?"Login":"Logout"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
