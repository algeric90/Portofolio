import React from 'react';

function Navigation() {
  return (
  <ul className="navbar-nav nav-underline ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a
        className="nav-link gap-2 p-0 px-md-2 py-md-1 active text-center "
        aria-current="page"
        href="#hero"
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link gap-2 p-0 px-md-2 py-md-1 text-center" href="#about">
        About Me
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link gap-2 p-0 px-md-2 py-md-1 text-center" href="#projects">
        Projects
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link gap-2 p-0 px-md-2 py-md-1 text-center" href="#contact">
        Contact Me
      </a>
    </li>
  </ul>
  );
}

export default Navigation;
