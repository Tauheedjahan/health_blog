import React from "react";
import Slider from "react-slick";
import "./Programs.css";

// Use your blog images
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";

function Programs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const programs = [
    { id: 1, title: "Yoga Workshop", desc: "Improve flexibility and mindfulness with guided yoga sessions.", image: blog1 },
    { id: 2, title: "Nutrition Program", desc: "Learn healthy eating habits for a balanced lifestyle.", image: blog2 },
    { id: 3, title: "Home Workouts", desc: "Quick and effective workouts you can do at home.", image: blog3 },
    { id: 4, title: "Mental Health Coaching", desc: "Practical tips to reduce stress and improve mental clarity.", image: blog4 },
  ];

  return (
    <div className="programs-container">
      <h2 className="programs-heading">Our Programs</h2>
      <Slider {...settings}>
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <img src={program.image} alt={program.title} className="program-image" />
            <div className="program-content">
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <button className="join-btn">Join Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Programs;
