import React from "react";

// Sass
import "./home.scss";

// Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgetContainer">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          {/* Featured Component */}
          <Featured />
          {/* Chart Component */}
          <Chart acpect={2 / 1} title="Last 6 month (Revenue)" />
        </div>
        <div className="listTransaction">
          {/* Table Component */}
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
