import { useEffect, useState } from 'react';
import ToggleTheme from './components/ToggleTheme';
import { ThemeProvider } from './context/theme';
import initTheme from './utils/theme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => initTheme());

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <header className="container fixed-top">
        <nav className="navbar navbar-expand-lg bg-opacity-25 px-2 rounded-4" id="navigation">
          <div className="container gap-2">
            <button
              className="navbar-toggler me-auto px-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand p-0 order-lg-first me-auto" href="#hero">
              <img
                className="d-inline-block align-text-top"
                src="/img/logo.svg"
                alt="Logo Alfa Rifa Luky"
                height="24"
              />
              <span className="d-none d-lg-inline ms-2 fw-bold">ARL</span>
            </a>
            <ToggleTheme />
            <div className="collapse navbar-collapse" id="navbarToggler">
              <Navigation />
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="text-center py-4">
        <hr />
        <small className="text-muted">
          Copyright &copy; 2026 Alfa Rifa Luky. All rights reserved.
        </small>
      </footer>
    </ThemeProvider>
  );
}

export default App;
