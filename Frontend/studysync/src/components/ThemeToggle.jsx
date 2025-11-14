// src/components/ThemeToggle.jsx
import React from 'react';

export default function ThemeToggle({ theme, setTheme }){
  return (
    <button className="contact_button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
