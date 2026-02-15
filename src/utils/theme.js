const THEME_KEY = 'theme';

export default function initTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);

  const theme =
    storedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-bs-theme', theme);
}
