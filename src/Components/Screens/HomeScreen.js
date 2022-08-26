import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg";
import "../Screens/HomeScreen.css";

function Home() {
  return (
    <div className="home" style={{zIndex: "-1", opacity: "0.9", backgroundImage: `url(${BannerImage}) ` }}>
      <div className="headerContainer">
        <h1> JayDev Kitchen </h1>
        <p> FOREIGN MENU AT YOUR FINGER TIP </p>
        <Link to="/contacts">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;