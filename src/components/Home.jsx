import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Left Text Content */}
      <div className="home-text">
        <h1>
          <span className="span1"> Mən</span>,
          <span className="highlight">Ali Nacafov</span>
        </h1>
        <p className="subtitle">
          Peşəkar Fotoqraf / Kreativ Vizyon / Hər Anın Hekayəsi
        </p>
       <a  className="cta-btn" href="#portfolio">İşlərimə bax</a>

        {/* Creative dynamic shapes */}
        <div className="dynamic-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>
      </div>

      {/* Right Image */}
      <div className="home-image">
        <img
          src="/eli.jpg"
          alt="Ali Nacafov"
        />
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Home;