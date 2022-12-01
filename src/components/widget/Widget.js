import React from "react";

// Scss
import "./widget.scss";

// Icons
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { MdMonetizationOn } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <AiOutlineUser
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <FiShoppingCart
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MdMonetizationOn
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdAccountBalanceWallet
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  const amount = 100;
  const diff = 20;
  return (
    <div className="widget">
      <div className="left">
        <p className="title">{data.title}</p>
        <h4 className="counter">
          {data.isMoney && "$"} {amount}
        </h4>
        <p className="link">{data.link}</p>
      </div>
      <div className="right">
        <div className="percentage positive">
          <IoIosArrowUp className="icon" />
          <p>{diff} %</p>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
