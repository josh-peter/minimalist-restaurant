import React from "react";
import { useState } from "react";
import "../NavBar/NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>

        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/todos">ToDo</Link>
        <Link to="/aboutUs"> About </Link>
        <Link to="/contacts"> Contact </Link>
        <button onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
