import React from 'react';
import { FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';

function About() {
  return (
    <section className="container my-5" id="about">
      <div className="card p-5">
        <h2 className="text-center fw-bold">About Me</h2>
        <div className="d-lg-flex justify-content-around align-items-center gap-5">
          <div className="col-12 col-lg-6">
            <p className="mb-4">
              I’m Alfa, a Frontend Web Developer who focuses on building responsive, accessible, and
              reliable web experiences. My goal is to make the web faster and easier for everyone
              through clean code and design. Collaboration and continuous learning are at the heart
              of my work.
            </p>
            <h3 className="mb-3 fs-5 text-center text-lg-start">My Skills</h3>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-5 mb-lg-0">
              <FaHtml5 size={32} />
              <FaCss3 size={32} />
              <RiJavascriptFill size={32} />
              <FaSass size={32} />
              <FaBootstrap size={32} />
              <FaReact size={32} />
            </div>
          </div>
          <img
            className="border rounded-circle mx-auto d-block mx-lg-0 d-lg-inline"
            src="/img/avatar-no-bg.png"
            alt="alfa rifa photo"
            width="300"
            height="300"
            id="avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
