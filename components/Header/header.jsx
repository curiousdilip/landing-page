"use client";
import React, { useEffect, useState } from "react";
import "./header.scss";
import AvailableForWorkBtn from "../AvailableForWork/AvailableForWork";

export default function Header() {
  const [time, setTime] = useState("");

  const formatTime = (num) => (num < 10 ? `0${num}` : `${num}`);

  const convertTo12HourFormat = (hh) => {
    const period = hh >= 12 ? "PM" : "AM";
    hh = hh % 12;
    hh = hh ? hh : 12;
    return { hh, period };
  };

  const updateTime = () => {
    const today = new Date();
    const hh = today.getHours();
    const mm = today.getMinutes();
    const ss = today.getSeconds();
    const { hh: formattedHH } = convertTo12HourFormat(hh);

    const formattedTime = `${formatTime(formattedHH)}:${formatTime(
      mm
    )}:${formatTime(ss)}`;
    setTime(formattedTime);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <AvailableForWorkBtn />
          <div className="time-display">
            <p className="time-label">Local Time ( IST )</p>
            <div className="time-box">
              <p className="time-text">{time}</p>
            </div>
          </div>
          {/* <button onClick={toggleMenu} className="menu-button">
            <span>
              {isMenuOpen ? (
                <X size={24} className="icon" />
              ) : (
                <Equal size={24} className="icon" />
              )}
            </span>
          </button> */}
        </div>
      </nav>
      {/* SideNavbar for mobile */}
      {isMenuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <SideNavbar isMenuOpen={isMenuOpen} />
        </div>
      )}
    </>
  );
}
