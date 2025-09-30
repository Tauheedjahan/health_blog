import React from "react";
import "./Contact.css";
import contactImg from "../assets/images/contact.jpg";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImg} alt="Contact" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form class ="form">
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
