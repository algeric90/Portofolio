import React from 'react';
import { ThemeConsumer } from './../context/theme';
import { FiMoon, FiSun } from 'react-icons/fi';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="btn order-lg-last" onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
