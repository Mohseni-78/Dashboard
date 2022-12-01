import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";

// Sass
import "./single.scss";

const Single = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="single">
          <div className="cart">
            <div className="top">
              <h1>Information</h1>
              <span>Edit</span>
            </div>
            <div className="bottom">
              <div className="left">
                <img
                  src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="avatar"
                />
              </div>
              <div className="right">
                <h1>Jane Doe</h1>
                <div className="details">
                  <div className="item">Email :</div>
                  <div className="valueItem">JanDoe@gmail.com</div>
                </div>
                <div className="details">
                  <div className="item">Phone :</div>
                  <div className="valueItem">+1 6465 780 322</div>
                </div>
                <div className="details">
                  <div className="item">Address :</div>
                  <div className="valueItem">North Dakota</div>
                </div>
                <div className="details">
                  <div className="item">Country :</div>
                  <div className="valueItem">USA</div>
                </div>
              </div>
            </div>
          </div>
          <Chart acpect={3 / 1} title="User rendering Last 6 month (Revenue)" />
        </div>
        <div className="tableUser">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
