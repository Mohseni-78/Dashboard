import React, { useContext } from "react";

// Sass
import "./sidebar.scss";

// Icons
import { RiDashboardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbArrowUp, TbBorderStyle2 } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiLogstash } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

import { darkContext } from "../../context/DarkContextProvider";

const Sidebar = () => {
  const { dispatch } = useContext(darkContext);

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <span>Admin Panel</span>
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p>MAIN</p>
          <Link to="/">
            <li>
              <RiDashboardFill className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p>LISTS</p>
          <Link to="users">
            <li>
              <FiUsers className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <MdOutlineProductionQuantityLimits className="icon" />
            <span>Products</span>
          </li>
          <li>
            <TbBorderStyle2 className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <TbTruckDelivery className="icon" />
            <span>Delivery</span>
          </li>
          <p>USEFULL</p>
          <li>
            <IoIosStats className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <IoIosNotificationsOutline className="icon" />
            <span>Notification</span>
          </li>
          <p>SERVICE</p>
          <li>
            <MdOutlineHealthAndSafety className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SiLogstash className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <FiSettings className="icon" />
            <span>Settings</span>
          </li>
          <p>USER</p>
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <TbLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
