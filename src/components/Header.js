import React, { useState,useContext } from "react";
import { Icon } from "@iconify/react";
import SwiggyIcon from "../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, setlogin] = useState(false);
  const {LogggedInUser}=useContext(UserContext)
  console.log(LogggedInUser);
  const handleClick = () => {
    setlogin(!login);
  };
  const status = useOnline();
  const cartItems=useSelector((store)=>{
    return store.cart.items
  })
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 items-center">
      <div className="p-4 items-center">
        <SwiggyIcon />
      </div>
      <div className="p-4 text-white">
        <ul className="flex p-4 gap-4 items-center font-bold text-xl">
          <li>{status ? "🟢" : "🔴"}</li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact us</li>
          </Link>
          <Link to={"/grocery"}>
            <li>Grocery</li>
          </Link>
          <Link to={"/cart"}><li>Cart-{cartItems.length}</li></Link>
          <li>{LogggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
