import React from "react";

// Scss
import "./featured.scss";

// ProgressBar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Featured = () => {
  return (
    <div className="progressBar">
      <div className="title">
        <p className="title">Total Revenue</p>
        <BsThreeDotsVertical />
      </div>
      <CircularProgressbar
        value={70}
        text={"70%"}
        strokeWidth="5"
        className="progress"
      />
      <div className="center">
        <p>Tatal sales made today</p>
        <h1>$420</h1>
        <p>Prevois transactions processing last payments may not be includes</p>
      </div>

      <div className="summary">
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult">
            <TiArrowSortedUp />
            <div className="resultAmount positive">$12.4K</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult">
            <TiArrowSortedUp />
            <div className="resultAmount positive">$12.4K</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult">
            <TiArrowSortedDown />
            <div className="resultAmount negative">$12.4K</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
