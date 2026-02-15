import React from 'react';
import { FiGithub } from 'react-icons/fi';

function Hero() {
  return (
    <section className="bg-gradient-45 from-bg-dark via-bg to-bg-light" id="hero">
      <h1 className="fw-bolder">Alfa Rifa Luky Achmad Rayendra</h1>
      <p>Frontend Web Developer</p>
      <div className="d-flex gap-3 justify-content-center">
        <a href="./cv/Alfa Rifa Luky Achmad Rayendra - Frontend Developer.pdf" download className="btn">
          Download CV
        </a>
        <a href="https://github.com/alfarifalar" className="btn">
          <FiGithub />
        </a>
      </div>
    </section>
  );
}

export default Hero;
