import React from "react";
import "./About.css";

// Import images
import aboutImg from "../assets/images/about.jpg";
import banner from "../assets/images/banner.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section with Banner */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>About Us</h1>
        <p>"Your health is your wealth – let’s grow it together."</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="story-image">
          <img src={aboutImg} alt="Our Story" />
        </div>
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Welcome to our Health Blog! We started this journey to share
            practical wellness tips, fitness routines, and mental health advice
            that truly make a difference. Our goal is to inspire you to live a
            healthier, happier life with small but powerful lifestyle changes.
          </p>

          <h2>🌱 How It Started</h2>
          <p>
            Our journey began when we realized how confusing and overwhelming
            the internet can be when it comes to health advice. With so many fad
            diets, workout myths, and misleading tips out there, we wanted to
            build a space that’s simple, trustworthy, and practical.
          </p>

          <h2>💪 What We Believe</h2>
          <ul>
            <li>Health is not about perfection, it’s about balance.</li>
            <li>Small, consistent changes create the biggest results.</li>
            <li>Mental health is just as important as physical health.</li>
            <li>
              Everyone deserves access to simple, practical wellness advice.
            </li>
          </ul>

          <h2>🚀 Our Mission</h2>
          <p>
            We aim to empower people with the right knowledge about nutrition,
            yoga, workouts, and mental well-being. Our blog posts, guides, and
            programs are designed to be beginner-friendly and easy to follow.
          </p>

          <h2>🌟 Join Us</h2>
          <p>
            Whether you are here to find quick tips, try out yoga routines, or
            explore nutrition advice, you are part of our growing community.
            Together, let’s build healthier habits for a brighter future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To empower individuals with knowledge and tools to achieve their
            best physical and mental well-being.
          </p>
        </div>
        <div className="mission-card">
          <h3>Our Vision</h3>
          <p>
            A world where healthy living is accessible, enjoyable, and
            sustainable for everyone.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={img1} alt="Team Member" />
            <h4>Jay</h4>
            <p>Founder & Wellness Enthusiast</p>
          </div>
          <div className="team-member">
            <img src={img2} alt="Team Member" />
            <h4>Sarah</h4>
            <p>Nutrition Coach</p>
          </div>
          <div className="team-member">
            <img src={img3} alt="Team Member" />
            <h4>Emma</h4>
            <p>Yoga Instructor</p>
          </div>
          <div className="team-member">
            <img src={img4} alt="Team Member" />
            <h4>Alex</h4>
            <p>Fitness Trainer</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="about-cta">
        <h2>Join Our Community</h2>
        <p>Stay updated with the latest health tips and articles.</p>
        <button>Subscribe Now</button>
      </section>
    </div>
  );
}

export default About;
