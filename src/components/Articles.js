import React from "react";
import "./Articles.css";

// Import image
import blog1 from "../assets/images/blog1.jpg";

function Articles() {
  return (
    <div className="single-article-container">
      <div className="article-image">
        <img src={blog1} alt="Healthy Lifestyle" />
      </div>
      <div className="article-content">
        <h2>
          <a href="/blog/healthy-lifestyle" className="article-link">
            10 Tips for a Healthy Lifestyle
          </a>
        </h2>
        <p>
          Living a healthy lifestyle doesn’t need to be complicated. By making
          small, consistent changes, you can improve both your body and mind.
          Here are 5 practical tips to get started: 
        </p>  <ol>
          <li>
            <strong>Eat Balanced Meals:</strong> Include fruits, vegetables,
            whole grains, and proteins in your diet daily.
          </li>
          <li>
            <strong>Stay Hydrated:</strong> Drink at least 7–8 glasses of water
            to keep your body energized.
          </li>
          <li>
            <strong>Exercise Regularly:</strong> Aim for at least 30 minutes of
            activity, whether it’s walking, yoga, or strength training.
          </li>
          <li>
            <strong>Get Enough Sleep:</strong> Sleep 7–9 hours to let your body
            recover and your mind stay sharp.
          </li>
          <li>
            <strong>Practice Mindfulness:</strong> Spend a few minutes daily on
            meditation, deep breathing, or journaling to reduce stress.
          </li>
        </ol>
        <a href="/blog/healthy-lifestyle" className="read-more-btn">
          Continue Reading →
        </a>
      </div>
    </div>
  );
}

export default Articles;
