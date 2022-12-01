import React, { useContext } from "react";

// Sass
import "./navbar.scss";

// Icons
import { AiOutlineSearch } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";

import { darkContext } from "../../context/DarkContextProvider";


const Navbar = () => {
  const { dispatch } = useContext(darkContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items">
          <div className="item">
            <GrLanguage className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <MdDarkMode className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <AiOutlineFullscreen className="icon" />
          </div>
          <div className="item">
            <IoMdNotificationsOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MdChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <AiOutlineUnorderedList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
