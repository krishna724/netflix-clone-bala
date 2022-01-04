import React, { useState, useEffect } from "react";
import "./navBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return window.removeEventListener("scroll", () => {});
  });
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetFlix"
      />
      <img
        className="nav_avatar"
        src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png"
        alt="funny logo"
      />
    </div>
  );
}

export default NavBar;
