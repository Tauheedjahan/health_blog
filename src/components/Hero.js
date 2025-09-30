import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

// local images import
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";

function Hero() {
  const navigate = useNavigate();

  const banners = [img1, img2, img3, img4];

  return (
    <div className="hero-container">
      <div className="slider">
        {banners.map((img, index) => (
          <div key={index} className="slide fade">
            <img src={img} alt={`banner-${index}`} />
          </div>
        ))}
      </div>

      <div className="hero-overlay">
        <h1>Welcome to EasyShop</h1>
        <p>Stay Fit Stay Healthy Stay Happy</p>
        <button onClick={() => navigate("/store")}>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
