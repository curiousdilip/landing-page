import React from "react";
import "./available-btn.scss";

const greenColor = "#6dd33d";

export default function AvailableForWorkBtn() {
  return (
    <button className="available-for-work-btn">
      <div className="btn-content">
        <div
          className="status-indicator"
          style={{ backgroundColor: greenColor }}
        >
          <div className="ping-animation"></div>
        </div>
        <span className="btn-text">Available For Work</span>
      </div>
    </button>
  );
}
