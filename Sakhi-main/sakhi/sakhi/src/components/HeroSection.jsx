import React from 'react';
import { Link } from 'react-router-dom';


function HeroSection() {

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empower. Educate. Every girl deserves a future.</h1>
        <p>Empowering girls, changing the world — one step at a time.</p>
        <div className="hero-buttons">
          <button onClick={handleScrollDown} className="primary-btn">Get Started</button>
          <Link to="/learn-more">
        <button className="primary-btn">Learn More</button>
      </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="/women.jpeg" alt="women empowerment" />
      </div>
    </section>
  );
}

export default HeroSection;
