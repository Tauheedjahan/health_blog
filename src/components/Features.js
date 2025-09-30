import React from "react";
import "./Features.css";
import { FaAppleAlt, FaSpa, FaDumbbell, FaHeart } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaAppleAlt />, title: "Nutrition", path: "/nutrition" },
    { icon: <FaSpa />, title: "Yoga", path: "/yoga" },
    { icon: <FaDumbbell />, title: "Exercise", path: "/exercise" },
    { icon: <FaHeart />, title: "Mental Health", path: "/mental-health" },
  ];

  const openNewTab = (path) => {
    window.open(path, "_blank"); // _blank = new tab
  };

  return (
    <div className="features-container">
      <h2 className="features-heading">Our Focus Areas</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            onClick={() => openNewTab(feature.path)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
