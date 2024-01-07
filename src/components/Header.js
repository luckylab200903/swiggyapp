import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SwiggyIcon from "../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const [login, setlogin] = useState(false);
  const handleClick = () => {
    setlogin(!login);
  };
  const status = useOnline();
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
          <li>Cart</li>
          <button className="bg-[#f0f0f0] p-4 rounded-full text-black" onClick={handleClick}>
            {login ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
