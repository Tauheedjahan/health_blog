import React from "react";
import "./Articles.css";
import article1 from "../assets/images/article1.jpg";
import article2 from "../assets/images/article2.jpg";
import article3 from "../assets/images/article3.jpg";

function Articles() {
  return (
    <div className="articles-page">
      {/* Hero Section */}
      <section className="articles-hero">
        <h1>Latest Articles</h1>
        <p>Stay updated with the best health, fitness & wellness tips.</p>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        <div className="article-card">
          <img src={article1} alt="Nutrition Tips" />
          <h3>Top 10 Nutrition Tips for a Healthy Lifestyle</h3>
          <p>
            Discover simple and practical nutrition advice to boost your
            everyday energy and overall health.
          </p>
          <button>Read More</button>
        </div>

        <div className="article-card">
          <img src={article2} alt="Yoga Routine" />
          <h3>Morning Yoga Routine for Beginners</h3>
          <p>
            Start your day with a simple yoga flow to improve flexibility and
            calm your mind.
          </p>
          <button>Read More</button>
        </div>

        <div className="article-card">
          <img src={article3} alt="Mental Health" />
          <h3>5 Easy Ways to Improve Mental Health</h3>
          <p>
            Learn easy habits that can help you reduce stress and improve your
            overall well-being.
          </p>
          <button>Read More</button>
        </div>
      </section>
    </div>
  );
}

export default Articles;
