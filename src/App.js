import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";   
import Features from "./components/Features";
import Programs from "./components/Programs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages import
import Nutrition from "./pages/Nutrition";
import Yoga from "./pages/Yoga";
import Exercise from "./pages/Exercise";
import MentalHealth from "./pages/MentalHealth";
import About from "./pages/About";   
import Articles from "./pages/Articles";  // ✅ sirf ek import rakho

// slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Programs />
              <Contact />
            </>
          }
        />

        {/* ✅ Other Pages */}
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} /> {/* Articles page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
